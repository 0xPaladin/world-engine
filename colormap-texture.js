import * as THREE from 'three';
const colormap = require('./colormap');

function makeTexture(data) {
    const texture = new THREE.DataTexture(
        data,
        colormap.width,
        colormap.height,
        THREE.RGBAFormat
    );
    texture.wrapS = THREE.ClampToEdgeWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.magFilter = THREE.NearestFilter;
    texture.minFilter = THREE.NearestFilter;
    texture.needsUpdate = true;
    return texture;
}

export function rebuildColormapTexture(type) {
    return makeTexture(colormap.getData(type));
}

const defaultTexture = makeTexture(colormap.data);
export default defaultTexture;
