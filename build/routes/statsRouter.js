"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.statsRouter = void 0;
var express_1 = __importDefault(require("express"));
var stats_1 = require("../controllers/stats");
var statsRouter = express_1.default.Router();
exports.statsRouter = statsRouter;
statsRouter.get("/pie", stats_1.pieStats);
statsRouter.get("/bar", stats_1.barStats);
