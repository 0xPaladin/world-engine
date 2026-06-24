import * as THREE from 'three';
import * as planet from './planet.js';
import * as renderer from './renderer.js';
import { generatePopulation } from '../world-population.js';
import GUI from 'lil-gui';

const canvas = document.getElementById('output');

renderer.initRenderer(canvas);

function rebuildAll() {
    const ptype = planet.getPlanetType();
    if (ptype === 'gasgiant') {
        renderer.updateGasGiantParams({ seed: PARAMS.seed });
    }
    renderer.rebuildPlanet(
        planet.mesh, planet.map, planet.quadGeometry,
        planet.getDrawMode(),
        planet.getTempOffset(), planet.getRainOffset(), planet.getWaterLevel(),
        ptype
    );
    renderer.rebuildRivers(planet.mesh, planet.map, planet.getWaterLevel(), ptype);
    renderer.rebuildCloudSphere(ptype, planet.getSeed(), planet.getBarrenSubtype());
    renderer.updateColormapTexture(ptype);
}

function applyClimate() {
    if (planet.getPlanetType() === 'gasgiant') return;
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
    if (planet.getPlanetType() === 'gasgiant') return;
    if (planet.getDrawMode() === 'centroid') {
        renderer.rebuildPlanet(
            planet.mesh, planet.map, planet.quadGeometry,
            'centroid', tempOffset, rainOffset, waterLevel,
            planet.getPlanetType()
        );
    }
}

/* lil-gui setup */

let _seedCtrl = null;
let _saveNameCtrl = null;
let _selectedSaveCtrl = null;

function updateAllControllers(g) {
    g.controllers.forEach(c => c.updateDisplay());
    g.folders.forEach(f => updateAllControllers(f));
}

async function refreshSavedNames() {
    const res = await fetch('/api/saves');
    const names = await res.json();
    if (_selectedSaveCtrl) {
        _selectedSaveCtrl.options(names.length > 0 ? names : ['']);
        if (PARAMS.selectedSave && names.includes(PARAMS.selectedSave)) {
            _selectedSaveCtrl.setValue(PARAMS.selectedSave);
        } else {
            _selectedSaveCtrl.setValue(names.length > 0 ? names[names.length - 1] : '');
        }
    }
    return names;
}

async function doSave() {
    const name = PARAMS.worldName.trim();
    if (!name) return;
    const data = {
        planetType: planet.getPlanetType(),
        seed: planet.getSeed(),
        regions: planet.getN(),
        plates: planet.getP(),
        jitter: planet.getJitter(),
        drawMode: planet.getDrawMode(),
        temperature: planet.getTempOffset(),
        rainfall: planet.getRainOffset(),
        waterLevel: planet.getWaterLevel(),
        plateVectors: planet.getDrawPlateVectors(),
        plateBoundaries: planet.getDrawPlateBoundaries(),
        cultures: window._numCultures || 16,
        numStates: window._numStates || 16,
        maxBurgs: window._maxBurgs || 10000,
        cultureOverlay: planet.getDrawCultureOverlay(),
        stateBorders: planet.getDrawStateBorders(),
        stateOverlay: planet.getDrawStateOverlay(),
        provinceOverlay: planet.getDrawProvinceOverlay(),
        provinceBorders: planet.getDrawProvinceBorders(),
        burgOverlay: planet.getDrawBurgOverlay(),
        scale: PARAMS.scale,
        turbulence: PARAMS.turbulence,
        blur: PARAMS.blur,
        colorA: PARAMS.colorA,
        colorB: PARAMS.colorB,
        colorC: PARAMS.colorC,
        barrenColorA: PARAMS.barrenColorA,
        barrenColorB: PARAMS.barrenColorB,
        barrenColorC: PARAMS.barrenColorC,
        airlessColorA: PARAMS.airlessColorA,
        airlessColorB: PARAMS.airlessColorB,
        airlessColorC: PARAMS.airlessColorC,
        barrenSubtype: PARAMS.barrenSubtype,
    };
    await fetch('/api/saves/' + encodeURIComponent(name), {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    PARAMS.selectedSave = name;
    await refreshSavedNames();
}

async function doLoad() {
    const name = PARAMS.selectedSave;
    if (!name) return;
    const res = await fetch('/api/saves/' + encodeURIComponent(name));
    if (!res.ok) return;
    const data = await res.json();

    planet.setPlanetType(data.planetType);
    planet.setBarrenSubtype(data.barrenSubtype || 'barren');
    planet.setSeed(data.seed);
    planet.setN(data.regions);
    planet.setP(data.plates);
    planet.setJitter(data.jitter);
    planet.setDrawMode(data.drawMode);
    planet.setTempOffset(data.temperature);
    planet.setRainOffset(data.rainfall);
    planet.setWaterLevel(data.waterLevel);
    planet.setDrawPlateVectors(data.plateVectors);
    planet.setDrawPlateBoundaries(data.plateBoundaries);
    window._numCultures = data.cultures;
    window._numStates = data.numStates;
    window._maxBurgs = data.maxBurgs;
    planet.setDrawCultureOverlay(data.cultureOverlay);
    planet.setDrawStateBorders(data.stateBorders);
    planet.setDrawStateOverlay(data.stateOverlay);
    planet.setDrawProvinceOverlay(data.provinceOverlay);
    planet.setDrawProvinceBorders(data.provinceBorders);
    planet.setDrawBurgOverlay(data.burgOverlay);

    PARAMS.planetType = data.planetType;
    PARAMS.seed = data.seed;
    PARAMS.regions = data.regions;
    PARAMS.plates = data.plates;
    PARAMS.jitter = data.jitter;
    PARAMS.drawMode = data.drawMode;
    PARAMS.temperature = data.temperature;
    PARAMS.rainfall = data.rainfall;
    PARAMS.waterLevel = data.waterLevel;
    PARAMS.plateVectors = data.plateVectors;
    PARAMS.plateBoundaries = data.plateBoundaries;
    PARAMS.cultures = data.cultures;
    PARAMS.numStates = data.numStates;
    PARAMS.maxBurgs = data.maxBurgs;
    PARAMS.cultureOverlay = data.cultureOverlay;
    PARAMS.stateBorders = data.stateBorders;
    PARAMS.stateOverlay = data.stateOverlay;
    PARAMS.provinceOverlay = data.provinceOverlay;
    PARAMS.provinceBorders = data.provinceBorders;
    PARAMS.burgOverlay = data.burgOverlay;
    PARAMS.scale = data.scale;
    PARAMS.turbulence = data.turbulence;
    PARAMS.blur = data.blur;
    PARAMS.colorA = data.colorA;
    PARAMS.colorB = data.colorB;
    PARAMS.colorC = data.colorC;
    PARAMS.barrenColorA = data.barrenColorA || BARREN_DEFAULTS.colorA;
    PARAMS.barrenColorB = data.barrenColorB || BARREN_DEFAULTS.colorB;
    PARAMS.barrenColorC = data.barrenColorC || BARREN_DEFAULTS.colorC;
    PARAMS.airlessColorA = data.airlessColorA || AIRLESS_DEFAULTS.colorA;
    PARAMS.airlessColorB = data.airlessColorB || AIRLESS_DEFAULTS.colorB;
    PARAMS.airlessColorC = data.airlessColorC || AIRLESS_DEFAULTS.colorC;
    PARAMS.barrenSubtype = data.barrenSubtype || 'barren';
    PARAMS.worldName = name;

    renderer.updateGasGiantParams({
        scale: data.scale,
        turbulence: data.turbulence,
        blur: data.blur,
        colorA: new THREE.Color(data.colorA),
        colorB: new THREE.Color(data.colorB),
        colorC: new THREE.Color(data.colorC),
        seed: data.seed,
    });
    renderer.updateColormapColors('barren', {
        colorA: PARAMS.barrenColorA,
        colorB: PARAMS.barrenColorB,
        colorC: PARAMS.barrenColorC,
    });
    renderer.updateColormapColors('airless', {
        colorA: PARAMS.airlessColorA,
        colorB: PARAMS.airlessColorB,
        colorC: PARAMS.airlessColorC,
    });
    planet.generateMesh();
    rebuildAll();
    applyClimate();
    setTimeout(() => window.applyPopulation(), 200);
    toggleGasGiantUI(data.planetType);
    updateAllControllers(gui);
}

const GAS_GIANT_DEFAULTS = {
    scale: 1,
    turbulence: 2,
    blur: 0.5,
    colorA: '#fff8f0',
    colorB: '#f0e8b0',
    colorC: '#afa0d0',
};

const BARREN_DEFAULTS = {
    colorA: '#321408',
    colorB: '#aa5523',
    colorC: '#fae6e6',
};

const AIRLESS_DEFAULTS = {
    colorA: '#555555',
    colorB: '#aaaaaa',
    colorC: '#eeeeee',
};

const PARAMS = {
    worldName: 'My World',
    selectedSave: '',
    saveWorld: doSave,
    loadWorld: doLoad,
    planetType: planet.getPlanetType(),
    seed: planet.getSeed(),
    regions: planet.getN(),
    plates: planet.getP(),
    jitter: planet.getJitter(),
    temperature: planet.getTempOffset(),
    rainfall: planet.getRainOffset(),
    waterLevel: planet.getWaterLevel(),
    drawMode: planet.getDrawMode(),
    plateVectors: planet.getDrawPlateVectors(),
    plateBoundaries: planet.getDrawPlateBoundaries(),
    cultures: window._numCultures || 16,
    numStates: window._numStates || 16,
    maxBurgs: window._maxBurgs || 10000,
    cultureOverlay: planet.getDrawCultureOverlay(),
    stateBorders: planet.getDrawStateBorders(),
    stateOverlay: planet.getDrawStateOverlay(),
    provinceOverlay: planet.getDrawProvinceOverlay(),
    provinceBorders: planet.getDrawProvinceBorders(),
    burgOverlay: planet.getDrawBurgOverlay(),
    scale: GAS_GIANT_DEFAULTS.scale,
    turbulence: GAS_GIANT_DEFAULTS.turbulence,
    blur: GAS_GIANT_DEFAULTS.blur,
    colorA: GAS_GIANT_DEFAULTS.colorA,
    colorB: GAS_GIANT_DEFAULTS.colorB,
    colorC: GAS_GIANT_DEFAULTS.colorC,
    barrenColorA: BARREN_DEFAULTS.colorA,
    barrenColorB: BARREN_DEFAULTS.colorB,
    barrenColorC: BARREN_DEFAULTS.colorC,
    airlessColorA: AIRLESS_DEFAULTS.colorA,
    airlessColorB: AIRLESS_DEFAULTS.colorB,
    airlessColorC: AIRLESS_DEFAULTS.colorC,
    barrenSubtype: planet.getBarrenSubtype(),
    newPlanet: () => {
        const newSeed = planet.getSeed() + 1;
        PARAMS.seed = newSeed;
        planet.setSeed(newSeed);
        renderer.updateGasGiantParams({ seed: newSeed });
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

const gui = new XGUI({ title: 'Planet Generator', width: 300 });  //, mode: "accordion" 

_selectedSaveCtrl = gui.add(PARAMS, 'selectedSave', ['']).name('Saved Worlds');
_selectedSaveCtrl.domElement.classList.add("w-70");
_selectedSaveCtrl.append(PARAMS, 'loadWorld').name('Load').domElement.classList.add("w-30");

_saveNameCtrl = gui.add(PARAMS, 'worldName').name('World Name')
    .append(PARAMS, 'saveWorld').name('Save').domElement.classList.add("w-30");

gui.add(PARAMS, 'planetType', ['earthlike', 'airless', 'barren', 'gasgiant']).name('Planet Type').onChange(v => {
    planet.setPlanetType(v);
    PARAMS.barrenSubtype = planet.getBarrenSubtype();
    if (v === 'barren') {
        renderer.updateColormapColors('barren', {
            colorA: PARAMS.barrenColorA,
            colorB: PARAMS.barrenColorB,
            colorC: PARAMS.barrenColorC,
        });
    } else if (v === 'airless') {
        renderer.updateColormapColors('airless', {
            colorA: PARAMS.airlessColorA,
            colorB: PARAMS.airlessColorB,
            colorC: PARAMS.airlessColorC,
        });
    }
    planet.generateMesh();
    rebuildAll();
    applyClimate();
    setTimeout(() => window.applyPopulation(), 200);
    toggleGasGiantUI(v);
}).append(PARAMS, 'newPlanet').name('New Planet').domElement.classList.add("w-50");

gui.add(PARAMS, 'seed', 0, 999999, 1).name('Seed').onChange(v => {
    planet.setSeed(v);
    renderer.updateGasGiantParams({ seed: v });
    planet.generateMesh();
    rebuildAll();
    applyClimate();
    setTimeout(() => window.applyPopulation(), 200);
});


const fGeo = gui.addFolder('Geography');

fGeo.add(PARAMS, 'regions', 100, 100000, 100).name('Regions').onChange(v => {
    planet.setN(v);
    planet.generateMesh();
    rebuildAll();
    applyClimate();
    setTimeout(() => window.applyPopulation(), 200);
})
fGeo.add(PARAMS, 'drawMode', ['quads', 'centroid']).name('Draw Mode').onChange(v => {
    planet.setDrawMode(v);
    if (!renderer.hasMesh(v) && planet.getPlanetType() !== 'gasgiant') {
        renderer.rebuildPlanet(
            planet.mesh, planet.map, planet.quadGeometry,
            v,
            planet.getTempOffset(), planet.getRainOffset(), planet.getWaterLevel(),
            planet.getPlanetType()
        );
        renderer.rebuildRivers(planet.mesh, planet.map, planet.getWaterLevel(), planet.getPlanetType());
    }
    renderer.setDrawMode(v);
}).append(PARAMS, 'jitter', 0, 1, 0.001).name('Jitter').onChange(v => {
    planet.setJitter(v);
    planet.generateMesh();
    rebuildAll();
    applyClimate();
    setTimeout(() => window.applyPopulation(), 200);
})

fGeo.add(PARAMS, 'plates', 5, 100, 1).name('Plates').onChange(v => {
    planet.setP(v);
    planet.generateMap();
    rebuildAll();
    applyClimate();
}).append(PARAMS, 'waterLevel', -0.5, 0.5, 0.01).name('Water Level').onChange(v => {
    planet.setWaterLevel(v);
    applyClimate();
    renderer.rebuildRivers(planet.mesh, planet.map, planet.getWaterLevel(), planet.getPlanetType());
});

const fEarthlike = gui.addFolder('Earthlike Options');
fEarthlike.add(PARAMS, 'temperature', -1, 1, 0.01).name('Temperature').onChange(v => {
    planet.setTempOffset(v);
    applyClimate();
}).append(PARAMS, 'rainfall', -0.5, 0.5, 0.01).name('Rainfall').onChange(v => {
    planet.setRainOffset(v);
    applyClimate();
});

const fPopulation = fEarthlike.addFolder('Population');
fPopulation.add(PARAMS, 'cultures', 2, 40, 1).name('Cultures').onChange(v => {
    window._numCultures = v;
}).append(PARAMS, 'numStates', 1, 50, 1).name('States').onChange(v => {
    window._numStates = v;
});
fPopulation.add(PARAMS, 'maxBurgs', 100, 50000, 100).name('Max Burgs').onChange(v => {
    window._maxBurgs = v;
});
fPopulation.add(PARAMS, 'applyPopulation').name('Apply Changes');

function updateGasGiant() {
    renderer.updateGasGiantParams({
        scale: PARAMS.scale,
        turbulence: PARAMS.turbulence,
        blur: PARAMS.blur,
        colorA: new THREE.Color(PARAMS.colorA),
        colorB: new THREE.Color(PARAMS.colorB),
        colorC: new THREE.Color(PARAMS.colorC),
        seed: PARAMS.seed,
    });
}

const fGasGiant = gui.addFolder('Gas Giant');
fGasGiant.add(PARAMS, 'scale', 0, 4, 0.01).name('Scale').onChange(updateGasGiant);
fGasGiant.add(PARAMS, 'turbulence', 0, 4, 0.01).name('Turbulence').onChange(updateGasGiant);
fGasGiant.add(PARAMS, 'blur', 0, 1, 0.01).name('Blur').onChange(updateGasGiant);
fGasGiant.addColor(PARAMS, 'colorA').name('Color A').onChange(updateGasGiant);
fGasGiant.addColor(PARAMS, 'colorB').name('Color B').onChange(updateGasGiant);
fGasGiant.addColor(PARAMS, 'colorC').name('Color C').onChange(updateGasGiant);

const fBarren = gui.addFolder('Barren Options');
fBarren.add(PARAMS, 'barrenSubtype', ['barren', 'hostile']).name('Subtype').onChange(v => {
    planet.setBarrenSubtype(v);
    planet.generateMesh();
    rebuildAll();
    applyClimate();
    setTimeout(() => window.applyPopulation(), 200);
});

function updateBarrenColors() {
    renderer.updateColormapColors('barren', {
        colorA: PARAMS.barrenColorA,
        colorB: PARAMS.barrenColorB,
        colorC: PARAMS.barrenColorC,
    });
}

function updateAirlessColors() {
    renderer.updateColormapColors('airless', {
        colorA: PARAMS.airlessColorA,
        colorB: PARAMS.airlessColorB,
        colorC: PARAMS.airlessColorC,
    });
}

fBarren.addColor(PARAMS, 'barrenColorA').name('Color A').onChange(updateBarrenColors);
fBarren.addColor(PARAMS, 'barrenColorB').name('Color B').onChange(updateBarrenColors);
fBarren.addColor(PARAMS, 'barrenColorC').name('Color C').onChange(updateBarrenColors);

const fAirlessColors = gui.addFolder('Airless Colors');
fAirlessColors.addColor(PARAMS, 'airlessColorA').name('Color A').onChange(updateAirlessColors);
fAirlessColors.addColor(PARAMS, 'airlessColorB').name('Color B').onChange(updateAirlessColors);
fAirlessColors.addColor(PARAMS, 'airlessColorC').name('Color C').onChange(updateAirlessColors);

const fOverlays = gui.addFolder('Overlays');
fOverlays.add(PARAMS, 'cultureOverlay').name('Cultures').onChange(v => {
    planet.setDrawCultureOverlay(v);
    renderer.toggleOverlay(v);
}).append(PARAMS, 'stateOverlay').name('States').onChange(v => {
    planet.setDrawStateOverlay(v);
    renderer.toggleStateOverlay(v);
}).append(PARAMS, 'provinceOverlay').name('Provinces').onChange(v => {
    planet.setDrawProvinceOverlay(v);
    renderer.toggleProvinceOverlay(v);
}).append(PARAMS, 'burgOverlay').name('Burgs').onChange(v => {
    planet.setDrawBurgOverlay(v);
    renderer.toggleBurgOverlay(v);
});

const fBorders = fOverlays.addFolder('Borders');
fBorders.add(PARAMS, 'stateBorders').name('States').onChange(v => {
    planet.setDrawStateBorders(v);
    renderer.toggleStateBorders(v);
}).append(PARAMS, 'provinceBorders').name('Provinces').onChange(v => {
    planet.setDrawProvinceBorders(v);
    renderer.toggleProvinceBorders(v);
});

const infoContent = document.createElement('div');
infoContent.style.cssText = 'padding:6px 8px;font-size:11px;line-height:1.6;color:#aaa;min-height:40px;white-space:pre-wrap;overflow-wrap:break-word;';
infoContent.textContent = 'Click planet for region info';
gui.domElement.appendChild(infoContent);

function toggleGasGiantUI(type) {
    const isGG = type === 'gasgiant';
    fGasGiant.domElement.style.display = isGG ? '' : 'none';
    fEarthlike.domElement.style.display = type === 'earthlike' ? '' : 'none';
    fGeo.domElement.style.display = isGG ? 'none' : '';
    fOverlays.domElement.style.display = isGG ? 'none' : '';
    fBarren.domElement.style.display = type === 'barren' ? '' : 'none';
    fAirlessColors.domElement.style.display = type === 'airless' ? '' : 'none';
}

toggleGasGiantUI(planet.getPlanetType());

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
    if (!renderer.hasMesh(newMode) && planet.getPlanetType() !== 'gasgiant') {
        renderer.rebuildPlanet(
            planet.mesh, planet.map, planet.quadGeometry,
            newMode,
            planet.getTempOffset(), planet.getRainOffset(), planet.getWaterLevel(),
            planet.getPlanetType()
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
    const population = generatePopulation(planet.mesh, planet.map, window._numCultures || 8, planet.getSeed(), window._numStates || 16, window._maxBurgs || 10000);
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
    if (ptype === 'gasgiant') {
        biome = 'Gas Giant';
    } else if (ptype === 'airless') {
        if (e < -0.3) biome = 'Crater Floor';
        else if (e < 0) biome = 'Lowland Basin';
        else if (e < 0.2) biome = 'Mare';
        else if (e < 0.45) biome = 'Highland Terrain';
        else biome = 'Peak / Ridge';
    } else if (ptype === 'barren') {
        if (PARAMS.barrenSubtype === 'hostile') {
            if (e < 0) biome = 'Rift Basin';
            else if (e < 0.15) biome = 'Sulfurous Plain';
            else if (e < 0.35) biome = 'Volcanic Dome';
            else if (e < 0.55) biome = 'Tessera Highland';
            else biome = 'Mountain / Ridge';
        } else {
            if (e < 0) biome = 'Depression';
            else if (e < 0.15) biome = 'Lowland Plain';
            else if (e < 0.35) biome = 'Volcanic Rise';
            else if (e < 0.55) biome = 'Highland';
            else biome = 'Polar Cap / Summit';
        }
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
refreshSavedNames();

/* Start render loop */
function animate() {
    renderer.render();
    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);

window._numCultures = 16;
window._numStates = 16;
window._maxBurgs = 10000;

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
