#!/bin/sh
ESBUILD="npx esbuild"
# Standalone engine bundle (generation + rendering, no GUI)
$ESBUILD engine/index.js --bundle --minify --sourcemap --outfile=build/_bundle.engine.js --external:three --external:three/addons/
# Full app bundle (engine + GUI)
$ESBUILD src/main.js --bundle --minify --sourcemap --outfile=build/_bundle.js --external:three --external:three/addons/
