#!/bin/sh
node_modules/.bin/esbuild planet-generation.js --bundle --minify --sourcemap --outfile=build/_bundle.js
