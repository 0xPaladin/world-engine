/*
 * From https://www.redblobgames.com/x/1843-planet-generation/
 * Copyright 2018 Red Blob Games <redblobgames@gmail.com>
 * License: Apache v2.0 <http://www.apache.org/licenses/LICENSE-2.0.html>
 *
 * Adapting mapgen4 code for a sphere. Quick & dirty, for procjam2018
 */

let _seed = 123;

const SimplexNoise = require('simplex-noise');
const {default: FlatQueue} = require('flatqueue');
const colormap = require('../colormap');
const {vec3, vec4, mat4} = require('gl-matrix');
const {makeRandInt, makeRandFloat} = require('@redblobgames/prng');
const SphereMesh = require('../sphere-mesh');
const {generatePopulation} = require('../world-population');

const regl = require('regl')({
    canvas: "#output",
    extensions: ['OES_element_index_uint', 'OES_standard_derivatives']
});

const u_colormap = regl.texture({
    width: colormap.width,
    height: colormap.height,
    data: colormap.data,
    wrapS: 'clamp',
    wrapT: 'clamp'
});


/* UI parameters */
let N = 10000;
let P = 20;
let jitter = 0.75;
let rotation = -1;
let drawMode = 'quads';
let draw_plateVectors = false;
let draw_plateBoundaries = false;
let tempOffset = 0;
let rainOffset = 0;
let waterLevel = 0;

window.generateMesh = generateMesh;
window.setSeed = newSeed => { _seed = newSeed; };
window.getSeed = () => _seed;
window.setN = newN => { N = newN; generateMesh(); };
window.setP = newP => { P = newP; generateMap(); };
window.setJitter = newJitter => { jitter = newJitter; generateMesh(); };
window.setRotation = newRotation => { rotation = newRotation; draw(); };
window.setDrawMode = newMode => { drawMode = newMode; draw(); };
window.setDrawPlateVectors = flag => { draw_plateVectors = flag; draw(); };
window.setDrawPlateBoundaries = flag => { draw_plateBoundaries = flag; draw(); };
window.setTempOffset = v => { tempOffset = v; draw(); };
window.setRainOffset = v => { rainOffset = v; draw(); };
window.setWaterLevel = v => { waterLevel = v; draw(); };
window.getTempOffset = () => tempOffset;
window.getRainOffset = () => rainOffset;
window.setCultureOverlay = flag => { draw_cultureOverlay = flag; draw(); };
window.setStateBorders = flag => { draw_stateBorders = flag; draw(); };
window.applyPopulation = () => {
  if (!mesh || !map.r_elevation) return;
  population = generatePopulation(mesh, map, window._numCultures || 8, _seed);
  window._population = population;
  _overlayDirty = true;
  buildOverlayGeometry(mesh, population);
  draw();
};
window.getNumCultures = () => window._numCultures || 8;
window.setNumCultures = v => { window._numCultures = v; };

const renderPoints = regl({
    frag: `
precision mediump float;
void main() {
   gl_FragColor = vec4(0, 0, 0, 1);
}
`,

    vert: `
precision mediump float;
uniform mat4 u_projection;
uniform float u_pointsize;
attribute vec3 a_xyz;
void main() {
  gl_Position = u_projection * vec4(a_xyz, 1);
  gl_PointSize = gl_Position.z > 0.0? 0.0 : u_pointsize;
}
`,

    depth: {
        enable: false,
    },
    
    uniforms: {
        u_projection: regl.prop('u_projection'),
        u_pointsize: regl.prop('u_pointsize'),
    },

    primitive: 'points',
    count: regl.prop('count'),
    attributes: {
        a_xyz: regl.prop('a_xyz'),
    },
});


const renderLines = regl({
    frag: `
precision mediump float;
uniform vec4 u_multiply_rgba, u_add_rgba;
varying vec4 v_rgba;
void main() {
   gl_FragColor = v_rgba * u_multiply_rgba + u_add_rgba;
}
`,

    vert: `
precision mediump float;
uniform mat4 u_projection;
attribute vec3 a_xyz;
attribute vec4 a_rgba;
varying vec4 v_rgba;
void main() {
  vec4 pos = u_projection * vec4(a_xyz, 1);
  v_rgba = (-2.0 * pos.z) * a_rgba;
  gl_Position = pos;
}
`,

    depth: {
        enable: false,
    },
    
    uniforms: {
        u_projection: regl.prop('u_projection'),
        u_multiply_rgba: regl.prop('u_multiply_rgba'),
        u_add_rgba: regl.prop('u_add_rgba'),
    },

    blend: {
        enable: true,
        func: {src: 'one', dst: 'one minus src alpha'},
        equation: {
            rgb: 'add',
            alpha: 'add'
        },
        color: [0, 0, 0, 0],
    },
    primitive: 'lines',
    count: regl.prop('count'),
    attributes: {
        a_xyz: regl.prop('a_xyz'),
        a_rgba: regl.prop('a_rgba'),
    },
});


const renderTriangles = regl({
    frag: `
precision mediump float;
uniform sampler2D u_colormap;
varying vec2 v_tm;
void main() {
   float e = v_tm.x > 0.0? 0.5 * (v_tm.x * v_tm.x + 1.0) : 0.5 * (v_tm.x + 1.0);
   gl_FragColor = texture2D(u_colormap, vec2(e, v_tm.y));
}
`,

    vert: `
precision mediump float;
uniform mat4 u_projection;
attribute vec3 a_xyz;
attribute vec2 a_tm;
varying vec2 v_tm;
void main() {
  v_tm = a_tm;
  gl_Position = u_projection * vec4(a_xyz, 1);
}
`,

    uniforms: {
        u_colormap: u_colormap,
        u_projection: regl.prop('u_projection'),
    },

    count: regl.prop('count'),
    attributes: {
        a_xyz: regl.prop('a_xyz'),
        a_tm: regl.prop('a_tm'),
    },
});


const renderIndexedTriangles = regl({
    frag: `
#extension GL_OES_standard_derivatives : enable

precision mediump float;

uniform sampler2D u_colormap;
uniform vec2 u_light_angle;
uniform float u_inverse_texture_size, u_slope, u_flat, u_c, u_d, u_outline_strength;

varying vec2 v_tm;
void main() {
   float e = v_tm.x > 0.0? 0.5 * (v_tm.x * v_tm.x + 1.0) : 0.5 * (v_tm.x + 1.0);
   float dedx = dFdx(v_tm.x);
   float dedy = dFdy(v_tm.x);
   vec3 slope_vector = normalize(vec3(dedy, dedx, u_d * 2.0 * u_inverse_texture_size));
   vec3 light_vector = normalize(vec3(u_light_angle, mix(u_slope, u_flat, slope_vector.z)));
   float light = u_c + max(0.0, dot(light_vector, slope_vector));
   float outline = 1.0 + u_outline_strength * max(dedx,dedy);
   gl_FragColor = vec4(texture2D(u_colormap, vec2(e, v_tm.y)).rgb * light / outline, 1);
}
`,

    vert: `
precision mediump float;
uniform mat4 u_projection;
attribute vec3 a_xyz;
attribute vec2 a_tm;
varying vec2 v_tm;
void main() {
  v_tm = a_tm;
  gl_Position = u_projection * vec4(a_xyz, 1);
}
`,

    uniforms: {
        u_colormap: u_colormap,
        u_projection: regl.prop('u_projection'),
        u_light_angle: [Math.cos(Math.PI/3), Math.sin(Math.PI/3)],
        u_inverse_texture_size: 1.0 / 2048,
        u_d: 60,
        u_c: 0.15,
        u_slope: 6,
        u_flat: 2.5,
        u_outline_strength: 5,
    },

    elements: regl.prop('elements'),
    attributes: {
        a_xyz: regl.prop('a_xyz'),
        a_tm: regl.prop('a_tm'),
    },
});

const renderFlatTriangles = regl({
    depth: {enable: true, func: 'lequal', mask: false},
    frag: `
precision mediump float;
varying vec3 v_rgb;
void main() {
   gl_FragColor = vec4(v_rgb, 1);
}
`,
    vert: `
precision mediump float;
uniform mat4 u_projection;
attribute vec3 a_xyz;
attribute vec3 a_rgb;
varying vec3 v_rgb;
void main() {
  v_rgb = a_rgb;
  gl_Position = u_projection * vec4(a_xyz, 1);
}
`,
    uniforms: {
        u_projection: regl.prop('u_projection'),
    },
    count: regl.prop('count'),
    attributes: {
        a_xyz: regl.prop('a_xyz'),
        a_rgb: regl.prop('a_rgb'),
    },
});

/**********************************************************************
 * Geometry
 */

let _randomNoise = new SimplexNoise(makeRandFloat(_seed));
const persistence = 2/3;
const amplitudes = Array.from({length: 5}, (_, octave) => Math.pow(persistence, octave));

function fbm_noise(nx, ny, nz) {
    let sum = 0, sumOfAmplitudes = 0;
    for (let octave = 0; octave < amplitudes.length; octave++) {
        let frequency = 1 << octave;
        sum += amplitudes[octave] * _randomNoise.noise3D(nx * frequency, ny * frequency, nz * frequency);
        sumOfAmplitudes += amplitudes[octave];
    }
    return sum / sumOfAmplitudes;
}

function generateTriangleCenters(mesh, {r_xyz}) {
    let {numTriangles} = mesh;
    let t_xyz = new Float32Array(3 * numTriangles);
    for (let t = 0; t < numTriangles; t++) {
        let a = mesh.s_begin_r(3*t),
            b = mesh.s_begin_r(3*t+1),
            c = mesh.s_begin_r(3*t+2);
        // Calculate centroid
        let ax = r_xyz[3*a], ay = r_xyz[3*a+1], az = r_xyz[3*a+2],
            bx = r_xyz[3*b], by = r_xyz[3*b+1], bz = r_xyz[3*b+2],
            cx = r_xyz[3*c], cy = r_xyz[3*c+1], cz = r_xyz[3*c+2];
        t_xyz[3*t  ] = (ax+bx+cx)/3;
        t_xyz[3*t+1] = (ay+by+cy)/3;
        t_xyz[3*t+2] = (az+bz+cz)/3;
    }
    return t_xyz;
}

function generateVoronoiGeometry(mesh, {r_xyz, t_xyz}, r_color_fn) {
    const {numSides} = mesh;
    let xyz = new Float32Array(3 * 3 * numSides),
        tm = new Float32Array(3 * 2 * numSides);

    for (let s = 0; s < numSides; s++) {
        let inner_t = mesh.s_inner_t(s),
            outer_t = mesh.s_outer_t(s),
            begin_r = mesh.s_begin_r(s);
        let rgb = r_color_fn(begin_r);
        for (let i = 0; i < 3; i++) {
            xyz[9 * s + 0 + i] = t_xyz[3 * inner_t + i];
        }
        for (let i = 0; i < 3; i++) {
            xyz[9 * s + 3 + i] = t_xyz[3 * outer_t + i];
        }
        for (let i = 0; i < 3; i++) {
            xyz[9 * s + 6 + i] = r_xyz[3 * begin_r + i];
        }
        for (let j = 0; j < 3; j++) {
            for (let i = 0; i < 2; i++) {
                tm[6 * s + 2 * j + i] = rgb[i];
            }
        }
    }
    return {xyz, tm};
}

class QuadGeometry {
    constructor () {
        /* xyz = position in 3-space;
           tm = temperature, moisture
           I = indices for indexed drawing mode */
    }

    applyClimate(numRegions, numTriangles, r_elevation, r_moisture, t_elevation, t_moisture, tempOff, rainOff, waterOff) {
        const {tm} = this;
        let p = 0;
        let scale = tempOff > 0 ? 1 / (1 + tempOff * 3) : (1 + Math.abs(tempOff) * 2);
        for (let r = 0; r < numRegions; r++) {
            let e = r_elevation[r] - waterOff;
            tm[p++] = e > 0 ? e * scale : e;
            tm[p++] = Math.min(1, Math.max(0, r_moisture[r] + rainOff));
        }
        for (let t = 0; t < numTriangles; t++) {
            let e = t_elevation[t] - waterOff;
            tm[p++] = e > 0 ? e * scale : e;
            tm[p++] = Math.min(1, Math.max(0, t_moisture[t] + rainOff));
        }
    }

    setMesh({numSides, numRegions, numTriangles}) {
        this.I = new Int32Array(3 * numSides);
        this.xyz = new Float32Array(3 * (numRegions + numTriangles));
        this.tm = new Float32Array(2 * (numRegions + numTriangles));
    }

    setMap(mesh, {r_xyz, t_xyz, r_color_fn, s_flow, r_elevation, t_elevation, r_moisture, t_moisture}) {
        const V = 0.95;
        const {numSides, numRegions, numTriangles} = mesh;
        const {xyz, tm, I} = this;

        xyz.set(r_xyz);
        xyz.set(t_xyz, r_xyz.length);
        // TODO: multiply all the r, t points by the elevation, taking V into account

        let p = 0;
        for (let r = 0; r < numRegions; r++) {
            tm[p++] = r_elevation[r];
            tm[p++] = r_moisture[r];
        }
        for (let t = 0; t < numTriangles; t++) {
            tm[p++] = t_elevation[t];
            tm[p++] = t_moisture[t];
        }

        let i = 0, count_valley = 0, count_ridge = 0;
        let {_halfedges, _triangles} = mesh;
        for (let s = 0; s < numSides; s++) {
            let opposite_s = mesh.s_opposite_s(s),
                r1 = mesh.s_begin_r(s),
                r2 = mesh.s_begin_r(opposite_s),
                t1 = mesh.s_inner_t(s),
                t2 = mesh.s_inner_t(opposite_s);
            
            // Each quadrilateral is turned into two triangles, so each
            // half-edge gets turned into one. There are two ways to fold
            // a quadrilateral. This is usually a nuisance but in this
            // case it's a feature. See the explanation here
            // https://www.redblobgames.com/x/1725-procedural-elevation/#rendering
            let coast = r_elevation[r1] < 0.0 || r_elevation[r2] < 0.0;
            if (coast || s_flow[s] > 0 || s_flow[opposite_s] > 0) {
                // It's a coastal or river edge, forming a valley
                I[i++] = r1; I[i++] = numRegions+t2; I[i++] = numRegions+t1;
                count_valley++;
            } else {
                // It's a ridge
                I[i++] = r1; I[i++] = r2; I[i++] = numRegions+t1;
                count_ridge++;
            }
        }

        console.log('ridge=', count_ridge, ', valley=', count_valley);
    }
}

/**********************************************************************
 * Plates
 */

function pickRandomRegions(mesh, N, randInt) {
    let {numRegions} = mesh;
    let chosen_r = new Set();
    while (chosen_r.size < N && chosen_r.size < numRegions) {
        chosen_r.add(randInt(numRegions));
    }
    return chosen_r;
}


function generatePlates(mesh, r_xyz) {
    let r_plate = new Int32Array(mesh.numRegions);
    r_plate.fill(-1);
    let plate_r = pickRandomRegions(mesh, Math.min(P, N), makeRandInt(_seed));
    let queue = Array.from(plate_r);
    for (let r of queue) { r_plate[r] = r; }
    let out_r = [];
    const randInt = makeRandInt(_seed);

    /* In Breadth First Search (BFS) the queue will be all elements in
       queue[queue_out ... queue.length-1]. Pushing onto the queue
       adds an element to the end, increasing queue.length. Popping
       from the queue removes an element from the beginning by
       increasing queue_out.

       To add variety, use a random search instead of a breadth first
       search. The frontier of elements to be expanded is still
       queue[queue_out ... queue.length-1], but pick a random element
       to pop instead of the earliest one. Do this by swapping
       queue[pos] and queue[queue_out].
    */
    
    for (let queue_out = 0; queue_out < queue.length; queue_out++) {
        let pos = queue_out + randInt(queue.length - queue_out);
        let current_r = queue[pos];
        queue[pos] = queue[queue_out];
        mesh.r_circulate_r(out_r, current_r);
        for (let neighbor_r of out_r) {
            if (r_plate[neighbor_r] === -1) {
                r_plate[neighbor_r] = r_plate[current_r];
                queue.push(neighbor_r);
            }
        }
    }

    // Assign a random movement vector for each plate
    let plate_vec = [];
    for (let center_r of plate_r) {
        let neighbor_r = mesh.r_circulate_r([], center_r)[0];
        let p0 = r_xyz.slice(3 * center_r, 3 * center_r + 3),
            p1 = r_xyz.slice(3 * neighbor_r, 3 * neighbor_r + 3);
        plate_vec[center_r] = vec3.normalize([], vec3.subtract([], p1, p0));
    }

    return {plate_r, r_plate, plate_vec};
}


/* Distance from any point in seeds_r to all other points, but 
 * don't go past any point in stop_r */
function assignDistanceField(mesh, seeds_r, stop_r) {
    const randInt = makeRandInt(_seed);
    let {numRegions} = mesh;
    let r_distance = new Float32Array(numRegions);
    r_distance.fill(Infinity);
    
    let queue = [];
    for (let r of seeds_r) {
        queue.push(r);
        r_distance[r] = 0;
    }

    /* Random search adapted from breadth first search */
    let out_r = [];
    for (let queue_out = 0; queue_out < queue.length; queue_out++) {
        let pos = queue_out + randInt(queue.length - queue_out);
        let current_r = queue[pos];
        queue[pos] = queue[queue_out];
        mesh.r_circulate_r(out_r, current_r);
        for (let neighbor_r of out_r) {
            if (r_distance[neighbor_r] === Infinity && !stop_r.has(neighbor_r)) {
                r_distance[neighbor_r] = r_distance[current_r] + 1;
                queue.push(neighbor_r);
            }
        }
    }
    return r_distance;
    // TODO: possible enhancement: keep track of which seed is closest
    // to this point, so that we can assign variable mountain/ocean
    // elevation to each seed instead of them always being +1/-1
}


/* Calculate the collision measure, which is the amount
 * that any neighbor's plate vector is pushing against 
 * the current plate vector. */
const COLLISION_THRESHOLD = 0.75;
function findCollisions(mesh, r_xyz, plate_is_ocean, r_plate, plate_vec) {
    const deltaTime = 1e-2; // simulate movement
    let {numRegions} = mesh;
    let mountain_r = new Set(),
        coastline_r = new Set(),
        ocean_r = new Set();
    let r_out = [];
    /* For each region, I want to know how much it's being compressed
       into an adjacent region. The "compression" is the change in
       distance as the two regions move. I'm looking for the adjacent
       region from a different plate that pushes most into this one*/
    for (let current_r = 0; current_r < numRegions; current_r++) {
        let bestCompression = Infinity, best_r = -1;
        mesh.r_circulate_r(r_out, current_r);
        for (let neighbor_r of r_out) {
            if (r_plate[current_r] !== r_plate[neighbor_r]) {
                /* sometimes I regret storing xyz in a compact array... */
                let current_pos = r_xyz.slice(3 * current_r, 3 * current_r + 3),
                    neighbor_pos = r_xyz.slice(3 * neighbor_r, 3 * neighbor_r + 3);
                /* simulate movement for deltaTime seconds */
                let distanceBefore = vec3.distance(current_pos, neighbor_pos),
                    distanceAfter = vec3.distance(vec3.add([], current_pos, vec3.scale([], plate_vec[r_plate[current_r]], deltaTime)),
                                                  vec3.add([], neighbor_pos, vec3.scale([], plate_vec[r_plate[neighbor_r]], deltaTime)));
                /* how much closer did these regions get to each other? */
                let compression = distanceBefore - distanceAfter;
                /* keep track of the adjacent region that gets closest */
                // TODO: shouldn't this be > ? need to re-tune all the parameters for the page after changing this
                if (compression < bestCompression) {
                    best_r = neighbor_r;
                    bestCompression = compression;
                }
            }
        }
        if (best_r !== -1) {
            /* at this point, bestCompression tells us how much closer
               we are getting to the region that's pushing into us the most */
            let collided = bestCompression > COLLISION_THRESHOLD * deltaTime;
            let current_plate = r_plate[current_r],
                best_plate = r_plate[best_r];
            if (plate_is_ocean.has(current_plate) && plate_is_ocean.has(best_plate)) {
                (collided? coastline_r : ocean_r).add(current_r);
            } else if (!plate_is_ocean.has(current_plate) && !plate_is_ocean.has(best_plate)) {
                if (collided) mountain_r.add(current_plate);
            } else {
                (collided? mountain_r : coastline_r).add(current_r);
            }
        }
    }
    return {mountain_r, coastline_r, ocean_r};
}


function assignRegionElevation(mesh, {r_xyz, plate_is_ocean, r_plate, plate_vec, /* out */ r_elevation}) {
    const epsilon = 1e-3;
    let {numRegions} = mesh;

    let {mountain_r, coastline_r, ocean_r} = findCollisions(
        mesh, r_xyz, plate_is_ocean, r_plate, plate_vec);

    for (let r = 0; r < numRegions; r++) {
        if (r_plate[r] === r) {
            (plate_is_ocean.has(r)? ocean_r : coastline_r).add(r);
        }
    }

    let stop_r = new Set();
    for (let r of mountain_r) { stop_r.add(r); }
    for (let r of coastline_r) { stop_r.add(r); }
    for (let r of ocean_r) { stop_r.add(r); }

    console.log('seeds mountain/coastline/ocean:', mountain_r.size, coastline_r.size, ocean_r.size, 'plate_is_ocean', plate_is_ocean.size,'/', P);
    let r_distance_a = assignDistanceField(mesh, mountain_r, ocean_r);
    let r_distance_b = assignDistanceField(mesh, ocean_r, coastline_r);
    let r_distance_c = assignDistanceField(mesh, coastline_r, stop_r);

    for (let r = 0; r < numRegions; r++) {
        let a = r_distance_a[r] + epsilon,
            b = r_distance_b[r] + epsilon,
            c = r_distance_c[r] + epsilon;
        if (a === Infinity && b === Infinity) {
            r_elevation[r] = 0.1;
        } else {
            r_elevation[r] = (1/a - 1/b) / (1/a + 1/b + 1/c);
        }
        r_elevation[r] += 0.1 * fbm_noise(r_xyz[3*r], r_xyz[3*r+1], r_xyz[3*r+2]);
    }
}



/**********************************************************************
 * Rivers - from mapgen4
 */

function assignTriangleValues(mesh, {r_elevation, r_moisture, /* out */ t_elevation, t_moisture}) {
    const {numTriangles} = mesh;
    for (let t = 0; t < numTriangles; t++) {
        let s0 = 3*t;
        let r1 = mesh.s_begin_r(s0),
            r2 = mesh.s_begin_r(s0+1),
            r3 = mesh.s_begin_r(s0+2);
        t_elevation[t] = 1/3 * (r_elevation[r1] + r_elevation[r2] + r_elevation[r3]);
        t_moisture[t] = 1/3 * (r_moisture[r1] + r_moisture[r2] + r_moisture[r3]);
    }
}


let _queue = new FlatQueue();
function assignDownflow(mesh, {t_elevation, /* out */ t_downflow_s, /* out */ order_t}) {
    /* Use a priority queue, starting with the ocean triangles and
     * moving upwards using elevation as the priority, to visit all
     * the land triangles */
    let {numTriangles} = mesh,
        queue_in = 0;
    t_downflow_s.fill(-999);
    /* Part 1: ocean triangles get downslope assigned to the lowest neighbor */
    for (let t = 0; t < numTriangles; t++) {
        if (t_elevation[t] < 0) {
            let best_s = -1, best_e = t_elevation[t];
            for (let j = 0; j < 3; j++) {
                let s = 3 * t + j,
                    e = t_elevation[mesh.s_outer_t(s)];
                if (e < best_e) {
                    best_e = e;
                    best_s = s;
                }
            }
            order_t[queue_in++] = t;
            t_downflow_s[t] = best_s;
            _queue.push(t, t_elevation[t]);
        }
    }
    /* Part 2: land triangles get visited in elevation priority */
    for (let queue_out = 0; queue_out < numTriangles; queue_out++) {
        let current_t = _queue.pop();
        for (let j = 0; j < 3; j++) {
            let s = 3 * current_t + j;
            let neighbor_t = mesh.s_outer_t(s); // uphill from current_t
            if (t_downflow_s[neighbor_t] === -999 && t_elevation[neighbor_t] >= 0.0) {
                t_downflow_s[neighbor_t] = mesh.s_opposite_s(s);
                order_t[queue_in++] = neighbor_t;
                _queue.push(neighbor_t, t_elevation[neighbor_t]);
            }
        }
    }
}


function assignFlow(mesh, {order_t, t_elevation, t_moisture, t_downflow_s, /* out */ t_flow, /* out */ s_flow}) {
    let {numTriangles, _halfedges} = mesh;
    s_flow.fill(0);
    for (let t = 0; t < numTriangles; t++) {
        if (t_elevation[t] >= 0.0) {
            t_flow[t] = 0.5 * t_moisture[t] * t_moisture[t];
        } else {
            t_flow[t] = 0;
        }
    }
    for (let i = order_t.length-1; i >= 0; i--) {
        let tributary_t = order_t[i];
        let flow_s = t_downflow_s[tributary_t];
        let trunk_t = (_halfedges[flow_s] / 3) | 0;
        if (flow_s >= 0) {
            t_flow[trunk_t] += t_flow[tributary_t];
            s_flow[flow_s] += t_flow[tributary_t]; // TODO: isn't s_flow[flow_s] === t_flow[?]
            if (t_elevation[trunk_t] > t_elevation[tributary_t]) {
                t_elevation[trunk_t] = t_elevation[tributary_t];
            }
        }
    }
}




/**********************************************************************
 * Main
 */

// ugh globals, sorry
var mesh, map = {};
var quadGeometry = new QuadGeometry();

function generateMesh() {
    _randomNoise = new SimplexNoise(makeRandFloat(_seed));
    let result = SphereMesh.makeSphere(N, jitter, makeRandFloat(_seed));
    mesh = result.mesh;
    quadGeometry.setMesh(mesh);
    
    map.r_elevation = new Float32Array(mesh.numRegions);
    map.t_elevation = new Float32Array(mesh.numTriangles);
    map.r_moisture = new Float32Array(mesh.numRegions);
    map.t_moisture = new Float32Array(mesh.numTriangles);
    map.t_downflow_s = new Int32Array(mesh.numTriangles);
    map.order_t = new Int32Array(mesh.numTriangles);
    map.t_flow = new Float32Array(mesh.numTriangles);
    map.s_flow = new Float32Array(mesh.numSides);

    map.r_xyz = result.r_xyz;
    map.t_xyz = generateTriangleCenters(mesh, map);
    generateMap();
}

function generateMap() {
    let result = generatePlates(mesh, map.r_xyz);
    map.plate_r = result.plate_r;
    map.r_plate = result.r_plate;
    map.plate_vec = result.plate_vec;
    map.plate_is_ocean = new Set();
    for (let r of map.plate_r) {
        if (makeRandInt(r)(10) < 5) {
            map.plate_is_ocean.add(r);
            // TODO: either make tiny plates non-ocean, or make sure tiny plates don't create seeds for rivers
        }
    }
    assignRegionElevation(mesh, map);
    for (let r = 0; r < mesh.numRegions; r++) {
        let n = 0.5 + 0.5 * fbm_noise(map.r_xyz[3*r], map.r_xyz[3*r+1], map.r_xyz[3*r+2]);
        map.r_moisture[r] = Math.max(0.15, Math.min(1, n));
    }
    assignTriangleValues(mesh, map);
    assignDownflow(mesh, map);
    assignFlow(mesh, map);

    quadGeometry.setMap(mesh, map);
    draw();
}


function drawPlateVectors(u_projection, mesh, {r_xyz, r_plate, plate_vec}) {
    let line_xyz = [], line_rgba = [];
    
    for (let r = 0; r < mesh.numRegions; r++) {
        line_xyz.push(r_xyz.slice(3 * r, 3 * r + 3));
        line_rgba.push([1, 1, 1, 1]);
        line_xyz.push(vec3.add([], r_xyz.slice(3 * r, 3 * r + 3),
                               vec3.scale([], plate_vec[r_plate[r]], 2 / Math.sqrt(N))));
        line_rgba.push([1, 0, 0, 0]);
    }

    renderLines({
        u_projection,
        u_multiply_rgba: [1, 1, 1, 1],
        u_add_rgba: [0, 0, 0, 0],
        a_xyz: line_xyz,
        a_rgba: line_rgba,
        count: line_xyz.length,
    });
}

function drawPlateBoundaries(u_projection, mesh, {t_xyz, r_plate}) {
    let line_xyz = [], line_rgba = [];
    for (let s = 0; s < mesh.numSides; s++) {
        let begin_r = mesh.s_begin_r(s),
            end_r = mesh.s_end_r(s);
        if (r_plate[begin_r] !== r_plate[end_r]) {
            let inner_t = mesh.s_inner_t(s),
                outer_t = mesh.s_outer_t(s);
            line_xyz.push(t_xyz.slice(3 * inner_t, 3 * inner_t + 3),
                          t_xyz.slice(3 * outer_t, 3 * outer_t + 3));
            line_rgba.push([1, 1, 1, 1], [1, 1, 1, 1]);
        }
    }
    renderLines({
        u_projection,
        u_multiply_rgba: [1, 1, 1, 1],
        u_add_rgba: [0, 0, 0, 0],
        a_xyz: line_xyz,
        a_rgba: line_rgba,
        count: line_xyz.length,
    });
}

function drawRivers(u_projection, mesh, {t_xyz, s_flow, r_elevation}) {
    let line_xyz = [], line_rgba = [];

    for (let s = 0; s < mesh.numSides; s++) {
        if (s_flow[s] > 0.5) {
            let begin_r = mesh.s_begin_r(s),
                end_r = mesh.s_end_r(s);
            if (r_elevation[begin_r] - waterLevel < 0 && r_elevation[end_r] - waterLevel < 0) continue;
            let flow = 0.3 * Math.sqrt(s_flow[s]);
            let inner_t = mesh.s_inner_t(s),
                outer_t = mesh.s_outer_t(s);
            line_xyz.push(t_xyz.slice(3 * inner_t, 3 * inner_t + 3),
                          t_xyz.slice(3 * outer_t, 3 * outer_t + 3));
            if (flow > 1) flow = 1;
            let rgba_premultiplied = [0.2 * flow, 0.6 * flow, 0.9 * flow, flow];
            line_rgba.push(rgba_premultiplied, rgba_premultiplied);
        }
    }
    renderLines({
        u_projection,
        u_multiply_rgba: [1, 1, 1, 1],
        u_add_rgba: [0, 0, 0, 0],
        a_xyz: line_xyz,
        a_rgba: line_rgba,
        count: line_xyz.length,
    });
}

let population = null;
let draw_cultureOverlay = false;
let draw_stateBorders = false;
let _overlayGeom = null;
let _stateLineGeom = null;
let _overlayDirty = false;

function buildOverlayGeometry(mesh, populations) {
  let cultureColors = populations.cultures.map(c => {
    let hue = (c.i * 0.618033988749895) % 1;
    let r = hue + 1/3, g = hue, b = hue - 1/3;
    let sat = 0.7, light = 0.55;
    function toRgb(t) { t = ((t % 1) + 1) % 1; let c = (1 - Math.abs(2 * light - 1)) * sat; let x = c * (1 - Math.abs((t * 6) % 2 - 1)); let m = light - c / 2; let r, g, b; if (t < 1/6) [r,g,b]=[c,x,0]; else if (t < 2/6) [r,g,b]=[x,c,0]; else if (t < 3/6) [r,g,b]=[0,c,x]; else if (t < 4/6) [r,g,b]=[0,x,c]; else if (t < 5/6) [r,g,b]=[x,0,c]; else [r,g,b]=[c,0,x]; return [r+m, g+m, b+m]; }
    return toRgb(hue);
  });

  let {numSides} = mesh;
  let xyz = new Float32Array(3 * 3 * numSides);
  let rgb = new Float32Array(3 * 3 * numSides);
  let {t_xyz, r_xyz} = map;

  for (let s = 0; s < numSides; s++) {
    let inner_t = mesh.s_inner_t(s), outer_t = mesh.s_outer_t(s), begin_r = mesh.s_begin_r(s);
    let col = cultureColors[populations.cellCulture[begin_r]] || [0.2, 0.2, 0.2];
    for (let i = 0; i < 3; i++) { xyz[9 * s + 6 + i] = r_xyz[3 * begin_r + i]; }
    let ix = 9*s, ox = 9*s+3, l0 = 0, l1 = 0;
    for (let i = 0; i < 3; i++) { let v = t_xyz[3*inner_t+i]; xyz[ix+i] = v; l0 += v*v; }
    for (let i = 0; i < 3; i++) { let v = t_xyz[3*outer_t+i]; xyz[ox+i] = v; l1 += v*v; }
    l0 = Math.sqrt(l0); l1 = Math.sqrt(l1);
    for (let i = 0; i < 3; i++) { xyz[ix+i] /= l0; xyz[ox+i] /= l1; }
    for (let j = 0; j < 3; j++) { for (let i = 0; i < 3; i++) { rgb[9 * s + 3 * j + i] = col[i]; } }
  }

  _overlayGeom = {xyz, rgb};

  // State border lines
  let lxyz = [], lrgba = [];
  for (let s = 0; s < numSides; s++) {
    let begin_r = mesh.s_begin_r(s), end_r = mesh.s_end_r(s);
    if (populations.cellState[begin_r] !== populations.cellState[end_r] && populations.cellState[begin_r] >= 0 && populations.cellState[end_r] >= 0) {
      let inner_t = mesh.s_inner_t(s), outer_t = mesh.s_outer_t(s);
      let col = [1, 1, 1, 0.8];
      lxyz.push(t_xyz.slice(3 * inner_t, 3 * inner_t + 3), t_xyz.slice(3 * outer_t, 3 * outer_t + 3));
      lrgba.push(col, col);
    }
  }
  _stateLineGeom = {xyz: lxyz, rgba: lrgba};
  _overlayDirty = false;
}

function drawCultureOverlay(u_projection) {
  if (!_overlayGeom) return;
  renderFlatTriangles({u_projection, a_xyz: _overlayGeom.xyz, a_rgb: _overlayGeom.rgb, count: _overlayGeom.xyz.length / 3});
}

function drawStateBorderLines(u_projection) {
  if (!_stateLineGeom || _stateLineGeom.xyz.length === 0) return;
  renderLines({u_projection, u_multiply_rgba: [1, 1, 1, 1], u_add_rgba: [0, 0, 0, 0], a_xyz: _stateLineGeom.xyz, a_rgba: _stateLineGeom.rgba, count: _stateLineGeom.xyz.length});
}

let _draw_pending = false;
let _inverseProjection = mat4.create();

window.pickRegion = function(ndcX, ndcY) {
    if (!mesh || !map.r_xyz) return null;

    let p1 = [ndcX, ndcY, -1, 1];
    let p2 = [ndcX, ndcY, 1, 1];
    vec4.transformMat4(p1, p1, _inverseProjection);
    vec4.transformMat4(p2, p2, _inverseProjection);
    for (let i = 0; i < 3; i++) {
        p1[i] /= p1[3];
        p2[i] /= p2[3];
    }

    let dir = [p2[0] - p1[0], p2[1] - p1[1], p2[2] - p1[2]];
    let a = dir[0]*dir[0] + dir[1]*dir[1] + dir[2]*dir[2];
    let b = 2 * (p1[0]*dir[0] + p1[1]*dir[1] + p1[2]*dir[2]);
    let c = p1[0]*p1[0] + p1[1]*p1[1] + p1[2]*p1[2] - 1;

    let disc = b*b - 4*a*c;
    if (disc < 0) return null;

    let t = (-b - Math.sqrt(disc)) / (2*a);
    if (t < 0) { t = (-b + Math.sqrt(disc)) / (2*a); }
    if (t < 0) return null;

    let hit = [p1[0] + t*dir[0], p1[1] + t*dir[1], p1[2] + t*dir[2]];

    let bestR = -1, bestDist = Infinity;
    let numRegions = mesh.numRegions;
    for (let r = 0; r < numRegions; r++) {
        let dx = hit[0] - map.r_xyz[3*r];
        let dy = hit[1] - map.r_xyz[3*r+1];
        let dz = hit[2] - map.r_xyz[3*r+2];
        let dist = dx*dx + dy*dy + dz*dz;
        if (dist < bestDist) {
            bestDist = dist;
            bestR = r;
        }
    }

    if (bestR === -1) return null;

    let e = map.r_elevation[bestR] - waterLevel;
    if (e > 0) {
        e = tempOffset > 0 ? e / (1 + tempOffset * 3) : e * (1 + Math.abs(tempOffset) * 2);
    }
    let m = Math.min(1, Math.max(0, map.r_moisture[bestR] + rainOffset));
    let plate = map.r_plate[bestR];
    let isOcean = map.plate_is_ocean.has(plate);

    let biome;
    if (e < 0) {
        biome = 'Ocean';
    } else if (e < 0.1) {
        biome = m > 0.5 ? 'Swamp / Marsh' : 'Coast / Beach';
    } else if (e < 0.25) {
        biome = m > 0.6 ? 'Jungle' : m > 0.3 ? 'Forest' : 'Savanna';
    } else if (e < 0.45) {
        biome = m > 0.5 ? 'Temperate Forest' : 'Grassland';
    } else if (e < 0.65) {
        biome = m > 0.4 ? 'Taiga' : 'Tundra';
    } else {
        biome = m > 0.3 ? 'Alpine' : 'Mountain / Snow';
    }

    let rawElevation = map.r_elevation[bestR];
    let tempC = e < 0 ? 25 : Math.max(-15, 30 - 45 * e);
    return {
        region: bestR,
        elevation: e,
        rawElevation: rawElevation,
        effectiveElevation: e,
        moisture: m,
        temperature: tempC,
        plate: plate,
        plateType: isOcean ? 'Oceanic' : 'Continental',
        biome: biome,
        x: map.r_xyz[3*bestR],
        y: map.r_xyz[3*bestR+1],
        z: map.r_xyz[3*bestR+2],
    };
};

function _draw() {
    let u_pointsize = 0.1 + 100 / Math.sqrt(N);
    let u_projection = mat4.create();
    mat4.scale(u_projection, u_projection, [1, 1, 0.5, 1]); // avoid clipping
    mat4.rotate(u_projection, u_projection, -rotation, [0.1, 1, 0]);
    mat4.rotate(u_projection, u_projection, -Math.PI/2+0.2, [1, 0, 0]);
    mat4.invert(_inverseProjection, u_projection);

    function r_color_fn(r) {
        let m = Math.min(1, Math.max(0, map.r_moisture[r] + rainOffset));
        let e = map.r_elevation[r] - waterLevel;
        if (e > 0) {
            e = tempOffset > 0 ? e / (1 + tempOffset * 3) : e * (1 + Math.abs(tempOffset) * 2);
        }
        return [e, m];
    }

    if (drawMode === 'centroid') {
        let triangleGeometry = generateVoronoiGeometry(mesh, map, r_color_fn);
        renderTriangles({
            u_projection,
            a_xyz: triangleGeometry.xyz,
            a_tm: triangleGeometry.tm,
            count: triangleGeometry.xyz.length / 3,
        });
    } else if (drawMode === 'quads') {
        quadGeometry.applyClimate(
            mesh.numRegions, mesh.numTriangles,
            map.r_elevation, map.r_moisture,
            map.t_elevation, map.t_moisture,
            tempOffset, rainOffset, waterLevel);
        renderIndexedTriangles({
            u_projection,
            a_xyz: quadGeometry.xyz,
            a_tm: quadGeometry.tm,
            elements: quadGeometry.I,
        });
    }

    drawRivers(u_projection, mesh, map);
    
    if (draw_plateVectors) {
        drawPlateVectors(u_projection, mesh, map);
    }
    if (draw_plateBoundaries) {
        drawPlateBoundaries(u_projection, mesh, map);
    }

    if (draw_cultureOverlay && _overlayGeom) {
        drawCultureOverlay(u_projection);
    }
    if (draw_stateBorders && _stateLineGeom) {
        drawStateBorderLines(u_projection);
    }

    _draw_pending = false;
}

function draw() {
    if (!_draw_pending) {
        _draw_pending = true;
        requestAnimationFrame(_draw);
    }
}

generateMesh();
window._numCultures = 8;
setTimeout(() => { window.applyPopulation(); }, 100);
