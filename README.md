# Planet Generator

Procedural planet generation on a sphere with interactive climate control, culture simulation, and WebGL rendering.

Forked from [Red Blob Games' 1843-planet-generation](https://www.redblobgames.com/x/1843-planet-generation/) experiment. Extended with culture/state population generation, climate sliders, and an interactive SPA.

## Live Demo

https://paladin10.info/world/

## Features

- **Procedural terrain**: tectonic plates, elevation, moisture, temperature, rivers on a Fibonacci sphere mesh
- **Interactive controls**: seed, region count, plate count, jitter, rotation
- **Climate sliders**: temperature (multiplicative on land), rainfall (moisture shift), water level (coastline shift) — all update in real-time
- **Population generation**: multi-source Dijkstra culture expansion, state formation, burg/settlement placement, province borders
- **Culture overlay**: flat-color Voronoi regions colored by culture; toggle on/off
- **State borders**: white border lines between regions belonging to different states; toggle on/off
- **Region info panel**: click any point on the planet to see biome, elevation, moisture, temperature, plate, culture, state, and settlement
- **Click-drag rotation**: mouse and touch support
- **Draw modes**: quads (shaded) and flat (centroid) rendering
- **Plate visualization**: vectors and boundaries toggleable

## Architecture

```
index.html          — SPA layout, controls, picking UI
planet-generation.js — Main module: mesh gen, map gen, rendering, climate, picking, overlay
sphere-mesh.js      — Fibonacci sphere + Delaunay triangulation + jitter
world-population.js — Culture/state/burg/province generation via Dijkstra
colormap.js         — 64×64 RGBA biome lookup texture (elevation × moisture)
server.js           — Bun.js static-file server (port 3333)
build/_bundle.js    — esbuild output (planet-generation.js + all deps)
```

## Dependencies

- `regl@1.7.0` — WebGL (pinned to v1.7.0; v2.x breaks texture/framebuffer)
- `@redblobgames/dual-mesh` — sphere mesh (Delaunay + Voronoi)
- `@redblobgames/prng` — seeded PRNG
- `gl-matrix` — matrix/vector math
- `delaunator` — Delaunay triangulation
- `simplex-noise` — 3D noise
- `flatqueue` — priority queue (Dijkstra)
- `esbuild` — bundler

## Setup

```bash
npm install
```

## Build

```bash
node_modules/.bin/esbuild planet-generation.js --bundle --sourcemap --outfile=build/_bundle.js
```

## Run

Static file server on port 3333:

```bash
bun server.js
```

### Production (systemd)

```bash
systemctl --user start world-engine
```

Nginx reverse-proxies `/world/` at paladin10.info to `127.0.0.1:3333`.

## Controls

| Control | Effect |
|---|---|
| Seed | PRNG seed for deterministic generation |
| Regions | Number of Voronoi regions (100–100,000) |
| Plates | Number of tectonic plates (5–100) |
| Jitter | Random perturbation of sphere points |
| Rotation | Camera rotation |
| Temperature | Multiplicative biome shift on land only |
| Rainfall | Additive moisture shift |
| Water Level | Elevation offset raising/lowering sea level |
| Cultures | Number of cultures for population gen (2–40) |
| Apply Changes | Re-run population/culture simulation |
| Culture overlay | Color Voronoi cells by culture |
| State borders | White lines between different states |
| New Planet | Increment seed + full regeneration + population |
| Plate vectors | Show plate movement arrows |
| Plate boundaries | Highlight plate edges |
| Draw Mode | Quads (shaded) or Flat (centroid) |
| Click planet | Show region info panel |

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
- Overlay geometry is rebuilt only when population changes (`_overlayDirty` flag)
- regl v1.7.0 only — v2.x has breaking API differences

## License

Apache-2.0 (same as upstream)
