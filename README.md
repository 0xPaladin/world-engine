# Planet Generator

Procedural planet generation on a sphere with interactive climate control, culture simulation, and WebGL rendering.

Forked from [Red Blob Games' 1843-planet-generation](https://www.redblobgames.com/x/1843-planet-generation/) experiment. Extended with culture/state population generation, climate sliders from [Azgaar's Fantasy Map Generator](https://github.com/Azgaar/Fantasy-Map-Generator). All part of an interactive SPA.

**Note:** Originally used regl for rendering; now fully migrated to Three.js. The standalone `engine/` library provides both generation and Three.js-based rendering with no GUI dependencies. All shared defaults live in `engine/core/defaults.js` for bundled self-containment.

## Features

- **Planet types**: switch between Earth-like, airless (cratered), barren (desert world with barren/hostile subtype), gas giant (procedural shader), and star (procedural sun with spectral-color surface and camera-facing glow) — each with its own generation pipeline and colormap
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
| Star       | Procedural (3D value noise fBm) | Uniform 0.5 | Single flat | 0 | No | No | no |

Barren has a **subtype** dropdown (barren/hostile) accessible via the "Barren Type" folder:
- **barren subtype**: volcano-boosted elevation (1.5–3× on 40% of plate centers), trace moisture with polar ice, red/orange palette
- **hostile subtype**: volcanic dome elevation constructs, zero moisture, yellow/orange biomes, translucent noise cloud sphere

Changing the planet type triggers a full regeneration: new mesh, map, colormap texture, and rendering pipeline. Non-Earth-like types skip river generation, population simulation, and all culture/state/burg overlays. Gas Giant uses a procedural fragment shader (bands + noise) instead of a mesh-based colormap; the Planet, Climate, and Overlays folders are hidden when selected. Star uses a 3D value noise fBm shader (from sangillee.com) on the sphere surface with a spectral-color-driven glow aura — no colormap, rays, flares, or climate controls.

## Architecture

### Engine (standalone library — no GUI dependencies)

```
engine/
  index.js              — Public API entry point
  lib/
    redblob.lib.js      — Bundled vendor deps (simplex-noise, flatqueue, gl-matrix, delaunator, @redblobgames/dual-mesh)
  core/
    defaults.js         → All shared default values (seed, N, P, jitter, colors, spectral, sun params)
    planet.js           → mesh gen, map gen, plates, elevation, rivers, climate
    sphere-mesh.js      → Fibonacci sphere mesh, Delaunay, Voronoi
    world-population.js → culture/state/burg/province Dijkstra generation
    colormap.js         → 64×64 RGBA biome colormap
    aleaPRNG-1.1.js     → Alea PRNG (seeded)
  render/
    renderer.js         → Three.js scene, camera, materials, draw pipeline, overlay
    shaders.js          → ShaderMaterial: colormap surface, lines, overlays, gas giant, cloud
    sun-shaders.js      → Sun/star ShaderMaterials & geometry generators (sphere + glow only)
    colormap-texture.js → Three.js DataTexture from colormap.js
```

Use standalone: `import { generateMesh, initRenderer, render } from './engine/index.js'`

A pre-built ESM bundle is also available:
```js
import * as WorldEngine from './dist/world-engine.core.min.js'
```

The bundle exposes all 130 exports from the engine, including planet generation functions (`generateMesh`, `generateMap`, `generatePopulation`), rendering functions (`initRenderer`, `render`), shader/material factories, and all shared defaults from `defaults.js` (`DEFAULT_SEED`, `SPECTRAL_COLORS`, `SUN_DEFAULTS`, etc.). `three` and `three/addons/` are kept external for CDN importmap loading.

### App (UI layer)

```
src/
  main.js               ← Entry point, window.* API, Three.js scene init, lil-gui controls, save/load
```

`src/main.js` imports from `engine/` — the only file with GUI dependencies.

### Shared modules (legacy CJS, for reference)

```
sphere-mesh.js          → Fibonacci sphere + Delaunay (legacy CJS)
world-population.js     → Population generation (legacy CJS)
colormap.js             → 64×64 RGBA lookup texture (legacy CJS)
server.js               → Bun static-file server (port 3333)
```

## Dependencies

- `three` — WebGL renderer (Three.js) — loaded via CDN importmap
- `lil-gui` — GUI controls — loaded via CDN importmap
- `engine/lib/redblob.lib.js` — bundled vendor deps: simplex-noise, flatqueue, gl-matrix, delaunator, @redblobgames/dual-mesh
- `aleaPRNG-1.1.js` — bundled Alea PRNG
- `esbuild` — bundler (dev dependency)

## Setup

```bash
npm install
```

## Build

Engine bundle (standalone, no GUI) — two variants:
```bash
# Full engine with all 130 exports
npx esbuild engine/index.js --bundle --minify --sourcemap --format=esm --outfile=dist/world-engine.core.min.js --external:three --external:three/addons/
# Legacy alias
npx esbuild engine/index.js --bundle --minify --sourcemap --outfile=dist/_bundle.engine.js --external:three --external:three/addons/
```

Full app bundle (engine + GUI):
```bash
npx esbuild src/main.js --bundle --minify --sourcemap --outfile=dist/_bundle.js --external:three --external:three/addons/ --external:lil-gui
```

Or use the build script:
```bash
bash build.sh
```

## Run

Static file server on port 3333:
```bash
bun server.js
```

Then open `http://localhost:3333/`

## Controls

| Control            | Effect                                          |
| ------------------ | ----------------------------------------------- |
| World Name         | Name for saving the current world               |
| Saved Worlds       | Dropdown of previously saved worlds             |
| Save World         | Persist all settings to server                  |
| Load World         | Restore a saved world                           |
| Planet Type        | Earth-like, Airless, Barren, Gas Giant, Star    |
| Seed               | PRNG seed for deterministic generation          |
| New Planet         | Increment seed + full regeneration + population |
| Regions            | Number of Voronoi regions (100–100,000)         |
| Plates             | Number of tectonic plates (5–100)               |
| Jitter             | Random perturbation of sphere points            |
| Temperature        | Multiplicative biome shift on land only         |
| Rainfall           | Additive moisture shift                         |
| Water Level        | Elevation offset raising/lowering sea level     |
| Barren Subtype     | Barren or Hostile (terrain + biome variant) ²   |
| Barren Colors A/B/C | Three user-colorable elevation stops (low/mid/high) ² |
| Airless Colors A/B/C | Three user-colorable elevation stops (low/mid/high) ³ |
| Spectral Type      | Harvard spectral class (O/B/A/F/G/K/M/D) — sets color + brightness/glow default ⁴ |
| Brightness         | Star surface brightness multiplier ⁴            |
| Noise Scale        | Star surface noise frequency ⁴                  |
| Glow Power         | Star edge glow falloff exponent ⁴               |
| Fresnel Power      | Star Fresnel edge brightness exponent ⁴         |
| Glow Radius        | Star aura size ⁴                                |
| Glow Brightness    | Star aura intensity ⁴                           |
| Cultures           | Number of cultures for population gen (2–40) ¹  |
| Apply Changes      | Re-run population/culture simulation ¹          |
| Culture overlay    | Color Voronoi cells by culture ¹                |
| State borders      | White lines between different states ¹          |
| State overlay      | Color regions by state ¹                        |
| Province overlay   | Color regions by province ¹                     |
| Province borders   | White lines between different provinces ¹       |
| Burg overlay       | Dots for towns and capitals ¹                   |
| Plate vectors      | Show plate movement arrows                      |
| Plate boundaries   | Highlight plate edges                           |
| Draw Mode          | Quads (shaded) or Flat (centroid)               |
| Click planet       | Show region info panel                          |

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

- Bundled deps imported from `engine/lib/redblob.lib.js` (e.g. `import { SimplexNoise, FlatQueue, vec3 } from '../lib/redblob.lib.js'`)
- Temperature uses multiplicative scaling on land only (`e / (1+temp*3)` or `e * (1+abs(temp)*2)`) to avoid flooding
- Water level subtracts from raw elevation before temperature scaling; affects coastline, rivers, and biome detection
- Rivers skip sides where both endpoints have adjusted elevation < 0 (fully submerged)
- Sphere mesh has no map edges — Dijkstra expansion wraps seamlessly across all longitudes
- Mesh jitter caches are cleared on each `makeSphere()` call
- Rendering uses `ShaderMaterial` with `dFdx`/`dFdy` derivative-based normals and 2D colormap lookup
- Climate updates set `uv.needsUpdate = true` on the planet geometry (no mesh rebuild needed)
- Picking uses `Raycaster` for ray-sphere intersection + brute-force nearest-region lookup
- All shared default values are defined in `engine/core/defaults.js` — imported by planet.js, colormap.js, renderer.js, sun-shaders.js, and main.js
- Sun sphere uses 3D value noise fBm (6 octaves, rotation per octave) from [sangillee.com](https://sangillee.com/2024-06-29-create-realistic-sun-with-shaders/) — surface color derived from spectral type, no rays or flares

## License

Apache-2.0 (same as upstream)
