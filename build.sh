#!/bin/sh
# Three.js build
node_modules/.bin/esbuild src/main.js --bundle --minify --sourcemap --outfile=build/_bundle.js
# regl build (preserved original)
node_modules/.bin/esbuild regl/planet-generation.js --bundle --minify --sourcemap --outfile=build/_bundle.regl.js
