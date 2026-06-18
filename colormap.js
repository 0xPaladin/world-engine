'use strict';

exports.width = 64;
exports.height = 64;

function earthlikeColormap() {
    const pixels = new Uint8Array(exports.width * exports.height * 4);

    for (var y = 0, p = 0; y < exports.height; y++) {
        for (let x = 0; x < exports.width; x++) {
            let e = 2 * x / exports.width - 1,
                m = y / exports.height;

            let r, g, b;

            if (x === exports.width / 2 - 1) {
                r = 48;
                g = 120;
                b = 160;
            } else
                if (x === exports.width / 2 - 2) {
                    r = 48;
                    g = 100;
                    b = 150;
                } else if (x === exports.width / 2 - 3) {
                    r = 48;
                    g = 80;
                    b = 140;
                } else
                    if (e < -0.135) {
                        r = 41.5;
                        g = 55.3;
                        b = 139;
                    } else if (e < 0.0) {
                        r = 48 + 48 * e;
                        g = 64 + 64 * e;
                        b = 127 - 12 * e;
                    } else {
                        m = m * (1 - e);

                        r = 210 - 100 * m;
                        g = 185 - 45 * m;
                        b = 139 - 45 * m;
                        r = 255 * e + r * (1 - e),
                            g = 255 * e + g * (1 - e),
                            b = 255 * e + b * (1 - e);
                    }

            pixels[p++] = r;
            pixels[p++] = g;
            pixels[p++] = b;
            pixels[p++] = 255;
        }
    }
    return pixels;
}

function airlessColormap() {
    const pixels = new Uint8Array(exports.width * exports.height * 4);
    for (var y = 0, p = 0; y < exports.height; y++) {
        for (let x = 0; x < exports.width; x++) {
            let e = 2 * x / exports.width - 1;
            let gray;
            if (e < -0.5) {
                gray = 55 + 30 * (e + 1) / 0.5;
            } else if (e < -0.2) {
                gray = 85 + 25 * (e + 0.5) / 0.3;
            } else if (e < 0.0) {
                gray = 110 + 30 * (e + 0.2) / 0.2;
            } else if (e < 0.2) {
                gray = 140 + 40 * e / 0.2;
            } else if (e < 0.45) {
                gray = 180 + 30 * (e - 0.2) / 0.25;
            } else {
                gray = 210 + 35 * (e - 0.45) / 0.55;
            }
            gray = Math.min(255, Math.max(0, Math.round(gray)));
            pixels[p++] = gray;
            pixels[p++] = gray;
            pixels[p++] = gray;
            pixels[p++] = 255;
        }
    }
    return pixels;
}

function barrenColormap() {
    const pixels = new Uint8Array(exports.width * exports.height * 4);
    for (var y = 0, p = 0; y < exports.height; y++) {
        for (let x = 0; x < exports.width; x++) {
            let e = 2 * x / exports.width - 1;

            let r, g, b;
            if (e < -0.4) {
                let t = (e + 1) / 0.6;
                r = 50 + 70 * t;
                g = 20 + 35 * t;
                b = 8 + 15 * t;
            } else if (e < 0.0) {
                let t = (e + 0.4) / 0.4;
                r = 120 + 50 * t;
                g = 55 + 30 * t;
                b = 23 + 12 * t;
            } else if (e < 0.3) {
                let t = e / 0.3;
                r = 170 + 45 * t;
                g = 85 + 45 * t;
                b = 35 + 15 * t;
            } else if (e < 0.6) {
                let t = (e - 0.3) / 0.3;
                r = 215 + 20 * t;
                g = 130 + 40 * t;
                b = 50 + 30 * t;
            } else {
                let t = (e - 0.6) / 0.4;
                r = 235 + 15 * t;
                g = 170 + 60 * t;
                b = 80 + 150 * t;
            }

            pixels[p++] = Math.min(255, Math.max(0, Math.round(r)));
            pixels[p++] = Math.min(255, Math.max(0, Math.round(g)));
            pixels[p++] = Math.min(255, Math.max(0, Math.round(b)));
            pixels[p++] = 255;
        }
    }
    return pixels;
}

function hostileColormap() {
    const pixels = new Uint8Array(exports.width * exports.height * 4);
    for (var y = 0, p = 0; y < exports.height; y++) {
        for (let x = 0; x < exports.width; x++) {
            let e = 2 * x / exports.width - 1;

            let r, g, b;
            if (e < -0.4) {
                let t = (e + 1) / 0.6;
                r = 45 + 60 * t;
                g = 25 + 40 * t;
                b = 10 + 15 * t;
            } else if (e < 0.0) {
                let t = (e + 0.4) / 0.4;
                r = 105 + 65 * t;
                g = 65 + 45 * t;
                b = 25 + 15 * t;
            } else if (e < 0.3) {
                let t = e / 0.3;
                r = 170 + 50 * t;
                g = 110 + 55 * t;
                b = 40 + 25 * t;
            } else if (e < 0.6) {
                let t = (e - 0.3) / 0.3;
                r = 220 + 20 * t;
                g = 165 + 35 * t;
                b = 65 + 45 * t;
            } else {
                let t = (e - 0.6) / 0.4;
                r = 240 + 15 * t;
                g = 200 + 40 * t;
                b = 110 + 100 * t;
            }

            pixels[p++] = Math.min(255, Math.max(0, Math.round(r)));
            pixels[p++] = Math.min(255, Math.max(0, Math.round(g)));
            pixels[p++] = Math.min(255, Math.max(0, Math.round(b)));
            pixels[p++] = 255;
        }
    }
    return pixels;
}

exports.getData = function (type) {
    switch (type) {
        case 'airless': return airlessColormap();
        case 'barren': return barrenColormap();
        case 'hostile': return hostileColormap();
        default: return earthlikeColormap();
    }
};

exports.data = earthlikeColormap();
