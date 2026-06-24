#!/bin/sh
ESBUILD="npx esbuild"
mkdir -p dist
# Standalone engine bundle (generation + rendering, no GUI)
$ESBUILD engine/index.js --bundle --minify --sourcemap --outfile=dist/_bundle.engine.js --external:three --external:three/addons/
# Full app bundle (engine + GUI)
$ESBUILD src/main.js --bundle --minify --sourcemap --outfile=dist/_bundle.js --external:three --external:three/addons/
