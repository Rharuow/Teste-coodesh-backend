"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleColor = void 0;
var complementary_colors_1 = __importDefault(require("complementary-colors"));
var handleColor = function (color) {
    var newColor = new complementary_colors_1.default(color).square()[2];
    return "rgb(".concat(newColor.r, ", ").concat(newColor.g, ", ").concat(newColor.b, ")");
};
exports.handleColor = handleColor;
