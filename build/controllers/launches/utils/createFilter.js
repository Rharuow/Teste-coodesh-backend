"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFilter = void 0;
var createFilter = function (search, results) {
    if (search && results !== undefined)
        return {
            $and: [
                results === "success"
                    ? { success: true }
                    : { $or: [{ success: false }, { success: null }] },
                {
                    $or: [
                        { name: { $regex: ".*" + search + ".*" } },
                        { "rocket.name": { $regex: ".*" + search + ".*" } },
                    ],
                },
            ],
        };
    if (search && results === undefined)
        return {
            $or: [
                { name: { $regex: ".*" + search + ".*" } },
                { "rocket.name": { $regex: ".*" + search + ".*" } },
            ],
        };
    if (!search && results !== undefined)
        return results === "success"
            ? { success: true }
            : { $or: [{ success: false }, { success: null }] };
    return {};
};
exports.createFilter = createFilter;
