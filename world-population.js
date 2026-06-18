const {default: FlatQueue} = require('flatqueue');

const C = 'bcdfghjklmnpqrstvwxz';
const V = 'aeiouy';
function randomName(rng) {
  let len = 2 + (rng() * 2 | 0);
  let s = '';
  for (let i = 0; i < len; i++) {
    if (i > 0 && rng() > 0.6) s += C[rng() * C.length | 0];
    s += C[rng() * C.length | 0];
    s += V[rng() * V.length | 0];
  }
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function greatCircleDist(r_xyz, a, b) {
  let dot = r_xyz[3*a]*r_xyz[3*b] + r_xyz[3*a+1]*r_xyz[3*b+1] + r_xyz[3*a+2]*r_xyz[3*b+2];
  return Math.acos(Math.max(-1, Math.min(1, dot)));
}

function computeSuitability(mesh, map) {
  let s = new Float32Array(mesh.numRegions);
  let out = [];
  for (let r = 0; r < mesh.numRegions; r++) {
    let e = map.r_elevation[r];
    let m = map.r_moisture[r];
    if (e < 0) { s[r] = 0; continue; }
    let score = 0.3 + 0.7 * m;
    if (e > 0.6) score *= Math.max(0, 1 - (e - 0.6) * 2);
    mesh.r_circulate_r(out, r);
    for (let nr of out) {
      if (map.r_elevation[nr] < 0) { score *= 1.3; break; }
    }
    s[r] = Math.min(1, score);
  }
  return s;
}

function landCells(mesh, map) {
  let land = [];
  for (let r = 0; r < mesh.numRegions; r++) {
    if (map.r_elevation[r] >= 0) land.push(r);
  }
  return land;
}

function generateCultures(mesh, map, suitability, numCultures, rng) {
  let land = landCells(mesh, map);
  if (land.length < numCultures * 5) numCultures = Math.max(1, land.length / 5 | 0);

  let cultures = [];
  let cellCulture = new Int32Array(mesh.numRegions);
  cellCulture.fill(-1);

  // Place centers with minimum spacing
  let centers = [];
  let candidates = land.slice().sort(() => rng() - 0.5);
  let minDist = Math.PI / Math.sqrt(numCultures);

  for (let c of candidates) {
    if (centers.length >= numCultures) break;
    let tooClose = false;
    for (let oc of centers) {
      if (greatCircleDist(map.r_xyz, c, oc) < minDist) { tooClose = true; break; }
    }
    if (!tooClose) centers.push(c);
  }

  for (let i = 0; i < centers.length; i++) {
    let type = 'Generic';
    let e = map.r_elevation[centers[i]];
    let m = map.r_moisture[centers[i]];
    if (e > 0.5) type = 'Highland';
    else if (m > 0.7) type = 'Forest';
    else {
      let out = [];
      mesh.r_circulate_r(out, centers[i]);
      for (let nr of out) {
        if (map.r_elevation[nr] < 0) { type = 'Naval'; break; }
      }
    }
    let exp = type === 'Naval' ? 1.5 : type === 'Highland' ? 0.7 : 1 + rng() * 0.5;
    cultures.push({i, name: randomName(rng), center: centers[i], type, expansionism: exp, cells: 0});
  }

  if (cultures.length === 0) return {cultures, cellCulture};

  // Dijkstra expansion
  let cost = new Float32Array(mesh.numRegions);
  cost.fill(Infinity);
  let queue = new FlatQueue();
  let out_r = [];

  for (let c of cultures) {
    cost[c.center] = 0;
    cellCulture[c.center] = c.i;
    queue.push(c.center, 0);
  }

  while (queue.length > 0) {
    let r = queue.pop();
    let cc = cost[r];
    let ci = cellCulture[r];
    if (ci < 0) continue;
    let cult = cultures[ci];

    mesh.r_circulate_r(out_r, r);
    for (let nr of out_r) {
      if (cellCulture[nr] >= 0) continue;
      let e = map.r_elevation[nr];
      if (e < 0) continue;
      let ec = 10;
      if (cult.type === 'Highland' && e < 0.3) ec += 30;
      else if (e > 0.5) ec += 20;
      let nm = Math.abs(map.r_moisture[nr] - map.r_moisture[cult.center]);
      if (nm > 0.3) ec += 15;
      let total = cc + ec / cult.expansionism;
      if (total < cost[nr]) {
        cost[nr] = total;
        cellCulture[nr] = ci;
        queue.push(nr, total);
      }
    }
  }

  for (let c of cultures) {
    c.cells = 0;
    for (let r = 0; r < mesh.numRegions; r++) {
      if (cellCulture[r] === c.i) c.cells++;
    }
  }

  return {cultures, cellCulture};
}

function generateBurgs(mesh, map, suitability, cultures, cellCulture, rng) {
  let burgs = [];
  let cellBurg = new Int32Array(mesh.numRegions);
  cellBurg.fill(-1);

  let land = [];
  for (let r = 0; r < mesh.numRegions; r++) {
    if (map.r_elevation[r] >= 0 && cellCulture[r] >= 0) land.push(r);
  }
  if (land.length < 10) return {burgs, cellBurg};

  // Score for settlement
  let scored = land.map(r => ({r, s: suitability[r] * (0.5 + rng() * 0.5)}));
  scored.sort((a, b) => b.s - a.s);

  let numCapitals = Math.min(30, Math.max(3, cultures.length));
  let numTowns = Math.min(land.length / 5 | 0, 200);

  // Place capitals
  let minDist = Math.PI / Math.sqrt(numCapitals);
  let placed = [];
  for (let s of scored) {
    if (placed.length >= numCapitals) break;
    if (cellCulture[s.r] < 0) continue;
    let tooClose = false;
    for (let p of placed) {
      if (greatCircleDist(map.r_xyz, s.r, p) < minDist) { tooClose = true; break; }
    }
    if (!tooClose) {
      placed.push(s.r);
      cellBurg[s.r] = burgs.length;
      burgs.push({
        i: burgs.length, cell: s.r, name: randomName(rng),
        capital: 1, population: 0, culture: cellCulture[s.r], state: -1
      });
    }
  }

  // Place towns
  let townMinDist = minDist * 0.5;
  for (let s of scored) {
    if (placed.length >= numCapitals + numTowns) break;
    if (cellBurg[s.r] >= 0 || cellCulture[s.r] < 0) continue;
    let tooClose = false;
    for (let p of placed) {
      if (greatCircleDist(map.r_xyz, s.r, p) < townMinDist * (1 + rng())) { tooClose = true; break; }
    }
    if (!tooClose) {
      placed.push(s.r);
      cellBurg[s.r] = burgs.length;
      burgs.push({
        i: burgs.length, cell: s.r, name: randomName(rng),
        capital: 0, population: 0, culture: cellCulture[s.r], state: -1
      });
    }
  }

  return {burgs, cellBurg};
}

function generateStates(mesh, map, cultures, burgs, cellBurg, cellCulture, rng) {
  let states = [];
  let cellState = new Int32Array(mesh.numRegions);
  cellState.fill(0);

  let capitals = burgs.filter(b => b.capital);
  if (capitals.length === 0) return {states: [], cellState};

  for (let b of capitals) {
    let cult = cultures[b.culture];
    let exp = 0.8 + rng() * 0.8;
    states.push({
      i: states.length, name: b.name,
      capital: b.i, culture: b.culture, center: b.cell,
      expansionism: exp * (cult ? cult.expansionism : 1),
      cells: 0, burgs: [], color: ''
    });
    b.state = states.length - 1;
  }

  // Dijkstra expansion
  let cost = new Float32Array(mesh.numRegions);
  cost.fill(Infinity);
  let queue = new FlatQueue();
  let out_r = [];

  for (let s of states) {
    cost[s.center] = 0;
    cellState[s.center] = s.i;
    queue.push(s.center, 0);
  }

  while (queue.length > 0) {
    let r = queue.pop();
    let cc = cost[r];
    let si = cellState[r];
    if (si < 0) continue;
    let state = states[si];

    mesh.r_circulate_r(out_r, r);
    for (let nr of out_r) {
      if (map.r_elevation[nr] < 0) continue;
      if (cellState[nr] > 0) continue;
      let ec = 10;
      if (cellCulture[nr] !== state.culture) ec += 100;
      if (cellBurg[nr] >= 0) ec -= 20;
      let e = map.r_elevation[nr];
      if (e > 0.5) ec += 30;
      let total = cc + ec / state.expansionism;
      if (total < 20000 && total < cost[nr]) {
        cost[nr] = total;
        cellState[nr] = si;
        queue.push(nr, total);
      }
    }
  }

  // Assign burgs to states
  for (let b of burgs) {
    if (b.state < 0) {
      b.state = cellState[b.cell];
      if (states[b.state]) states[b.state].burgs.push(b.i);
    } else {
      states[b.state].burgs.push(b.i);
    }
  }

  // Gather state statistics
  for (let s of states) {
    s.cells = 0;
    for (let r = 0; r < mesh.numRegions; r++) {
      if (cellState[r] === s.i) s.cells++;
    }
  }

  // Greedy color assignment
  let stateColors = ['#e6194b','#3cb44b','#ffe119','#4363d8','#f58231','#911eb4','#42d4f4','#f032e6','#bfef45','#fabed4','#469990','#dcbeff','#9a6324','#fffac8','#800000','#aaffc3','#808000','#ffd8b1','#000075','#a9a9a9','#e6beff','#ff46b8'];
  function neighborsOf(stateIdx) {
    let ns = new Set();
    for (let r = 0; r < mesh.numRegions; r++) {
      if (cellState[r] !== stateIdx) continue;
      mesh.r_circulate_r(out_r, r);
      for (let nr of out_r) {
        let ns2 = cellState[nr];
        if (ns2 > 0 && ns2 !== stateIdx) ns.add(ns2);
      }
    }
    return [...ns];
  }
  for (let s of states) {
    let neighbors = neighborsOf(s.i).map(ni => states[ni]).filter(s2 => s2 && s2.color);
    let used = new Set(neighbors.map(s2 => s2.color));
    s.color = stateColors.find(c => !used.has(c)) || '#' + (rng() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
  }

  return {states, cellState};
}

function generateProvinces(mesh, map, states, burgs, cellState, cellBurg, rng) {
  let provinces = [];
  let cellProvince = new Int32Array(mesh.numRegions);
  cellProvince.fill(-1);

  let stateProvinces = {};

  for (let s of states) {
    let sBurgs = burgs.filter(b => b.state === s.i);
    if (sBurgs.length < 2) { stateProvinces[s.i] = []; continue; }

    sBurgs.sort((a, b) => (b.capital ? 1 : 0) - (a.capital ? 1 : 0));
    let numProv = Math.min(sBurgs.length, Math.max(2, sBurgs.length * 0.5 | 0));
    let provSeeds = sBurgs.slice(0, numProv);

    for (let b of provSeeds) {
      let p = {
        i: provinces.length, name: randomName(rng) + ' Province',
        state: s.i, burg: b.i, center: b.cell, cells: 0
      };
      provinces.push(p);
      cellProvince[b.cell] = p.i;
    }
    stateProvinces[s.i] = provSeeds.map(b => cellProvince[b.cell]);
  }

  // Expand provinces within state borders
  let cost = new Float32Array(mesh.numRegions);
  cost.fill(Infinity);
  let queue = new FlatQueue();
  let out_r = [];

  for (let p of provinces) {
    cost[p.center] = 0;
    queue.push(p.center, 0);
  }

  while (queue.length > 0) {
    let r = queue.pop();
    let cc = cost[r];
    let pi = cellProvince[r];
    if (pi < 0) continue;

    mesh.r_circulate_r(out_r, r);
    for (let nr of out_r) {
      if (map.r_elevation[nr] < 0) continue;
      if (cellState[nr] !== cellState[r]) continue;
      if (cellProvince[nr] >= 0) continue;
      let ec = map.r_elevation[nr] > 0.5 ? 100 : 10;
      let total = cc + ec;
      if (total < cost[nr]) {
        cost[nr] = total;
        cellProvince[nr] = pi;
        queue.push(nr, total);
      }
    }
  }

  for (let p of provinces) {
    for (let r = 0; r < mesh.numRegions; r++) {
      if (cellProvince[r] === p.i) p.cells++;
    }
  }

  return {provinces, cellProvince};
}

function generatePopulation(mesh, map, numCultures, seed) {
  let rng = function() {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return (seed & 0x7FFFFFFF) / 0x7FFFFFFF;
  };

  let suitability = computeSuitability(mesh, map);
  let {cultures, cellCulture} = generateCultures(mesh, map, suitability, numCultures, rng);
  let {burgs, cellBurg} = generateBurgs(mesh, map, suitability, cultures, cellCulture, rng);
  let {states, cellState} = generateStates(mesh, map, cultures, burgs, cellBurg, cellCulture, rng);
  let {provinces, cellProvince} = generateProvinces(mesh, map, states, burgs, cellState, cellBurg, rng);

  return {
    cultures, cellCulture,
    burgs, cellBurg,
    states, cellState,
    provinces, cellProvince,
    suitability
  };
}

if (typeof module !== 'undefined') module.exports = {generatePopulation};
if (typeof window !== 'undefined') window.generatePopulation = generatePopulation;
