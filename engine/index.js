/**
 * World Engine — standalone planet generation & rendering library
 *
 * Import what you need:
 *   import { generateMesh, generateMap, generatePopulation, initRenderer, render } from './engine/index.js';
 */

/* Core — planet generation, mesh, population, colormaps */
export {
    mesh, map, quadGeometry,
    fbm_noise, generateTriangleCenters, generateVoronoiGeometry,
    generatePlates, assignRegionElevation,
    assignTriangleValues, assignDownflow, assignFlow,
    generateMesh, generateMap,
    getSeed, setSeed,
    getN, setN,
    getP, setP,
    getJitter, setJitter,
    getRotation, setRotation,
    getDrawMode, setDrawMode,
    getDrawPlateVectors, setDrawPlateVectors,
    getDrawPlateBoundaries, setDrawPlateBoundaries,
    getTempOffset, setTempOffset,
    getRainOffset, setRainOffset,
    getWaterLevel, setWaterLevel,
    getDrawCultureOverlay, setDrawCultureOverlay,
    getDrawStateBorders, setDrawStateBorders,
    getDrawStateOverlay, setDrawStateOverlay,
    getDrawProvinceOverlay, setDrawProvinceOverlay,
    getDrawProvinceBorders, setDrawProvinceBorders,
    getDrawBurgOverlay, setDrawBurgOverlay,
    getPlanetType, setPlanetType,
    getBarrenSubtype, setBarrenSubtype,
} from './core/planet.js';

export { generatePopulation } from './core/world-population.js';

export { makeSphere } from './core/sphere-mesh.js';

export { default as aleaPRNG } from './core/aleaPRNG-1.1.js';

export {
    width as colormapWidth,
    height as colormapHeight,
    getData as getColormapData,
    data as colormapData,
} from './core/colormap.js';

/* Render — Three.js scene, materials, draw pipeline */
export {
    initRenderer,
    render,
    getCamera, getRenderer, getControls,
    setCameraRotation,
    rebuildPlanet,
    rebuildRivers,
    rebuildCloudSphere,
    rebuildOverlay,
    rebuildStateOverlay,
    rebuildProvinceOverlay,
    rebuildProvinceBorders,
    rebuildBurgOverlay,
    rebuildPlateVectors,
    rebuildPlateBoundaries,
    updateClimate,
    updateColormapTexture,
    updateColormapColors,
    updateGasGiantParams,
    updateSunParams,
    getSunParams,
    setDrawMode as setRenderDrawMode,
    hasMesh,
    togglePlateVectors,
    togglePlateBoundaries,
    toggleOverlay,
    toggleStateBorders,
    toggleStateOverlay,
    toggleProvinceOverlay,
    toggleProvinceBorders,
    toggleBurgOverlay,
    resize,
} from './render/renderer.js';

export {
    createPlanetSurfaceMaterial,
    createLineMaterial,
    createOverlayMaterial,
    createCloudMaterial,
    createGasGiantMaterial,
} from './render/shaders.js';

export {
    generateSunSphereMaterial,
    generateSunRaysGeometry,
    generateSunFlaresGeometry,
    generateSunGlowGeometry,
    createSunRaysMaterial,
    createSunFlaresMaterial,
    createSunGlowMaterial,
} from './render/sun-shaders.js';

export { rebuildColormapTexture } from './render/colormap-texture.js';
