# Agent Conventions

## Server

- Bun server on port 3333 (`bun server.js`)
  - Bundles `src/main.js` on-the-fly (no separate build step)
  - Also bundles `regl/planet-generation.js` on-the-fly at `/build/_bundle.regl.js`
  - External modules (three, three/addons) loaded via CDN importmap
- Three.js version: `http://localhost:3333/`
- regl version: `http://localhost:3333/regl/index.html`

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

- 4 types: `earthlike` (default), `airless`, `barren`, `gasgiant`
- Selected via `planetType` dropdown at top level of lil-gui
- Switching type calls `planet.setPlanetType()` → `generateMesh()` → `rebuildAll()` → `applyClimate()` → `applyPopulation()`
- Planet and Overlays folders hidden when `gasgiant` selected; Climate folder hidden for `gasgiant` and `airless`
- `_planetType` parameter in `planet.js` — `generateMap()` dispatches on a `switch`:

  | Type | Elevation | Plates | Moisture | Rivers | Colormap | Cloud sphere |
  |---|---|---|---|---|---|---|
  | earthlike | `assignRegionElevation()` | 50% ocean | FBM [0.15,1] | Yes | earthlike | no |
  | airless | `generateCraterElevation()` (30–70 craters, bowl+rim+ejecta) | single flat plate | 0 | No | airless (user-colorable) | no |
  | barren | plate-collision + volcano boost or dome constructs via subtype | all continental | 0–0.15 | No | barren (user-colorable) | only when subtype=hostile |
  | gasgiant | zero elevation | single flat plate | 0 | No | earthlike (unused) | no |

### Barren Subtype

- Barren has a `_barrenSubtype` parameter (`'barren'` or `'hostile'`) selectable via a dropdown in the "Barren Type" folder
- `'barren'` subtype: plate-collision + volcano boost (1.5–3× on 40% of plate centers); moisture FBM [0,0.15] + polar ice; biome labels: Depression/Lowland Plain/Volcanic Rise/Highland/Polar Cap
- `'hostile'` subtype: plate-collision + volcanic dome constructs (0.3–0.8 added, spread 2–6 regions); 1.5× plates, all continental, 0 moisture; biome labels: Rift Basin/Sulfurous Plain/Volcanic Dome/Tessera Highland/Mountain; translucent noise cloud sphere created if subtype=hostile
- Subtype change triggers full regeneration (mesh + map + colormap + clouds)

- Non-earthlike types skip river generation entirely (`rebuildRivers` returns early)
- Population is only generated for `earthlike` — `window.applyPopulation` checks `planetType` and clears overlays for other types
- `pickRegion` returns type-and-subtype-specific biome labels (e.g. "Crater Floor", "Sulfurous Plain", "Gas Giant")

### Gas Giant

- Uses `ShaderMaterial` with a procedural GLSL fragment shader implementing horizontal gas bands, noise-based turbulence, and 3-color mixing
- Parameters (scale, turbulence, blur, colorA/B/C, seed) exposed via uniforms; updated live from GUI
- Gas Giant GUI folder (hidden for other types) provides controls: scale, turbulence, blur, colorA/B/C (hex), seed
- Climate sliders are hidden when `gasgiant` is selected
- `applyClimate()`, `rebuildRivers()`, and population generation are all skipped for gasgiant
- Biome label in picker returns "Gas Giant"

### Colormaps

- `colormap.js` exports `getData(type, colorA?, colorB?, colorC?)` returning a 64×64 RGBA `Uint8Array` palette
- `airlessColormap()` and `barrenColormap()` accept 3 hex color strings and blend them across elevation using `lerpColor()`
- `earthlikeColormap()` uses fixed hardcoded values (unchanged)
- Default colors match the previous hardcoded appearance for backward compatibility
- `colormap-texture.js` exports `rebuildColormapTexture(type, colorA?, colorB?, colorC?)` creating a fresh `DataTexture`
- `renderer.updateColormapTexture(type)` swaps the `u_colormap` uniform on `planetMaterial`
- `renderer.updateColormapColors(type, {colorA, colorB, colorC})` regenerates the colormap texture with user colors and swaps it on `planetMaterial`

### Cloud Sphere (barren hostile subtype only)

- `shaders.js` exports `createCloudMaterial(seed)` — generates a 512×256 noise texture via simplex-noise (4 octaves) and wraps it in a `ShaderMaterial`
- Fragment shader scrolls UV.x over time (`u_time` uniform) for slow rotation
- `renderer.rebuildCloudSphere(type, seed, barrenSubtype?)` creates a `THREE.Mesh` with `SphereGeometry(1.008, 48, 24)` and cloud material; created only when type=barren and barrenSubtype=hostile
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

- Saves stored as JSON files in `saves/` directory via server API
- API endpoints: `GET /api/saves` (list), `GET /api/saves/:name` (load), `PUT /api/saves/:name` (save)
- Each file contains all planet parameters (type, seed, regions, plates, jitter, draw mode, climate, overlays, gas giant params, barren subtype, barren color triple, airless color triple, culture count)
- World name input, Saved Worlds dropdown, Save/Load buttons at top level of lil-gui
- `refreshSavedNames()` fetches save list from server
- `doSave()` PUTs current planet state to server
- `doLoad()` GETs a save, applies all settings via planet setters, regenerates mesh, rebuilds rendering, restores colormap colors for barren and airless, and syncs all GUI controllers via `updateAllControllers()`

## River Rendering

- Rivers skip sides where both endpoints have adjusted elevation < 0
- Drawn with `THREE.LineSegments`, custom `ShaderMaterial` for premultiplied alpha
- River color matches shallow water near coastlines
- Skipped entirely for non-earthlike planet types (`rebuildRivers` early-returns)
