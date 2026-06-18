# Agent Conventions

## Build

Three.js is loaded via import map in `index.html` (CDN), so esbuild must externalize it.

### Linux
```bash
# Build Three.js bundle (default)
node_modules/.bin/esbuild src/main.js --bundle --sourcemap --format=esm --outfile=build/_bundle.js --external:three --external:three/addons/*

# Build regl bundle (preserved)
node_modules/.bin/esbuild regl/planet-generation.js --bundle --sourcemap --outfile=build/_bundle.regl.js
```

### Windows
```powershell
# Build Three.js bundle (default)
& "node_modules\@esbuild\win32-x64\esbuild.exe" src/main.js --bundle --sourcemap --format=esm --outfile=build/_bundle.js --external:three --external:three/addons/*

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
- `src/main.js` — entry point, window.* API, Three.js scene init, lil-gui controls, save/load via localforage
- `src/planet.js` — simulation code: mesh gen, map gen, plates, elevation, rivers, climate, QuadGeometry
- `src/renderer.js` — Three.js scene, camera, materials, draw pipeline, overlay
- `src/shaders.js` — Three.js ShaderMaterial: colormap surface, lines, overlays, gas giant
- `colormap-texture.js` — Three.js DataTexture from colormap.js

### regl version (preserved)
- `regl/planet-generation.js` — original regl-based code (unchanged)
- `regl/index.html` — original HTML with drag handlers
- `build/_bundle.regl.js` — esbuild regl output

## Planet Types

- 5 types: `earthlike` (default), `airless`, `barren`, `hostile`, `gasgiant`
- Selected via `planetType` dropdown at top level of lil-gui
- Switching type calls `planet.setPlanetType()` → `generateMesh()` → `rebuildAll()` → `applyClimate()` → `applyPopulation()`
- Planet and Overlays folders hidden when `gasgiant` selected; Climate folder hidden for `gasgiant` and `airless`
- `_planetType` parameter in `planet.js` — `generateMap()` dispatches on a `switch`:

  | Type | Elevation | Plates | Moisture | Rivers | Colormap | Cloud sphere |
  |---|---|---|---|---|---|---|
  | earthlike | `assignRegionElevation()` | 50% ocean | FBM [0.15,1] | Yes | green/blue | no |
  | airless | `generateCraterElevation()` (30–70 craters, bowl+rim+ejecta) | single flat plate | 0 | No | grayscale | no |
  | barren | plate-collision + volcano boost (1.5–3× on 40% of plate centers) | all continental | FBM [0,0.15] + polar ice | No | red/orange | no |
  | hostile | plate-collision + volcanic dome constructs (0.3–0.8 added, spread 2–6 regions) | 1.5× plates, all continental | 0 | No | yellow/orange | translucent noise sphere |
  | gasgiant | zero elevation | single flat plate | 0 | No | earthlike (unused) | no |

- Non-earthlike types skip river generation entirely (`rebuildRivers` returns early)
- Population is only generated for `earthlike` — `window.applyPopulation` checks `planetType` and clears overlays for other types
- `pickRegion` returns type-specific biome labels (e.g. "Crater Floor", "Sulfurous Plain", "Gas Giant")

### Gas Giant

- Uses `ShaderMaterial` with a procedural GLSL fragment shader implementing horizontal gas bands, noise-based turbulence, and 3-color mixing
- Parameters (scale, turbulence, blur, colorA/B/C, seed) exposed via uniforms; updated live from GUI
- Gas Giant GUI folder (hidden for other types) provides controls: scale, turbulence, blur, colorA/B/C (hex), seed
- Climate sliders are hidden when `gasgiant` is selected
- `applyClimate()`, `rebuildRivers()`, and population generation are all skipped for gasgiant
- Biome label in picker returns "Gas Giant"

### Colormaps

- `colormap.js` exports `getData(type)` returning a 64×64 RGBA `Uint8Array` palette
- `colormap-texture.js` exports `rebuildColormapTexture(type)` creating a fresh `DataTexture`
- `renderer.updateColormapTexture(type)` swaps the `u_colormap` uniform on `planetMaterial`

### Cloud Sphere (hostile only)

- `shaders.js` exports `createCloudMaterial(seed)` — generates a 512×256 noise texture via simplex-noise (4 octaves) and wraps it in a `ShaderMaterial`
- Fragment shader scrolls UV.x over time (`u_time` uniform) for slow rotation
- `renderer.rebuildCloudSphere(type, seed)` creates a `THREE.Mesh` with `SphereGeometry(1.008, 48, 24)` and cloud material; removed for non-hostile types
- `u_time` updated each frame in `render()`

## Climate System

- Temperature slider: multiplicative on land only (`e / (1+temp*3)` for warming, `e * (1+abs(temp)*2)` for cooling)
- Rainfall slider: additive moisture offset (no-op for types with zero moisture)
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
- Population only generated for `earthlike` type; `window._population` is `null` for all other types

## Picking

`window.pickRegion(ndcX, ndcY)` returns `{region, biome, temperature, rawElevation, moisture, plate, plateType}`. Biome label is type-aware (see Planet Types section). Culture/state/burg lookup from `window._population` by region index. Uses Three.js `Raycaster` for ray-sphere intersection.

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
- Only rendered for `earthlike` type; all overlays cleared when switching to another type

## Save / Load

- `localforage` used for persistent browser storage of world settings
- Each save stored under key `world_<name>` containing all planet parameters (type, seed, regions, plates, jitter, draw mode, climate, overlays, gas giant params, culture count)
- World name input, Saved Worlds dropdown, Save/Load buttons at top level of lil-gui
- `refreshSavedNames()` queries localforage keys and updates dropdown options
- `doSave()` serializes current planet state to localforage
- `doLoad()` reads a save, applies all settings via planet setters, regenerates mesh, rebuilds rendering, and syncs all GUI controllers via `updateAllControllers()`

## River Rendering

- Rivers skip sides where both endpoints have adjusted elevation < 0
- Drawn with `THREE.LineSegments`, custom `ShaderMaterial` for premultiplied alpha
- River color matches shallow water near coastlines
- Skipped entirely for non-earthlike planet types (`rebuildRivers` early-returns)
