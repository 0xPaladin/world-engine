import * as THREE from 'three';
import colormapTexture from '../colormap-texture.js';

const planetVertexShader = `
varying vec2 v_tm;
void main() {
    v_tm = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const planetFragmentShader = `
precision highp float;

uniform sampler2D u_colormap;
uniform vec2 u_light_angle;
uniform float u_inverse_texture_size;
uniform float u_slope;
uniform float u_flat;
uniform float u_c;
uniform float u_d;
uniform float u_outline_strength;

varying vec2 v_tm;

void main() {
    float e = v_tm.x > 0.0 ? 0.5 * (v_tm.x * v_tm.x + 1.0) : 0.5 * (v_tm.x + 1.0);
    float dedx = dFdx(v_tm.x);
    float dedy = dFdy(v_tm.x);
    vec3 slope_vector = normalize(vec3(dedy, dedx, u_d * 2.0 * u_inverse_texture_size));
    vec3 light_vector = normalize(vec3(u_light_angle, mix(u_slope, u_flat, slope_vector.z)));
    float light = u_c + max(0.0, dot(light_vector, slope_vector));
    float outline = 1.0 + u_outline_strength * max(dedx, dedy);
    gl_FragColor = vec4(texture2D(u_colormap, vec2(e, v_tm.y)).rgb * light / outline, 1);
}
`;

export function createPlanetSurfaceMaterial() {
    return new THREE.ShaderMaterial({
        uniforms: {
            u_colormap: { value: colormapTexture },
            u_light_angle: { value: new THREE.Vector2(Math.cos(Math.PI / 3), Math.sin(Math.PI / 3)) },
            u_inverse_texture_size: { value: 1.0 / 2048 },
            u_d: { value: 60 },
            u_c: { value: 0.15 },
            u_slope: { value: 6 },
            u_flat: { value: 2.5 },
            u_outline_strength: { value: 5 },
        },
        vertexShader: planetVertexShader,
        fragmentShader: planetFragmentShader,
        side: THREE.FrontSide,
        depthWrite: true,
        depthTest: true,
    });
}

const lineVertexShader = `
attribute vec4 a_rgba;
varying vec4 v_rgba;
void main() {
    v_rgba = a_rgba;
    vec3 outward = normalize(position) * 1.002;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(outward, 1.0);
}
`;

const lineFragmentShader = `
precision highp float;
uniform vec4 u_multiply_rgba;
uniform vec4 u_add_rgba;
varying vec4 v_rgba;
void main() {
    gl_FragColor = v_rgba * u_multiply_rgba + u_add_rgba;
}
`;

export function createLineMaterial() {
    return new THREE.ShaderMaterial({
        uniforms: {
            u_multiply_rgba: { value: new THREE.Vector4(1, 1, 1, 1) },
            u_add_rgba: { value: new THREE.Vector4(0, 0, 0, 0) },
        },
        vertexShader: lineVertexShader,
        fragmentShader: lineFragmentShader,
        transparent: true,
        depthTest: true,
        depthWrite: false,
        blending: THREE.CustomBlending,
        blendSrc: THREE.OneFactor,
        blendDst: THREE.OneMinusSrcAlphaFactor,
        blendEquation: THREE.AddEquation,
    });
}

export function createOverlayMaterial() {
    return new THREE.MeshBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0.5,
        depthTest: true,
        depthWrite: false,
        depthFunc: THREE.LessEqualDepth,
    });
}

const cloudVertexShader = `
varying vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const cloudFragmentShader = `
precision highp float;

uniform sampler2D u_cloud_texture;
uniform float u_time;

varying vec2 vUv;

void main() {
    vec2 scrolledUv = vec2(vUv.x + u_time * 0.015, vUv.y);
    float alpha = texture2D(u_cloud_texture, scrolledUv).r;
    alpha = clamp(alpha * 0.7, 0.0, 0.55);
    gl_FragColor = vec4(1.0, 0.95, 0.85, alpha);
}
`;

export function createCloudMaterial(seed) {
    const SimplexNoise = require('simplex-noise');
    const aleaPRNG = require('../aleaPRNG-1.1');

    const width = 512, height = 256;
    const data = new Uint8Array(width * height * 4);
    const noise = new SimplexNoise(aleaPRNG(seed + 12345));

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const i = (y * width + x) * 4;
            const nx = x / width * 4;
            const ny = y / height * 2;

            let n = 0;
            n += noise.noise3D(nx, ny, 0) * 0.5;
            n += noise.noise3D(nx * 2, ny * 2, 1) * 0.25;
            n += noise.noise3D(nx * 4, ny * 4, 2) * 0.125;
            n += noise.noise3D(nx * 8, ny * 8, 3) * 0.0625;
            n = n * 0.5 + 0.5;

            const v = Math.floor(n * 255);
            data[i] = v;
            data[i+1] = v;
            data[i+2] = v;
            data[i+3] = 255;
        }
    }

    const texture = new THREE.DataTexture(data, width, height, THREE.RGBAFormat);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.magFilter = THREE.LinearFilter;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    texture.needsUpdate = true;

    return new THREE.ShaderMaterial({
        uniforms: {
            u_cloud_texture: { value: texture },
            u_time: { value: 0 },
        },
        vertexShader: cloudVertexShader,
        fragmentShader: cloudFragmentShader,
        transparent: true,
        depthTest: true,
        depthWrite: false,
        side: THREE.DoubleSide,
        blending: THREE.NormalBlending,
    });
}
