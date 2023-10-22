"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.launchesSchema = exports.LaunchModel = void 0;
var mongoose_1 = require("mongoose");
var launchesSchema = new mongoose_1.Schema({
    links: {
        patch: {
            small: String,
            large: String,
        },
        reddit: {
            campaign: String,
            launch: String,
            media: String,
            recovery: String,
        },
        flickr: {
            small: [String],
            original: [String],
        },
        presskit: String,
        webcast: String,
        youtube_id: String,
        article: String,
        wikipedia: String,
    },
    static_fire_date_utc: String,
    static_fire_date_unix: Number,
    tdb: Boolean,
    net: Boolean,
    window: Number,
    rocket: String,
    success: Boolean,
    failures: [],
    details: String,
    crew: [{ crew: String, role: String }],
    ships: [String],
    capsules: [String],
    payloads: [String],
    launchpad: String,
    auto_update: Boolean,
    flight_Number: Number,
    name: String,
    date_utc: String,
    date_unix: Number,
    date_local: String,
    date_precision: String,
    upcoming: Boolean,
    cores: [
        {
            core: String,
            flight: Number,
            gridfins: Boolean,
            legs: Boolean,
            reused: Boolean,
            landing_attempt: Boolean,
            landing_success: Boolean,
            landing_type: String,
            landpad: String,
        },
    ],
    id: String,
});
exports.launchesSchema = launchesSchema;
var LaunchModel = (0, mongoose_1.model)("Launches", launchesSchema);
exports.LaunchModel = LaunchModel;
