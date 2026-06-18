import * as THREE from 'three';
import * as planet from './planet.js';
import * as renderer from './renderer.js';
import { generatePopulation } from '../world-population.js';
import GUI from 'lil-gui';

const canvas = document.getElementById('output');

renderer.initRenderer(canvas);

function rebuildAll() {
    const ptype = planet.getPlanetType();
    renderer.rebuildPlanet(
        planet.mesh, planet.map, planet.quadGeometry,
        planet.getDrawMode(),
        planet.getTempOffset(), planet.getRainOffset(), planet.getWaterLevel()
    );
    renderer.rebuildRivers(planet.mesh, planet.map, planet.getWaterLevel(), ptype);
    renderer.rebuildCloudSphere(ptype, planet.getSeed());
    renderer.updateColormapTexture(ptype);
}

function applyClimate() {
    const mesh = planet.mesh;
    const map = planet.map;
    const quadGeometry = planet.quadGeometry;
    const tempOffset = planet.getTempOffset();
    const rainOffset = planet.getRainOffset();
    const waterLevel = planet.getWaterLevel();
    quadGeometry.applyClimate(
        mesh.numRegions, mesh.numTriangles,
        map.r_elevation, map.r_moisture,
        map.t_elevation, map.t_moisture,
        tempOffset, rainOffset, waterLevel
    );
    renderer.updateClimate(quadGeometry);
    if (planet.getDrawMode() === 'centroid') {
        renderer.rebuildPlanet(
            planet.mesh, planet.map, planet.quadGeometry,
            'centroid', tempOffset, rainOffset, waterLevel
        );
    }
}

/* lil-gui setup */

let _seedCtrl = null;

const PARAMS = {
    planetType: planet.getPlanetType(),
    seed: planet.getSeed(),
    regions: planet.getN(),
    plates: planet.getP(),
    jitter: planet.getJitter(),
    rotation: planet.getRotation(),
    temperature: planet.getTempOffset(),
    rainfall: planet.getRainOffset(),
    waterLevel: planet.getWaterLevel(),
    drawMode: planet.getDrawMode(),
    plateVectors: planet.getDrawPlateVectors(),
    plateBoundaries: planet.getDrawPlateBoundaries(),
    cultures: window._numCultures || 16,
    cultureOverlay: planet.getDrawCultureOverlay(),
    stateBorders: planet.getDrawStateBorders(),
    stateOverlay: planet.getDrawStateOverlay(),
    provinceOverlay: planet.getDrawProvinceOverlay(),
    provinceBorders: planet.getDrawProvinceBorders(),
    burgOverlay: planet.getDrawBurgOverlay(),
    newPlanet: () => {
        const newSeed = planet.getSeed() + 1;
        PARAMS.seed = newSeed;
        planet.setSeed(newSeed);
        planet.generateMesh();
        rebuildAll();
        applyClimate();
        setTimeout(() => window.applyPopulation(), 200);
        if (_seedCtrl) _seedCtrl.updateDisplay();
    },
    applyPopulation: () => {
        window.applyPopulation();
    },
};

const gui = new GUI({ title: 'Planet Generator', width: 300 });

const fPlanet = gui.addFolder('Planet');
fPlanet.add(PARAMS, 'planetType', ['earthlike', 'airless', 'barren', 'hostile']).name('Planet Type').onChange(v => {
    planet.setPlanetType(v);
    planet.generateMesh();
    rebuildAll();
    applyClimate();
    setTimeout(() => window.applyPopulation(), 200);
});
_seedCtrl = fPlanet.add(PARAMS, 'seed', 0, 999999, 1).name('Seed').onChange(v => {
    planet.setSeed(v);
    planet.generateMesh();
    rebuildAll();
    applyClimate();
    setTimeout(() => window.applyPopulation(), 200);
});
fPlanet.add(PARAMS, 'regions', 100, 100000, 100).name('Regions').onChange(v => {
    planet.setN(v);
    planet.generateMesh();
    rebuildAll();
    applyClimate();
    setTimeout(() => window.applyPopulation(), 200);
});
fPlanet.add(PARAMS, 'plates', 5, 100, 1).name('Plates').onChange(v => {
    planet.setP(v);
    planet.generateMap();
    rebuildAll();
    applyClimate();
});
fPlanet.add(PARAMS, 'jitter', 0, 1, 0.001).name('Jitter').onChange(v => {
    planet.setJitter(v);
    planet.generateMesh();
    rebuildAll();
    applyClimate();
    setTimeout(() => window.applyPopulation(), 200);
});
const rotationCtrl = fPlanet.add(PARAMS, 'rotation', -5, 5, 0.001).name('Rotation').onChange(v => {
    planet.setRotation(v);
    renderer.setCameraRotation(v);
});
fPlanet.add(PARAMS, 'drawMode', ['quads', 'centroid']).name('Draw Mode').onChange(v => {
    planet.setDrawMode(v);
    if (!renderer.hasMesh(v)) {
        renderer.rebuildPlanet(
            planet.mesh, planet.map, planet.quadGeometry,
            v,
            planet.getTempOffset(), planet.getRainOffset(), planet.getWaterLevel()
        );
        renderer.rebuildRivers(planet.mesh, planet.map, planet.getWaterLevel(), planet.getPlanetType());
    }
    renderer.setDrawMode(v);
});
fPlanet.add(PARAMS, 'newPlanet').name('New Planet');
fPlanet.open();

const fClimate = gui.addFolder('Climate');
fClimate.add(PARAMS, 'temperature', -1, 1, 0.01).name('Temperature').onChange(v => {
    planet.setTempOffset(v);
    applyClimate();
});
fClimate.add(PARAMS, 'rainfall', -0.5, 0.5, 0.01).name('Rainfall').onChange(v => {
    planet.setRainOffset(v);
    applyClimate();
});
fClimate.add(PARAMS, 'waterLevel', -0.5, 0.5, 0.01).name('Water Level').onChange(v => {
    planet.setWaterLevel(v);
    applyClimate();
    renderer.rebuildRivers(planet.mesh, planet.map, planet.getWaterLevel(), planet.getPlanetType());
});
fClimate.open();

const fOverlays = gui.addFolder('Overlays');
fOverlays.domElement.classList.add('overlays-folder');
fOverlays.add(PARAMS, 'plateVectors').name('Plate Vectors').onChange(v => {
    planet.setDrawPlateVectors(v);
    renderer.togglePlateVectors(v);
});
fOverlays.add(PARAMS, 'plateBoundaries').name('Plate Boundaries').onChange(v => {
    planet.setDrawPlateBoundaries(v);
    renderer.togglePlateBoundaries(v);
});
fOverlays.add(PARAMS, 'cultureOverlay').name('Culture Overlay').onChange(v => {
    planet.setDrawCultureOverlay(v);
    renderer.toggleOverlay(v);
});
fOverlays.add(PARAMS, 'stateBorders').name('State Borders').onChange(v => {
    planet.setDrawStateBorders(v);
    renderer.toggleStateBorders(v);
});
fOverlays.add(PARAMS, 'stateOverlay').name('State Overlay').onChange(v => {
    planet.setDrawStateOverlay(v);
    renderer.toggleStateOverlay(v);
});
fOverlays.add(PARAMS, 'provinceOverlay').name('Province Overlay').onChange(v => {
    planet.setDrawProvinceOverlay(v);
    renderer.toggleProvinceOverlay(v);
});
fOverlays.add(PARAMS, 'provinceBorders').name('Province Borders').onChange(v => {
    planet.setDrawProvinceBorders(v);
    renderer.toggleProvinceBorders(v);
});
fOverlays.add(PARAMS, 'burgOverlay').name('Burg Overlay').onChange(v => {
    planet.setDrawBurgOverlay(v);
    renderer.toggleBurgOverlay(v);
});
fOverlays.open();

const fPopulation = gui.addFolder('Population');
fPopulation.add(PARAMS, 'cultures', 2, 40, 1).name('Cultures').onChange(v => {
    window._numCultures = v;
});
fPopulation.add(PARAMS, 'applyPopulation').name('Apply Changes');
fPopulation.open();

const fInfo = gui.addFolder('Region Info');
fInfo.open();

const infoContent = document.createElement('div');
infoContent.style.cssText = 'padding:6px 8px;font-size:11px;line-height:1.6;color:#aaa;min-height:40px;white-space:pre-wrap;overflow-wrap:break-word;';
infoContent.textContent = 'Click planet for region info';
fInfo.domElement.appendChild(infoContent);

/* expose the same window.* API as the regl version */

window.getPlanetType = () => planet.getPlanetType();
window.setPlanetType = v => { planet.setPlanetType(v); };

window.generateMesh = function () {
    planet.generateMesh();
    rebuildAll();
    applyClimate();
};

window.setSeed = newSeed => { planet.setSeed(newSeed); };
window.getSeed = () => planet.getSeed();

window.setN = newN => {
    planet.setN(newN);
    planet.generateMesh();
    rebuildAll();
    applyClimate();
};

window.setP = newP => {
    planet.setP(newP);
    planet.generateMap();
    rebuildAll();
    applyClimate();
};

window.setJitter = newJitter => {
    planet.setJitter(newJitter);
    planet.generateMesh();
    rebuildAll();
    applyClimate();
};

window.setRotation = newRotation => {
    planet.setRotation(newRotation);
    renderer.setCameraRotation(newRotation);
};

window.setDrawMode = newMode => {
    planet.setDrawMode(newMode);
    if (!renderer.hasMesh(newMode)) {
        renderer.rebuildPlanet(
            planet.mesh, planet.map, planet.quadGeometry,
            newMode,
            planet.getTempOffset(), planet.getRainOffset(), planet.getWaterLevel()
        );
        renderer.rebuildRivers(planet.mesh, planet.map, planet.getWaterLevel(), planet.getPlanetType());
    }
    renderer.setDrawMode(newMode);
};

window.setDrawPlateVectors = flag => {
    planet.setDrawPlateVectors(flag);
    renderer.togglePlateVectors(flag);
};

window.setDrawPlateBoundaries = flag => {
    planet.setDrawPlateBoundaries(flag);
    renderer.togglePlateBoundaries(flag);
};

window.setTempOffset = v => {
    planet.setTempOffset(v);
    applyClimate();
};

window.setRainOffset = v => {
    planet.setRainOffset(v);
    applyClimate();
};

window.setWaterLevel = v => {
    planet.setWaterLevel(v);
    applyClimate();
    renderer.rebuildRivers(planet.mesh, planet.map, planet.getWaterLevel(), planet.getPlanetType());
};

window.getTempOffset = () => planet.getTempOffset();
window.getRainOffset = () => planet.getRainOffset();

window.setCultureOverlay = flag => {
    planet.setDrawCultureOverlay(flag);
    renderer.toggleOverlay(flag);
};

window.setStateBorders = flag => {
    planet.setDrawStateBorders(flag);
    renderer.toggleStateBorders(flag);
};

window.setStateOverlay = flag => {
    planet.setDrawStateOverlay(flag);
    renderer.toggleStateOverlay(flag);
};

window.setProvinceOverlay = flag => {
    planet.setDrawProvinceOverlay(flag);
    renderer.toggleProvinceOverlay(flag);
};

window.setProvinceBorders = flag => {
    planet.setDrawProvinceBorders(flag);
    renderer.toggleProvinceBorders(flag);
};

window.setBurgOverlay = flag => {
    planet.setDrawBurgOverlay(flag);
    renderer.toggleBurgOverlay(flag);
};

window.applyPopulation = () => {
    if (!planet.mesh || !planet.map.r_elevation) return;
    const ptype = planet.getPlanetType();
    if (ptype !== 'earthlike') {
        window._population = null;
        renderer.rebuildOverlay(null, null, null);
        renderer.rebuildStateOverlay(null, null, null);
        renderer.rebuildProvinceOverlay(null, null, null);
        renderer.rebuildProvinceBorders(null, null, null);
        renderer.rebuildBurgOverlay(null, null, null);
        return;
    }
    const population = generatePopulation(planet.mesh, planet.map, window._numCultures || 8, planet.getSeed());
    window._population = population;
    renderer.rebuildOverlay(planet.mesh, population, planet.map);
    renderer.rebuildStateOverlay(planet.mesh, population, planet.map);
    renderer.rebuildProvinceOverlay(planet.mesh, population, planet.map);
    renderer.rebuildProvinceBorders(planet.mesh, population, planet.map);
    renderer.rebuildBurgOverlay(planet.mesh, population, planet.map);
    renderer.toggleOverlay(planet.getDrawCultureOverlay());
    renderer.toggleStateBorders(planet.getDrawStateBorders());
    renderer.toggleStateOverlay(planet.getDrawStateOverlay());
    renderer.toggleProvinceOverlay(planet.getDrawProvinceOverlay());
    renderer.toggleProvinceBorders(planet.getDrawProvinceBorders());
    renderer.toggleBurgOverlay(planet.getDrawBurgOverlay());
};

window.getNumCultures = () => window._numCultures || 16;
window.setNumCultures = v => { window._numCultures = v; };

window.pickRegion = function (ndcX, ndcY) {
    if (!planet.mesh || !planet.map.r_xyz) return null;

    const camera = renderer.getCamera();
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2(ndcX, ndcY);
    raycaster.setFromCamera(pointer, camera);

    const origin = raycaster.ray.origin;
    const dir = raycaster.ray.direction;

    const a = dir.dot(dir);
    const b = 2 * origin.dot(dir);
    const c = origin.dot(origin) - 1;
    let disc = b * b - 4 * a * c;
    if (disc < 0) return null;

    let t = (-b - Math.sqrt(disc)) / (2 * a);
    if (t < 0) { t = (-b + Math.sqrt(disc)) / (2 * a); }
    if (t < 0) return null;

    const hit = new THREE.Vector3();
    hit.copy(dir).multiplyScalar(t).add(origin);

    let bestR = -1;
    let bestDist = Infinity;
    const numRegions = planet.mesh.numRegions;
    const r_xyz = planet.map.r_xyz;

    for (let r = 0; r < numRegions; r++) {
        const dx = hit.x - r_xyz[3 * r];
        const dy = hit.y - r_xyz[3 * r + 1];
        const dz = hit.z - r_xyz[3 * r + 2];
        const dist = dx * dx + dy * dy + dz * dz;
        if (dist < bestDist) {
            bestDist = dist;
            bestR = r;
        }
    }

    if (bestR === -1) return null;

    let e = planet.map.r_elevation[bestR] - planet.getWaterLevel();
    if (e > 0) {
        e = planet.getTempOffset() > 0 ? e / (1 + planet.getTempOffset() * 3) : e * (1 + Math.abs(planet.getTempOffset()) * 2);
    }
    const m = Math.min(1, Math.max(0, planet.map.r_moisture[bestR] + planet.getRainOffset()));
    const plate = planet.map.r_plate[bestR];
    const isOcean = planet.map.plate_is_ocean.has(plate);

    const ptype = planet.getPlanetType();
    let biome;
    if (ptype === 'airless') {
        if (e < -0.3) biome = 'Crater Floor';
        else if (e < 0) biome = 'Lowland Basin';
        else if (e < 0.2) biome = 'Mare';
        else if (e < 0.45) biome = 'Highland Terrain';
        else biome = 'Peak / Ridge';
    } else if (ptype === 'barren') {
        if (e < 0) biome = 'Depression';
        else if (e < 0.15) biome = 'Lowland Plain';
        else if (e < 0.35) biome = 'Volcanic Rise';
        else if (e < 0.55) biome = 'Highland';
        else biome = 'Polar Cap / Summit';
    } else if (ptype === 'hostile') {
        if (e < 0) biome = 'Rift Basin';
        else if (e < 0.15) biome = 'Sulfurous Plain';
        else if (e < 0.35) biome = 'Volcanic Dome';
        else if (e < 0.55) biome = 'Tessera Highland';
        else biome = 'Mountain / Ridge';
    } else {
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
    }

    const rawElevation = planet.map.r_elevation[bestR];
    const tempC = e < 0 ? 25 : Math.max(-15, 30 - 45 * e);

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
        x: r_xyz[3 * bestR],
        y: r_xyz[3 * bestR + 1],
        z: r_xyz[3 * bestR + 2],
    };
};

/* Canvas click for region info */
canvas.addEventListener('click', function (e) {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const ndcX = (x / rect.width) * 2 - 1;
    const ndcY = -((y / rect.height) * 2 - 1);

    const info = window.pickRegion(ndcX, ndcY);
    if (!info) { infoContent.textContent = 'No region found'; return; }

    const pop = window._population;
    let cultName = '', stateName = '', burgName = '';
    if (pop && pop.cellCulture[info.region] >= 0) {
        const ci = pop.cellCulture[info.region];
        if (pop.cultures[ci]) cultName = pop.cultures[ci].name;
    }
    if (pop && pop.cellState[info.region] > 0) {
        const si = pop.cellState[info.region];
        if (pop.states[si]) stateName = pop.states[si].name;
    }
    if (pop && pop.cellBurg[info.region] >= 0) {
        const bi = pop.cellBurg[info.region];
        if (pop.burgs[bi]) burgName = pop.burgs[bi].name;
    }
    infoContent.innerHTML =
        'Region ' + info.region + '\n' +
        'Biome ' + info.biome + '\n' +
        'Temperature ' + info.temperature.toFixed(1) + ' °C\n' +
        'Elevation ' + info.rawElevation.toFixed(3) + '\n' +
        'Moisture ' + info.moisture.toFixed(3) + '\n' +
        'Plate ' + info.plate + ' (' + info.plateType + ')' +
        (cultName ? '\nCulture ' + cultName : '') +
        (stateName ? '\nState ' + stateName : '') +
        (burgName ? '\nSettlement ' + burgName : '');
});

/* Initialize */
planet.generateMesh();
rebuildAll();
applyClimate();
renderer.setCameraRotation(planet.getRotation());
renderer.render();

/* Start render loop */
function animate() {
    renderer.render();
    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);

window._numCultures = 16;

/* Sync OrbitControls rotation back to GUI */
renderer.getControls().addEventListener('change', () => {
    const angle = renderer.getControls().azimuthAngle;
    const rot = -angle;
    planet.setRotation(rot);
    PARAMS.rotation = rot;
    rotationCtrl.updateDisplay();
});

setTimeout(() => { window.applyPopulation(); }, 100);

/* Resize handling */
function onResize() {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    if (w > 0 && h > 0) {
        renderer.resize(w, h);
    }
}
window.addEventListener('resize', onResize);
onResize();
