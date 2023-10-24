"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.barStats = exports.pieStats = void 0;
var Launch_1 = require("../models/Launch");
var Rocket_1 = require("../models/Rocket");
var pieStats = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var rockets, totalLaunches, success, fails, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, Rocket_1.RocketModel.find()];
            case 1:
                rockets = _a.sent();
                return [4 /*yield*/, Launch_1.LaunchModel.count()];
            case 2:
                totalLaunches = _a.sent();
                success = rockets
                    .map(function (rocket) { return rocket.launches.filter(function (launch) { return launch.success; }).length; })
                    .reduce(function (acc, current) { return acc + current; }, 0);
                fails = totalLaunches - success;
                return [2 /*return*/, res.json({
                        rockets: rockets,
                        metadata: { success: success, fails: fails, rocketsTotal: rockets.length },
                    })];
            case 3:
                error_1 = _a.sent();
                console.log(error_1);
                return [2 /*return*/, res.status(400).json({
                        message: "Sorry, there was an error generating the rocket pizza statistics",
                    })];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.pieStats = pieStats;
var barStats = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var rockets, metadata, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Rocket_1.RocketModel.find()];
            case 1:
                rockets = _a.sent();
                metadata = rockets.reduce(function (accLaunchesForYear, currentRocket) {
                    var rocketForYearLuanched = currentRocket.launches.reduce(function (accLaunches, currentLaunch) {
                        if (accLaunches.some(function (launch) { return launch.year == currentLaunch.year; })) {
                            accLaunches = accLaunches.map(function (launch) {
                                return launch.year == currentLaunch.year
                                    ? __assign(__assign({}, launch), { amountLaunches: Number(launch.amountLaunches) + 1 }) : launch;
                            });
                        }
                        else {
                            accLaunches.push({
                                amountLaunches: 1,
                                launch_id: currentLaunch.id,
                                year: currentLaunch.year,
                                id: currentRocket.id,
                                name: currentRocket.name,
                                color: currentRocket.color,
                            });
                        }
                        return accLaunches;
                    }, []);
                    rocketForYearLuanched.forEach(function (launchReduced) {
                        if (Object.keys(accLaunchesForYear).includes(String(launchReduced.year)))
                            // @ts-ignore
                            accLaunchesForYear["".concat(launchReduced.year)].push(launchReduced);
                        else {
                            // @ts-ignore
                            accLaunchesForYear["".concat(launchReduced.year)] = [launchReduced];
                        }
                    });
                    return accLaunchesForYear;
                }, {});
                return [2 /*return*/, res.json({
                        rockets: rockets.sort(function (accRocket, currentRocket) {
                            return accRocket.launches.length > currentRocket.launches.length
                                ? -1
                                : accRocket.launches.length < currentRocket.launches.length
                                    ? 1
                                    : 0;
                        }),
                        metadata: metadata,
                    })];
            case 2:
                error_2 = _a.sent();
                console.log(error_2);
                return [2 /*return*/, res.status(400).json({
                        message: "Sorry, there was an error generating the rocket bar stats",
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.barStats = barStats;
