# Agent Conventions

## Build

### Linux
```bash
# Build Three.js bundle (default)
node_modules/.bin/esbuild src/main.js --bundle --sourcemap --outfile=build/_bundle.js

# Build regl bundle (preserved)
node_modules/.bin/esbuild regl/planet-generation.js --bundle --sourcemap --outfile=build/_bundle.regl.js
```

### Windows
```powershell
# Build Three.js bundle (default)
& "node_modules\@esbuild\win32-x64\esbuild.exe" src/main.js --bundle --sourcemap --outfile=build/_bundle.js

# Build regl bundle (preserved)
& "node_modules\@esbuild\win32-x64\esbuild.exe" regl/planet-generation.js --bundle --sourcemap --outfile=build/_bundle.regl.js
```

### Server

- Static file server on port 3333 (`bun server.js`)
- Three.js version: `http://localhost:3333/`
- regl version (preserved): `http://localhost:3333/regl/index.html`

## Code Style

- No comments in source code
- ES modules in src/; commonjs interop via esbuild bundling
- External ESM requires explicit `.default` import (e.g. `{default: FlatQueue}`)
- Expose public API functions on `window` object
- No TypeScript, no linting config
- Biome lookups via `colormap.js` RGBA texture (elevation × moisture)

## Files

### Core (shared by both versions)
- `sphere-mesh.js` — Fibonacci sphere mesh, Delaunay, Voronoi
- `world-population.js` — culture/state/burg/province Dijkstra generation
- `colormap.js` — 64×64 RGBA biome colormap
- `server.js` — Bun static file server
- `aleaPRNG-1.1.js` — Alea PRNG (seeded, good statistical properties)

### Three.js version (active)
- `src/main.js` — entry point, window.* API, Three.js scene init, lil-gui controls
- `src/planet.js` — simulation code: mesh gen, map gen, plates, elevation, rivers, climate, QuadGeometry
- `src/renderer.js` — Three.js scene, camera, materials, draw pipeline, overlay
- `src/shaders.js` — Three.js ShaderMaterial: colormap surface, lines, overlays
- `colormap-texture.js` — Three.js DataTexture from colormap.js
- `index.html` — minimal layout: canvas only, lil-gui overlay
- `build/_bundle.js` — esbuild Three.js + lil-gui output

### regl version (preserved)
- `regl/planet-generation.js` — original regl-based code (unchanged)
- `regl/index.html` — original HTML with drag handlers
- `build/_bundle.regl.js` — esbuild regl output

## Climate System

- Temperature slider: multiplicative on land only (`e / (1+temp*3)` for warming, `e * (1+abs(temp)*2)` for cooling)
- Rainfall slider: additive moisture offset
- Water level: subtracts from raw elevation before temperature scaling
- Biome detection: `applyClimate(mesh, map)` updates UV attribute; `applyPopulation()` re-runs culture sim
- Three.js: climate updates set `uv.needsUpdate = true` on planet geometry

## Population Data Model

```js
window._population = {
  cultures: [{i, name, color, seed}],
  states: [{i, name, culture, seed}],
  burgs: [{i, name, region, culture, state, seed}],
  provinces: [{i, name, state, seed}],
  cellCulture: Int32Array(numRegions),  // culture index per region (-1 = none)
  cellState: Int32Array(numRegions),    // state index per region (-1 = none)
  cellBurg: Int32Array(numRegions),     // burg index per region (-1 = none)
}
```

- `cellState` uses `-1` sentinel (not `0`) so state index 0 doesn't conflate with "no state"
- `cellProvince` also uses `-1` sentinel

## Picking

`window.pickRegion(ndcX, ndcY)` returns `{region, biome, temperature, rawElevation, moisture, plate, plateType}`. Culture/state/burg lookup from `window._population` by region index. Uses Three.js `Raycaster` for ray-sphere intersection.

## Overlay Rendering

- Culture overlay: `THREE.Mesh` with `MeshBasicMaterial`, depth-test only no depth-write
- State borders: `THREE.LineSegments` with per-vertex RGBA `ShaderMaterial`
- State overlay: `THREE.Mesh` with per-vertex RGB `MeshBasicMaterial`, uses `vertexColors: true`
- Province overlay: same pattern as state overlay, golden-angle hue distribution
- Province borders: `THREE.LineSegments` matching state borders pattern
- Burg overlay: `THREE.Points` with `PointsMaterial` + circular sprite texture, two layers (towns=white, capitals=gold). Points offset radially 1.003× to avoid depth-fighting with planet surface
- All fill overlays: `transparent: true, opacity: 0.5, depthTest: true, depthWrite: false`
- Rebuilt on `applyPopulation()` via `renderer.rebuild*()` calls
- Toggled by `draw_*` flags via `renderer.toggle*()` calls

## River Rendering

- Rivers skip sides where both endpoints have adjusted elevation < 0
- Drawn with `THREE.LineSegments`, custom `ShaderMaterial` for premultiplied alpha
- River color matches shallow water near coastlines
