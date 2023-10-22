"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rocketsSchema = exports.RocketModel = void 0;
var mongoose_1 = require("mongoose");
var rocketsSchema = new mongoose_1.Schema({
    id: String,
    name: String,
    color: String,
    launches: [
        {
            year: String,
            success: Boolean,
            id: String,
        },
    ],
});
exports.rocketsSchema = rocketsSchema;
var RocketModel = (0, mongoose_1.model)("Rockets", rocketsSchema);
exports.RocketModel = RocketModel;
