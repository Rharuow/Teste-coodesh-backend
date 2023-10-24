"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.home = void 0;
var home = function (req, res) {
    try {
        return res
            .status(200)
            .json({ message: "Fullstack Challenge 🏅 - Space X API" });
    }
    catch (error) {
        console.log(error);
        return res
            .status(400)
            .json({ message: "Sorry, something is worng at home router..." });
    }
};
exports.home = home;
