# Planet Generator

Procedural planet generation on a sphere with interactive climate control, culture simulation, and WebGL rendering.

Forked from [Red Blob Games' 1843-planet-generation](https://www.redblobgames.com/x/1843-planet-generation/) experiment. Extended with culture/state population generation, climate sliders from [Azgaar's Fantasy Map Generator](https://github.com/Azgaar/Fantasy-Map-Generator). All part of an interactive SPA.

## Features

- **Planet types**: switch between Earth-like, airless (cratered), barren (desert world with barren/hostile subtype), gas giant (procedural shader), and star (procedural sun with rays/flares/glow) — each with its own generation pipeline and colormap
- **Procedural terrain**: tectonic plates, elevation, moisture, temperature, rivers on a Fibonacci sphere mesh
- **Interactive controls**: planet type, seed, region count, plate count, jitter, planet type
- **Save/Load**: persist all world parameters to `saves/` directory via server API; name, save, and load worlds
- **Climate sliders**: temperature (multiplicative on land only), rainfall (moisture shift), water level (coastline shift) — all update in real-time
- **Population generation**: multi-source Dijkstra culture expansion, state formation, burg/settlement placement, province borders (Earth-like only)
- **Culture overlay**: flat-color Voronoi regions colored by culture; toggle on/off
- **State overlay**: flat-color regions colored by state; toggle on/off
- **State borders**: white border lines between different states; toggle on/off
- **Province overlay**: flat-color regions colored by province; toggle on/off
- **Province borders**: white border lines between different provinces; toggle on/off
- **Burg overlay**: settlement dots (towns = white, capitals = gold) with circular sprite texture; toggle on/off
- **Region info panel**: click any point on the planet to see biome, elevation, moisture, temperature, plate, culture, state, and settlement
- **Click-drag rotation**: mouse and touch (OrbitControls); no slider needed
- **Draw modes**: quads (shaded) and flat (centroid) rendering
- **Plate visualization**: vectors and boundaries toggleable

## Planet Types

| Type       | Colormap         | Elevation model       | Plates | Moisture | Rivers | Population | Cloud sphere |
| ---------- | ---------------- | --------------------- | ------ | -------- | ------ | ---------- | ------------ |
| Earth-like | Green/blue       | Plate collision + FBM | Yes    | 0.15–1.0 | Yes    | Yes        | no |
| Airless    | Grayscale (user-colorable) | Craters + FBM baseline | No    | 0        | No     | No         | no |
| Barren     | Red/orange (user-colorable) | Plate + volcano boost or volcanic domes (per subtype) | All continental | 0–0.15 | No | No | only when subtype=hostile |
| Gas Giant  | Procedural       | Zero elevation, bands + noise | — | 0 | No | No | no |
| Star       | Procedural (4D simplex FBM) | Uniform 0.5 | Single flat | 0 | No | No | no |

Barren has a **subtype** dropdown (barren/hostile) accessible via the "Barren Type" folder:
- **barren subtype**: volcano-boosted elevation (1.5–3× on 40% of plate centers), trace moisture with polar ice, red/orange palette
- **hostile subtype**: volcanic dome elevation constructs, zero moisture, yellow/orange biomes, translucent noise cloud sphere

Changing the planet type triggers a full regeneration: new mesh, map, colormap texture, and rendering pipeline. Non-Earth-like types skip river generation, population simulation, and all culture/state/burg overlays. Gas Giant uses a procedural fragment shader (bands + noise) instead of a mesh-based colormap; the Planet, Climate, and Overlays folders are hidden when selected. Star uses a fully procedural 4D simplex FBM shader with animated rays, flares, and glow — no colormap or climate controls.

## Architecture

### Three.js version (active)
```
src/main.js          — Entry point, window.* API, Three.js scene init, lil-gui controls, save/load via localforage
src/planet.js        — Simulation: mesh gen, map gen, plates, elevation, rivers, climate, QuadGeometry
src/renderer.js      — Three.js scene, camera, materials, draw pipeline, overlay, cloud sphere
src/shaders.js       — Three.js ShaderMaterial: colormap surface, lines, overlays, cloud shader
src/sun-shaders.js   — Star/sun ShaderMaterials and geometry generators (sphere, rays, flares, glow)
colormap-texture.js  — Three.js DataTexture wrapper for per-type biome lookup
index.html           — SPA layout, controls, canvas (OrbitControls)
```

### regl version (preserved)
```
regl/planet-generation.js — Original regl-based code (unchanged)
regl/index.html           — Original HTML with manual drag handlers
```

### Shared
```
sphere-mesh.js      — Fibonacci sphere + Delaunay triangulation + jitter
world-population.js — Culture/state/burg/province generation via Dijkstra
colormap.js         — 64×64 RGBA lookup texture per planet type (elevation × moisture)
server.js           — Bun.js static-file server (port 3333)
```

## Dependencies

- `three` — WebGL (Three.js renderer)
- `regl@1.7.0` — WebGL (preserved regl version, pinned)
- `@redblobgames/dual-mesh` — sphere mesh (Delaunay + Voronoi)
- `aleaPRNG-1.1.js` — bundled Alea PRNG (replaces `@redblobgames/prng` in Three.js version)
- `gl-matrix` — matrix/vector math
- `delaunator` — Delaunay triangulation
- `simplex-noise` — 3D noise
- `flatqueue` — priority queue (Dijkstra)
- `localforage` — browser local storage abstraction (save/load)
- `esbuild` — bundler

## Setup

```bash
npm install
```

## Build

Three.js (default):
```bash
node_modules/.bin/esbuild src/main.js --bundle --sourcemap --format=esm --outfile=build/_bundle.js --external:three --external:three/addons/* --external:localforage
```

regl (preserved):
```bash
node_modules/.bin/esbuild regl/planet-generation.js --bundle --sourcemap --outfile=build/_bundle.regl.js
```

## Run

Static file server on port 3333:

```bash
bun server.js
```

- Three.js version: `http://localhost:3333/`
- regl version: `http://localhost:3333/regl/index.html`

## Controls

| Control          | Effect                                          |
| ---------------- | ----------------------------------------------- |
| World Name       | Name for saving the current world               |
| Saved Worlds     | Dropdown of previously saved worlds             |
| Save World       | Persist all settings to localforage             |
| Load World       | Restore a saved world                           |
| Planet Type      | Earth-like, Airless, Barren, Gas Giant, Star    |
| Seed             | PRNG seed for deterministic generation          |
| New Planet       | Increment seed + full regeneration + population |
| Regions          | Number of Voronoi regions (100–100,000)         |
| Plates           | Number of tectonic plates (5–100)               |
| Jitter           | Random perturbation of sphere points            |
| Temperature      | Multiplicative biome shift on land only         |
| Rainfall         | Additive moisture shift                         |
| Water Level      | Elevation offset raising/lowering sea level     |
| Barren Subtype   | Barren or Hostile (terrain + biome variant) ²   |
| Barren Colors A/B/C | Three user-colorable elevation stops (low/mid/high) ² |
| Airless Colors A/B/C | Three user-colorable elevation stops (low/mid/high) ³ |
| Spectral Type    | Harvard spectral class (O/B/A/F/G/K/M/D) ⁴      |
| Brightness       | Star brightness multiplier ⁴                     |
| Noise Scale      | Star surface noise frequency ⁴                   |
| Noise Contrast   | Star surface noise contrast ⁴                    |
| Tint             | Star surface tint multiplier ⁴                   |
| Fresnel          | Star edge glow influence ⁴                       |
| Glow Radius      | Star aura size ⁴                                 |
| Glow Brightness  | Star aura intensity ⁴                            |
| Ray Length       | Star ray length ⁴                                |
| Ray Width        | Star ray width ⁴                                 |
| Rays Opacity     | Star ray transparency ⁴                          |
| Flare Amp        | Star flare amplitude ⁴                           |
| Flares Opacity   | Star flare transparency ⁴                        |
| Cultures         | Number of cultures for population gen (2–40) ¹  |
| Apply Changes    | Re-run population/culture simulation ¹          |
| Culture overlay  | Color Voronoi cells by culture ¹                |
| State borders    | White lines between different states ¹          |
| State overlay    | Color regions by state ¹                        |
| Province overlay | Color regions by province ¹                     |
| Province borders | White lines between different provinces ¹       |
| Burg overlay     | Dots for towns and capitals ¹                   |
| Plate vectors    | Show plate movement arrows                      |
| Plate boundaries | Highlight plate edges                           |
| Draw Mode        | Quads (shaded) or Flat (centroid)               |
| Click planet     | Show region info panel                          |

¹ Population/culture/state/province/burg overlays — Earth-like only
² Barren type folder — visible only when Planet Type is Barren
³ Airless Colors folder — visible only when Planet Type is Airless
⁴ Star folder — visible only when Planet Type is Star

## Population Generation

Adapted from Azgaar's Fantasy Map Generator concepts:

1. **Cultures**: seeded random starting regions → multi-source Dijkstra expansion (competition for all cells simultaneously)
2. **Burgs**: highest-population region per culture becomes a settlement
3. **States**: Dijkstra expansion with high cost for crossing into different-culture cells
4. **Provinces**: lowest-population burg within a state claims all state cells via nearest-neighbor

Names are generated from seeded syllable templates (placeholder for full Azgaar name engine).

## Key Technical Notes

- ESM interop: `flatqueue` requires `{default: FlatQueue}` import syntax
- Temperature uses multiplicative scaling on land only (`e / (1+temp*3)` or `e * (1+abs(temp)*2)`) to avoid flooding
- Water level subtracts from raw elevation before temperature scaling; affects coastline, rivers, and biome detection
- Rivers skip sides where both endpoints have adjusted elevation < 0 (fully submerged)
- Sphere mesh has no map edges — Dijkstra expansion wraps seamlessly across all longitudes
- Mesh jitter caches are cleared on each `makeSphere()` call
- Three.js version uses `ShaderMaterial` with `dFdx`/`dFdy` derivative-based normals and 2D colormap lookup
- Climate updates set `uv.needsUpdate = true` on the planet geometry (no mesh rebuild needed)
- Picking uses `Raycaster` for ray-sphere intersection + brute-force nearest-region lookup
- regl v1.7.0 preserved in `regl/` directory — v2.x has breaking API differences
- State Dijkstra uses `aleaPRNG` for seeded random generation (replaced LCG in `world-population.js` and `@redblobgames/prng` in `src/planet.js`)
- State expansion cost clamps to minimum 1 to prevent negative costs from burg discount (`ec -= 20`) cascading via priority queue
- Culture center placement retries with progressively smaller minDist when insufficient well-spaced land cells exist
- Burg placement uses spatial grid (`cellKeyFromR` + `Map`) for O(n) proximity checks instead of O(n²)
- All overlays rebuilt on `applyPopulation()` via `renderer.rebuild*()` calls; visibility toggled via `renderer.toggle*()` calls
- Burg overlay points are offset radially 1.003× to avoid depth-fighting with the planet surface

## License

Apache-2.0 (same as upstream)
