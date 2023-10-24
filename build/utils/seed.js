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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = void 0;
var dayjs_1 = __importDefault(require("dayjs"));
var Launch_1 = require("../models/Launch");
var Rocket_1 = require("../models/Rocket");
var generateColor_1 = require("./generateColor");
var seed = function () { return __awaiter(void 0, void 0, void 0, function () {
    var launchesMongo, launches, rocketsFromSpaceXAPI_1, rockets_1, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 8, , 9]);
                return [4 /*yield*/, Launch_1.LaunchModel.find()];
            case 1:
                launchesMongo = _a.sent();
                if (launchesMongo.length > 0)
                    return [2 /*return*/, "launches are loaded"];
                return [4 /*yield*/, fetch("https://api.spacexdata.com/v5/launches")];
            case 2: return [4 /*yield*/, (_a.sent()).json()];
            case 3:
                launches = (_a.sent());
                return [4 /*yield*/, fetch("https://api.spacexdata.com/v4/rockets")];
            case 4: return [4 /*yield*/, (_a.sent()).json()];
            case 5:
                rocketsFromSpaceXAPI_1 = (_a.sent());
                rockets_1 = launches.reduce(function (rckts, current) {
                    var _a;
                    if (!rckts.some(function (rcktsLaun) { return rcktsLaun.id === current.rocket; })) {
                        rckts.push({
                            name: String((_a = rocketsFromSpaceXAPI_1.find(function (rocktFromSpXAPI) { return rocktFromSpXAPI.id === current.rocket; })) === null || _a === void 0 ? void 0 : _a.name),
                            id: current.rocket,
                            color: rckts.length === 0
                                ? "rgb(255,0,0)"
                                : (0, generateColor_1.handleColor)(rckts[rckts.length - 1].color),
                            launches: [
                                {
                                    year: (0, dayjs_1.default)(current.date_utc).toDate().getFullYear(),
                                    success: current.success ? true : false,
                                    id: current.id,
                                },
                            ],
                        });
                    }
                    else {
                        rckts = rckts.map(function (rocket) {
                            return rocket.id === current.rocket
                                ? __assign(__assign({}, rocket), { launches: __spreadArray(__spreadArray([], rocket.launches, true), [
                                        {
                                            year: (0, dayjs_1.default)(current.date_utc).toDate().getFullYear(),
                                            success: current.success ? true : false,
                                            id: current.id,
                                        },
                                    ], false) }) : rocket;
                        });
                    }
                    return rckts;
                }, []);
                return [4 /*yield*/, Launch_1.LaunchModel.insertMany(launches.map(function (launch) {
                        var _a;
                        return (__assign(__assign({}, launch), { rocket: {
                                name: (_a = rockets_1.find(function (rocket) { return rocket.id === launch.rocket; })) === null || _a === void 0 ? void 0 : _a.name,
                                id: launch.rocket,
                            } }));
                    }))];
            case 6:
                _a.sent();
                return [4 /*yield*/, Rocket_1.RocketModel.insertMany(rockets_1)];
            case 7:
                _a.sent();
                return [2 /*return*/, "launches pushed"];
            case 8:
                error_1 = _a.sent();
                console.log("error = ", error_1);
                return [3 /*break*/, 9];
            case 9: return [2 /*return*/];
        }
    });
}); };
exports.seed = seed;
