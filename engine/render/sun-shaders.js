// Star/sun shaders: 4D simplex FBM sphere, animated rays, flares, camera-facing glow
import * as THREE from 'three';
import aleaPRNG from '../core/aleaPRNG-1.1.js';

const simplexNoise4D = `
vec4 mod289(vec4 x){ return x - floor(x * (1.0/289.0)) * 289.0; }
float mod289(float x){ return x - floor(x * (1.0/289.0)) * 289.0; }
vec4 permute(vec4 x){ return mod289(((x * 34.0) + 1.0) * x); }
float permute(float x){ return mod289(((x * 34.0) + 1.0) * x); }
vec4 taylorInvSqrt(vec4 r){ return 1.79284291400159 - 0.85373472095314 * r; }
float taylorInvSqrt(float r){ return 1.79284291400159 - 0.85373472095314 * r; }

vec4 grad4(float j, vec4 ip) {
  const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);
  vec4 p, s;
  p.xyz = floor(fract(vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;
  p.w = 1.5 - dot(abs(p.xyz), ones.xyz);
  s = vec4(lessThan(p, vec4(0.0)));
  p.xyz = p.xyz + (s.xyz * 2.0 - 1.0) * s.www;
  return p;
}

#define F4 0.309016994374947451

float snoise4D(vec4 v) {
  const vec4 C = vec4(0.138196601125011, 0.276393202250021, 0.414589803375032, -0.447213595499958);
  vec4 i = floor(v + dot(v, vec4(F4)));
  vec4 x0 = v - i + dot(i, C.xxxx);
  vec4 i0;
  vec3 isX = step(x0.yzw, x0.xxx);
  vec3 isYZ = step(x0.zww, x0.yyz);
  i0.x = isX.x + isX.y + isX.z;
  i0.yzw = 1.0 - isX;
  i0.y += isYZ.x + isYZ.y;
  i0.zw += 1.0 - isYZ.xy;
  i0.z += isYZ.z;
  i0.w += 1.0 - isYZ.z;
  vec4 i3 = clamp(i0, 0.0, 1.0);
  vec4 i2 = clamp(i0-1.0, 0.0, 1.0);
  vec4 i1 = clamp(i0-2.0, 0.0, 1.0);
  vec4 x1 = x0 - i1 + C.xxxx;
  vec4 x2 = x0 - i2 + C.yyyy;
  vec4 x3 = x0 - i3 + C.zzzz;
  vec4 x4 = x0 + C.wwww;
  i = mod289(i);
  float j0 = permute(permute(permute(permute(i.w)+i.z)+i.y)+i.x);
  vec4 j1 = permute(permute(permute(permute(i.w+vec4(i1.w,i2.w,i3.w,1.0))+i.z+vec4(i1.z,i2.z,i3.z,1.0))+i.y+vec4(i1.y,i2.y,i3.y,1.0))+i.x+vec4(i1.x,i2.x,i3.x,1.0));
  vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0);
  vec4 p0 = grad4(j0, ip);
  vec4 p1 = grad4(j1.x, ip);
  vec4 p2 = grad4(j1.y, ip);
  vec4 p3 = grad4(j1.z, ip);
  vec4 p4 = grad4(j1.w, ip);
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  p4 *= taylorInvSqrt(dot(p4,p4));
  vec3 m0 = max(0.6-vec3(dot(x0,x0),dot(x1,x1),dot(x2,x2)),0.0);
  vec2 m1 = max(0.6-vec2(dot(x3,x3),dot(x4,x4)),0.0);
  m0 = m0*m0;
  m1 = m1*m1;
  return 49.0*(dot(m0*m0,vec3(dot(p0,x0),dot(p1,x1),dot(p2,x2)))+dot(m1*m1,vec2(dot(p3,x3),dot(p4,x4))));
}
`;

const fbm4D = `
float fbm4(vec4 p) {
  float a = 1.0, f = 1.0;
  float sum = 0.0, sumAmp = 0.0;
  for (int i = 0; i < 5; i++) {
    sum += snoise4D(p * f) * a;
    sumAmp += a;
    a *= 0.66;
    f *= 2.0;
  }
  return sum / sumAmp;
}
`;

const sunSphereVertexShader = `
varying vec3 vWorld;
varying vec3 vNormalView;
varying vec3 vNormalWorld;
varying vec3 vLayer0;
varying vec3 vLayer1;
varying vec3 vLayer2;

uniform float uTime;

mat2 rot(float a){ float s=sin(a), c=cos(a); return mat2(c,-s,s,c); }

void setLayers(vec3 p){
    float t = uTime;
    vec3 p1 = p;
    p1.yz = rot(t) * p1.yz;
    vLayer0 = p1;
    p1 = p;
    p1.zx = rot(t + 2.094) * p1.zx;
    vLayer1 = p1;
    p1 = p;
    p1.xy = rot(t - 4.188) * p1.xy;
    vLayer2 = p1;
}

void main(){
    vec4 world = modelMatrix * vec4(position, 1.0);
    vWorld = world.xyz;
    vNormalView = normalize(normalMatrix * normal);
    vNormalWorld = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
    setLayers(normalize(normal));
    gl_Position = projectionMatrix * viewMatrix * world;
}
`;

const sunSphereFragmentShader = `
precision highp float;
${simplexNoise4D}
${fbm4D}

varying vec3 vWorld;
varying vec3 vNormalView;
varying vec3 vNormalWorld;
varying vec3 vLayer0;
varying vec3 vLayer1;
varying vec3 vLayer2;

uniform float uFresnelPower;
uniform float uFresnelInfluence;
uniform float uTint;
uniform float uBase;
uniform float uBrightnessOffset;
uniform float uBrightness;
uniform float uTime;
uniform float uScale;
uniform float uContrast;
uniform vec3 uSpectralColor;

vec3 brightnessToColor(float b){
  b *= uTint;
  return (vec3(b, b*b, b*b*b*b) / uTint) * uBrightness * uSpectralColor;
}

float ocean(){
    vec4 p0 = vec4(vLayer0 * uScale, uTime * 0.3);
    vec4 p1 = vec4(vLayer1 * uScale, uTime * 0.3 + 100.0);
    vec4 p2 = vec4(vLayer2 * uScale, uTime * 0.3 + 200.0);
    float s = fbm4(p0) * uContrast + 0.5;
    s += fbm4(p1) * uContrast + 0.5;
    s += fbm4(p2) * uContrast + 0.5;
    return s * 0.3333333;
}

void main(){
    vec3 Vview = normalize((viewMatrix * vec4(vWorld - cameraPosition, 0.0)).xyz);
    float nDotV = dot(vNormalView, -Vview);
    float fresnel = pow(1.0 - nDotV, uFresnelPower) * uFresnelInfluence;

    float brightness = ocean() * uBase + uBrightnessOffset + fresnel;
    vec3 col = clamp(brightnessToColor(brightness), 0.0, 1.0);

    gl_FragColor = vec4(col, 1.0);
}
`;

// Generate procedural Uint8 texture data by sampling a callback function over [-1,1] range
function makeTextureData(size, callback, scale, time, seed) {
  const data = new Uint8Array(size * size * 4);
  const inv = 2.0 / size;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const u = (x + 0.5) * inv - 1.0;
      const v = (y + 0.5) * inv - 1.0;
      const val = callback(u, v, scale, time, seed);
      const i = (y * size + x) * 4;
      const c = Math.max(0, Math.min(255, Math.floor(val * 255)));
      data[i] = c;
      data[i+1] = c;
      data[i+2] = c;
      data[i+3] = 255;
    }
  }
  return data;
}

// Scalar linear interpolation helper
function lerp(a, b, t) { return a + (b - a) * t; }

// ShaderMaterial for sun sphere: 4D simplex FBM on 3 rotating layers, fresnel glow, spectral tint
export function generateSunSphereMaterial(spectralColor) {
  return new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uFresnelPower: { value: 1.5 },
      uFresnelInfluence: { value: 0.4 },
      uTint: { value: 1.8 },
      uBase: { value: 0.05 },
      uBrightnessOffset: { value: 0.0 },
      uBrightness: { value: 3.0 },
      uSpectralColor: { value: spectralColor || new THREE.Color(1, 1, 1) },
      uScale: { value: 2.0 },
      uContrast: { value: 0.15 },
    },
    vertexShader: sunSphereVertexShader,
    fragmentShader: sunSphereFragmentShader,
    side: THREE.FrontSide,
    depthWrite: true,
    depthTest: true,
  });
}

const rayNoiseFunctions = `
#define m4 mat4(0.00, 0.80, 0.60, -0.4, -0.80, 0.36, -0.48, -0.5, -0.60, -0.48, 0.64, 0.2, 0.40, 0.30, 0.20, 0.4)

vec4 twistedSineNoise(vec4 q, float falloff) {
  float a = 1.0;
  float f = 1.0;
  vec4 sum = vec4(0.0);
  for (int i = 0; i < 4; i++) {
    q = m4 * q;
    vec4 s = sin(q.ywxz * f) * a;
    q += s;
    sum += s;
    a *= falloff;
    f /= falloff;
  }
  return sum;
}
`;

const sunRaysVertexShader = `
attribute vec3 aPos;
attribute vec3 aPos0;
attribute vec4 aWireRandom;

varying float vUVY;
varying float vOpacity;
varying vec3 vColor;
varying vec3 vNormal;

uniform float uHueSpread;
uniform float uHue;
uniform float uLength;
uniform float uWidth;
uniform float uTime;
uniform float uNoiseFrequency;
uniform float uNoiseAmplitude;
uniform vec3  uCamPos;
uniform mat4  uViewProjection;
uniform float uOpacity;

${rayNoiseFunctions}

vec3 getPos(float phase, float animPhase) {
  float size = aWireRandom.z + 0.2;
  float d = phase * uLength * size;
  vec3 p = aPos0 + aPos0 * d;
  p += twistedSineNoise(vec4(p * uNoiseFrequency, uTime), 0.707).xyz * (d * uNoiseAmplitude);
  return p;
}

vec3 spectrum(float d) {
  return smoothstep(0.25, 0.0, abs(d + vec3(-0.375, -0.5, -0.625)));
}

void main() {
  vUVY = aPos.z;
  float animPhase = fract(uTime * 0.3 * (aWireRandom.y * 0.5) + aWireRandom.x);
  vec3 p  = getPos(aPos.x, animPhase);
  vec3 p1 = getPos(aPos.x + 0.01, animPhase);
  vec3 p0w = (modelMatrix * vec4(p, 1.0)).xyz;
  vec3 p1w = (modelMatrix * vec4(p1, 1.0)).xyz;
  vec3 dirW  = normalize(p1w - p0w);
  vec3 vW    = normalize(p0w - uCamPos);
  vec3 sideW = normalize(cross(vW, dirW));
  if (length(sideW) < 1e-6) {
    vec3 up = (abs(dirW.y) < 0.99) ? vec3(0.0,1.0,0.0) : vec3(1.0,0.0,0.0);
    sideW = normalize(cross(up, dirW));
  }
  float width = uWidth * aPos.z * (1.0 - aPos.x);
  vec3 pWorld = p0w + sideW * width;
  vNormal  = normalize(pWorld);
  vOpacity = uOpacity * (0.5 + aWireRandom.w);
  vColor   = spectrum(aWireRandom.w * uHueSpread + uHue);
  gl_Position = uViewProjection * vec4(pWorld, 1.0);
}
`;

const sunRaysFragmentShader = `
precision highp float;

varying float vUVY;
varying float vOpacity;
varying vec3  vColor;
varying vec3  vNormal;

uniform float uAlphaBlended;
uniform vec3  uSpectralColor;

void main() {
  float alpha = 1.0 - smoothstep(0.0, 1.0, abs(vUVY));
  alpha *= alpha;
  alpha *= vOpacity;
  gl_FragColor = vec4(vColor * uSpectralColor * alpha, alpha);
}
`;

const sunFlaresVertexShader = `
attribute vec3 aPos;
attribute vec3 aPos0;
attribute vec3 aPos1;
attribute vec4 aWireRandom;

varying float vUVY;
varying float vOpacity;
varying vec3  vColor;
varying vec3  vNormal;

uniform float uWidth;
uniform float uAmp;
uniform float uTime;
uniform float uNoiseFrequency;
uniform float uNoiseAmplitude;
uniform vec3  uCamPos;
uniform mat4  uViewProjection;
uniform float uOpacity;
uniform float uHueSpread;
uniform float uHue;

${rayNoiseFunctions}

vec3 getPosOBJ(float phase, float animPhase) {
  float size = distance(aPos0, aPos1);
  vec3  n    = normalize((aPos0 + aPos1) * 0.5);
  vec3 p = mix(aPos0, aPos1, phase);
  float amp = sin(phase * 3.14159265) * size * uAmp;
  amp *= animPhase;
  p += n * amp;
  p += twistedSineNoise(vec4(p * uNoiseFrequency, uTime), 0.707).xyz * (amp * uNoiseAmplitude);
  return p;
}

#define hue(v) ( 0.6 + 0.6 * cos( 6.3*(v) + vec3(0.0,23.0,21.0) ) )

void main() {
  vUVY = aPos.z;
  float animPhase = fract(uTime * 0.3 * (aWireRandom.y * 0.5) + aWireRandom.x);
  vec3 pOBJ  = getPosOBJ(aPos.x, animPhase);
  vec3 p1OBJ = getPosOBJ(aPos.x + 0.01, animPhase);
  vec3 pW  = (modelMatrix * vec4(pOBJ, 1.0)).xyz;
  vec3 p1W = (modelMatrix * vec4(p1OBJ, 1.0)).xyz;
  vec3 dirW  = normalize(p1W - pW);
  vec3 vW    = normalize(pW - uCamPos);
  vec3 sideW = normalize(cross(vW, dirW));
  float R = length(aPos0);
  float width = uWidth * aPos.z * (1.0 + animPhase) * R;
  pW += sideW * width;
  vNormal  = normalize(pW);
  float lenW = length(pW);
  vOpacity  = smoothstep(R, R * 1.03, lenW);
  vOpacity *= (1.0 - animPhase);
  vOpacity *= uOpacity;
  vColor = hue(aWireRandom.w * uHueSpread + uHue);
  gl_Position = uViewProjection * vec4(pW, 1.0);
}
`;

const sunFlaresFragmentShader = `
precision highp float;

varying float vUVY;
varying float vOpacity;
varying vec3  vColor;
varying vec3  vNormal;

uniform float uAlphaBlended;
uniform vec3  uSpectralColor;

void main() {
  float alpha = smoothstep(1.0, 0.0, abs(vUVY));
  alpha *= alpha;
  alpha *= vOpacity;
  gl_FragColor = vec4(vColor * uSpectralColor * alpha, alpha * uAlphaBlended);
}
`;

const sunGlowVertexShader = `
attribute vec3 aPos;

varying float vRadial;
varying vec3 vWorld;

uniform mat4 uViewProjection;
uniform float uRadius;
uniform vec3 uCamUp;
uniform vec3 uCamPos;

void main() {
  vRadial = aPos.z;
  vec3 side = normalize(cross(normalize(-uCamPos), uCamUp));
  vec3 p = aPos.x * side + aPos.y * uCamUp;
  p *= 1.0 + aPos.z * uRadius;
  vec4 world = vec4(p, 1.0);
  vWorld = world.xyz;
  gl_Position = uViewProjection * world;
}
`;

const sunGlowFragmentShader = `
precision highp float;

varying float vRadial;
varying vec3 vWorld;

uniform float uTint;
uniform float uBrightness;
uniform float uFalloffColor;
uniform vec3  uSpectralColor;

vec3 brightnessToColor(float b) {
  b *= uTint;
  return (vec3(b, b*b, b*b*b*b) / uTint) * uBrightness * uSpectralColor;
}

void main() {
  float alpha = (1.0 - vRadial);
  alpha *= alpha;
  float brightness = 1.0 + alpha * uFalloffColor;
  gl_FragColor.xyz = brightnessToColor(brightness) * alpha;
  gl_FragColor.w = alpha;
}
`;

// Generate LineSegments geometry for sun rays: per-ray direction, random seed params, segmented strips
export function generateSunRaysGeometry(numRays, seed) {
  const rng = aleaPRNG(seed + 5000);

  const segmentsPerRay = 16;
  const vertsPerRay = segmentsPerRay * 2;
  const totalVerts = numRays * vertsPerRay;

  const aPos = new Float32Array(totalVerts * 3);
  const aPos0 = new Float32Array(totalVerts * 3);
  const aWireRandom = new Float32Array(totalVerts * 4);

  let idx = 0;
  for (let r = 0; r < numRays; r++) {
    const theta = 2 * Math.PI * rng();
    const phi = Math.acos(2 * rng() - 1);
    const dir = new THREE.Vector3(
      Math.cos(theta) * Math.sin(phi),
      Math.sin(theta) * Math.sin(phi),
      Math.cos(phi)
    );
    const randA = rng(), randB = rng(), randC = rng(), randD = rng();

    for (let s = 0; s < segmentsPerRay; s++) {
      const phase = s / segmentsPerRay;
      for (let side = -1; side <= 1; side += 2) {
        const i = idx * 3;
        aPos[i] = phase;
        aPos[i + 1] = r / numRays;
        aPos[i + 2] = side;
        aPos0[i] = dir.x;
        aPos0[i + 1] = dir.y;
        aPos0[i + 2] = dir.z;
        aWireRandom[idx * 4] = randA;
        aWireRandom[idx * 4 + 1] = randB;
        aWireRandom[idx * 4 + 2] = randC;
        aWireRandom[idx * 4 + 3] = randD;
        idx++;
      }
    }
  }

  const geom = new THREE.BufferGeometry();
  geom.setAttribute('aPos', new THREE.BufferAttribute(aPos, 3));
  geom.setAttribute('aPos0', new THREE.BufferAttribute(aPos0, 3));
  geom.setAttribute('aWireRandom', new THREE.BufferAttribute(aWireRandom, 4));
  return geom;
}

// Generate LineSegments geometry for sun flares: inner→outer anchor points, random seed, segmented strips
export function generateSunFlaresGeometry(numFlares, seed) {
  const rng = aleaPRNG(seed + 6000);

  const segmentsPerFlare = 8;
  const vertsPerFlare = segmentsPerFlare * 2;
  const totalVerts = numFlares * vertsPerFlare;

  const aPos = new Float32Array(totalVerts * 3);
  const aPos0 = new Float32Array(totalVerts * 3);
  const aPos1 = new Float32Array(totalVerts * 3);
  const aWireRandom = new Float32Array(totalVerts * 4);

  let idx = 0;
  for (let r = 0; r < numFlares; r++) {
    const theta = 2 * Math.PI * rng();
    const phi = Math.acos(2 * rng() - 1);
    const dir = new THREE.Vector3(
      Math.cos(theta) * Math.sin(phi),
      Math.sin(theta) * Math.sin(phi),
      Math.cos(phi)
    );
    const innerR = 0.9 + rng() * 0.1;
    const outerR = 1.2 + rng() * 1.0;
    const inner = dir.clone().multiplyScalar(innerR);
    const outer = dir.clone().multiplyScalar(outerR);
    const randA = rng(), randB = rng(), randC = 0.3 + rng() * 0.7, randD = rng();

    for (let s = 0; s < segmentsPerFlare; s++) {
      const phase = s / segmentsPerFlare;
      for (let side = -1; side <= 1; side += 2) {
        const i = idx * 3;
        aPos[i] = phase;
        aPos[i + 1] = r / numFlares;
        aPos[i + 2] = side;
        aPos0[i] = inner.x;
        aPos0[i + 1] = inner.y;
        aPos0[i + 2] = inner.z;
        aPos1[i] = outer.x;
        aPos1[i + 1] = outer.y;
        aPos1[i + 2] = outer.z;
        aWireRandom[idx * 4] = randA;
        aWireRandom[idx * 4 + 1] = randB;
        aWireRandom[idx * 4 + 2] = randC;
        aWireRandom[idx * 4 + 3] = randD;
        idx++;
      }
    }
  }

  const geom = new THREE.BufferGeometry();
  geom.setAttribute('aPos', new THREE.BufferAttribute(aPos, 3));
  geom.setAttribute('aPos0', new THREE.BufferAttribute(aPos0, 3));
  geom.setAttribute('aPos1', new THREE.BufferAttribute(aPos1, 3));
  geom.setAttribute('aWireRandom', new THREE.BufferAttribute(aWireRandom, 4));
  return geom;
}

// Generate camera-facing quad ring geometry for sun glow aura (inner ring → outer ring, triangulated)
export function generateSunGlowGeometry() {
  const verts = [];
  const aPos = [];
  const divs = 32;
  for (let i = 0; i <= divs; i++) {
    const t = i / divs;
    const angle = t * 2 * Math.PI;
    const x = Math.cos(angle);
    const y = Math.sin(angle);
    const innerR = 0.1, outerR = 1.0;
    for (let ring = 0; ring < 2; ring++) {
      const r = ring === 0 ? innerR : outerR;
      aPos.push(x * r, y * r, ring);
      verts.push(i * 2 + ring);
    }
  }
  const indices = [];
  for (let i = 0; i < divs; i++) {
    const a = i * 2, b = i * 2 + 1, c = (i + 1) * 2, d = (i + 1) * 2 + 1;
    indices.push(a, c, b);
    indices.push(b, c, d);
  }
  const geom = new THREE.BufferGeometry();
  geom.setAttribute('aPos', new THREE.BufferAttribute(new Float32Array(aPos), 3));
  geom.setIndex(new THREE.BufferAttribute(new Uint16Array(indices), 1));
  return geom;
}

// ShaderMaterial for sun rays: twisted-sine noise ribbon curves, view-facing billboard, spectral color
export function createSunRaysMaterial(params) {
  return new THREE.ShaderMaterial({
    uniforms: {
      uHueSpread: { value: params.hueSpread },
      uHue: { value: params.hue },
      uLength: { value: params.length },
      uWidth: { value: params.width },
      uTime: { value: 0 },
      uNoiseFrequency: { value: params.noiseFreq },
      uNoiseAmplitude: { value: params.noiseAmp },
      uCamPos: { value: new THREE.Vector3(0, 0, 2.5) },
      uViewProjection: { value: new THREE.Matrix4() },
      uOpacity: { value: params.opacity },
      uAlphaBlended: { value: 1.0 },
      uSpectralColor: { value: params.spectralColor || new THREE.Color(1, 1, 1) },
    },
    vertexShader: sunRaysVertexShader,
    fragmentShader: sunRaysFragmentShader,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
}

// ShaderMaterial for sun flares: animated strips with sine amplitude, twisted noise, additive blend
export function createSunFlaresMaterial(params) {
  return new THREE.ShaderMaterial({
    uniforms: {
      uWidth: { value: params.width },
      uAmp: { value: params.amp },
      uTime: { value: 0 },
      uNoiseFrequency: { value: params.noiseFreq },
      uNoiseAmplitude: { value: params.noiseAmp },
      uCamPos: { value: new THREE.Vector3(0, 0, 2.5) },
      uViewProjection: { value: new THREE.Matrix4() },
      uOpacity: { value: params.opacity },
      uHueSpread: { value: params.hueSpread },
      uHue: { value: params.hue },
      uAlphaBlended: { value: 0.75 },
      uSpectralColor: { value: params.spectralColor || new THREE.Color(1, 1, 1) },
    },
    vertexShader: sunFlaresVertexShader,
    fragmentShader: sunFlaresFragmentShader,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
}

// ShaderMaterial for sun glow: camera-facing aura with radial falloff, brightness-to-color mapping
export function createSunGlowMaterial(params) {
  return new THREE.ShaderMaterial({
    uniforms: {
      uTint: { value: params.tint },
      uBrightness: { value: params.brightness },
      uFalloffColor: { value: params.falloffColor },
      uSpectralColor: { value: params.spectralColor || new THREE.Color(1, 1, 1) },
      uViewProjection: { value: new THREE.Matrix4() },
      uRadius: { value: params.radius },
      uCamUp: { value: new THREE.Vector3(0, 1, 0) },
      uCamPos: { value: new THREE.Vector3(0, 0, 2.5) },
    },
    vertexShader: sunGlowVertexShader,
    fragmentShader: sunGlowFragmentShader,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide,
  });
}
