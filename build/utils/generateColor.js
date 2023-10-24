"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleColor = void 0;
var handleColor = function (color) {
    var variant = Math.floor(Math.random() * 100 + 80);
    var rgb = [
        Number(color.split("(")[1].split(",")[0]),
        Number(color.split("(")[1].split(",")[1]),
        Number(color.split("(")[1].split(",")[2]),
    ];
    var _a = rgb.map(function (c, index) {
        return c <= 255 - variant
            ? c + variant
            : c >= variant
                ? c - variant
                : index % 2 === 0
                    ? variant + 50
                    : variant;
    }), r = _a[0], g = _a[1], b = _a[2];
    return "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")");
};
exports.handleColor = handleColor;
