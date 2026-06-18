# Agent Conventions

## Build & Verify

```bash
# Build bundle
node_modules/.bin/esbuild planet-generation.js --bundle --sourcemap --outfile=build/_bundle.js

# Restart server after build
sudo systemctl restart world-engine

# Check service status
systemctl status world-engine --no-pager -l

# Check logs
journalctl -u world-engine -n 50 --no-pager
```

## Server

- Static file server on port 3333 (`bun server.js`)
- Reverse-proxied by nginx at `/world/` on paladin10.info
- Service file: `/etc/systemd/system/world-engine.service`
- Systemd password for sudo: `Renovator-Canister0-Lyricism-Dust-Spirited`

## Code Style

- No comments in source code
- ES modules; commonjs interop via esbuild bundling
- External ESM requires explicit `.default` import (e.g. `{default: FlatQueue}`)
- Use `var` for module-level state (legacy JS, no transpiler)
- Expose public API functions on `window` object
- Regl pinned to v1.7.0 — do not bump to v2.x
- No TypeScript, no linting config
- Biome lookups via `colormap.js` RGBA texture (elevation × moisture)

## Files

- `planet-generation.js` — main entry, mesh gen, map gen, rendering, climate, picking, overlay
- `sphere-mesh.js` — Fibonacci sphere mesh, Delaunay, Voronoi
- `world-population.js` — culture/state/burg/province Dijkstra generation
- `colormap.js` — 64×64 RGBA biome colormap
- `server.js` — Bun static file server
- `index.html` — SPA layout, controls, canvas, click handlers
- `build/_bundle.js` — esbuild output (gitignored)

## Climate System

- Temperature slider: multiplicative on land only (`e / (1+temp*3)` for warming, `e * (1+abs(temp)*2)` for cooling)
- Rainfall slider: additive moisture offset
- Water level: subtracts from raw elevation before temperature scaling
- Biome detection: `applyClimate(mesh, map)` updates visual; `applyPopulation()` re-runs culture sim

## Population Data Model

```js
window._population = {
  cultures: [{i, name, color, seed}],
  states: [{i, name, culture, seed}],
  burgs: [{i, name, region, culture, state, seed}],
  provinces: [{i, name, state, seed}],
  cellCulture: Int32Array(numRegions),  // culture index per region (-1 = none)
  cellState: Int32Array(numRegions),    // state id per region (0 = none)
  cellBurg: Int32Array(numRegions),     // burg index per region (-1 = none)
}
```

## Picking

`window.pickRegion(ndcX, ndcY)` returns `{region, biome, temperature, rawElevation, moisture, plate, plateType}`. Culture/state/burg lookup from `window._population` by region index.

## Overlay Rendering

- Culture overlay: `renderFlatTriangles` with per-vertex RGB, stored in `_overlayGeom`
- State borders: `renderLines` with RGBA, stored in `_stateLineGeom`
- Rebuilt on `applyPopulation()` via `buildOverlayGeometry(mesh, population)`
- Toggled by `draw_cultureOverlay` / `draw_stateBorders` flags

## River Rendering

- Rivers skip sides where both endpoints have adjusted elevation < 0
- Drawn with `GL_LINES`, alpha transparency for variable width effect
- River color matches shallow water near coastlines
