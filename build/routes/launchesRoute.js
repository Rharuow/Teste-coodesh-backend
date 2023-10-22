"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.launchesRouter = void 0;
var express_1 = __importDefault(require("express"));
var launches_1 = require("../controllers/launches");
var launchesRouter = express_1.default.Router();
exports.launchesRouter = launchesRouter;
launchesRouter.get("/", launches_1.launchesList);
