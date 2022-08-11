"use strict";
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
        while (_) try {
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var application_1 = __importDefault(require("../../services/ceo/application"));
var appCeoService = new application_1["default"]();
var AppCeoController = /** @class */ (function () {
    function AppCeoController() {
    }
    // System
    AppCeoController.prototype.getAppSystem = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, appCeoService.getSystemApplication()
                                .then(function (application) { return res.send({ message: 'Get all system ceo applications!', application: application }); })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        return [2 /*return*/, res.status(500).send({ message: "Internal Server Error!", error: error_1 })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AppCeoController.prototype.deleteAppSystemByID = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var oldID, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, appCeoService.getSystemAppById(+req.params.id)];
                    case 1:
                        oldID = _a.sent();
                        if (!(oldID === null || oldID === void 0 ? void 0 : oldID.id))
                            return [2 /*return*/, res.status(404).send({ message: "Sorry! We cannot find id = ".concat(+req.params.id, "! This ID is already deleted from the database!") })];
                        return [4 /*yield*/, appCeoService.deleteSystemAppById(+req.params.id)];
                    case 2:
                        _a.sent();
                        res.status(200).send({ message: "ID ".concat(+req.params.id, " - deleted  from the database!") });
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        res.status(500).send({ message: 'Internal Server Error', error: error_2 });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    //Teachers
    AppCeoController.prototype.applicationTeachers = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, appCeoService.getTeachersApplication()
                                .then(function (application) { return res.send({ message: 'All teachers application!', application: application }); })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        res.status(500).send({ message: 'Internal Server Error', error: error_3 });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AppCeoController.prototype.deleteAppTeachersById = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var oldTeacherID, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, appCeoService.getTeachersAppById(+req.params.id)];
                    case 1:
                        oldTeacherID = _a.sent();
                        if (!(oldTeacherID === null || oldTeacherID === void 0 ? void 0 : oldTeacherID.id))
                            return [2 /*return*/, res.status(404).send({ message: "Sorry! We cannot find id = ".concat(+req.params.id, "! This ID is already deleted from the database!") })];
                        return [4 /*yield*/, appCeoService.deleteTeachersAppById(+req.params.id)];
                    case 2:
                        _a.sent();
                        res.status(200).send({ message: "ID ".concat(+req.params.id, " - deleted  from the database!") });
                        return [3 /*break*/, 4];
                    case 3:
                        error_4 = _a.sent();
                        res.status(500).send({ message: 'Internal Server Error', error: error_4 });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return AppCeoController;
}());
exports["default"] = AppCeoController;
//# sourceMappingURL=application.js.map