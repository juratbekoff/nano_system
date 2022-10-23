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
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var user_1 = __importDefault(require("../../../services/ceo/logins/user"));
var userlogins = new user_1["default"]();
var UserLoginController = /** @class */ (function () {
    function UserLoginController() {
    }
    UserLoginController.prototype.setUserLogin = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var ceologs, findCeoLogin, login, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        ceologs = {
                            id: 0,
                            fullname: req.body.fullname,
                            login: req.body.login,
                            password: req.body.password,
                            role: req.body.role
                        };
                        return [4 /*yield*/, userlogins.findUserLogin(ceologs.login)];
                    case 1:
                        findCeoLogin = _a.sent();
                        if (ceologs.login.length < 3) {
                            return [2 /*return*/, res.status(400).send({ message: 'login must be at least 5 symbols!' })];
                        }
                        if (ceologs.password.length < 3) {
                            return [2 /*return*/, res.status(400).send({ message: 'password must be at least 5 symbols!' })];
                        }
                        if (findCeoLogin) {
                            return [2 /*return*/, res.status(403).send({ message: "Sorry! This '".concat(ceologs.login, "' login is already exicted! Please! Change login's value!") })];
                        }
                        return [4 /*yield*/, userlogins.createUserlogin(ceologs)];
                    case 2:
                        login = _a.sent();
                        return [2 /*return*/, res.status(200).send({ message: 'User successfuly created!', user: login })];
                    case 3:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [2 /*return*/, res.status(500).json({ message: "Internal Server Error!", error: error_1 })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UserLoginController.prototype.userLogin = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, login, password, logsin, jsontoken, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = req.body, login = _a.login, password = _a.password;
                        return [4 /*yield*/, userlogins.findUserLogin(login)];
                    case 1:
                        logsin = _b.sent();
                        if (!logsin) {
                            return [2 /*return*/, res.status(404).send({ success: 0, data: "Incorrect login!" })];
                        }
                        if (logsin.password !== password) {
                            return [2 /*return*/, res.status(404).json({ message: 'Incorrect password!' })];
                        }
                        jsontoken = jsonwebtoken_1["default"].sign({ result: logsin }, 'qwert1', { expiresIn: "1y" });
                        return [2 /*return*/, res.status(200).send({
                                message: "login successfully!",
                                token: jsontoken,
                                role: logsin.role,
                                id: logsin.id,
                                fullname: logsin.fullname,
                                applications: logsin.applications,
                                suggestions: logsin.suggestions,
                                applications_count: logsin._count.applications,
                                suggestions_count: logsin._count.suggestions
                            })];
                    case 2:
                        error_2 = _b.sent();
                        console.log(error_2);
                        return [2 /*return*/, res.status(500).send({ message: "Internal Server Error!" })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserLoginController.prototype.findAllUserLogins = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, userlogins.findAllUserLogin()
                                .then(function (logins) { return res.status(200).send({ message: 'All Logins get from the database!', logins: logins }); })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        console.log(error_3);
                        return [2 /*return*/, res.status(500).send(error_3)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserLoginController.prototype.deleteUserLoginById = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, userlogins.deleteUserLoginByID(+req.params.id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, res.status(200).send({ message: "This ".concat(+req.params.id, " successfully deleted from the ceologin's table") })];
                    case 2:
                        error_4 = _a.sent();
                        console.log(error_4);
                        return [2 /*return*/, res.status(500).send(error_4)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // user iform by ID
    UserLoginController.prototype.findByUserID = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, userlogins.findByUserID(+req.params.id)
                                .then(function (userInfo) { return res.status(200).send({ message: "ID ".concat(+req.params.id, " pupil's inform!"), userInfo: userInfo }); })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_5 = _a.sent();
                        console.log(error_5);
                        return [2 /*return*/, res.status(500).send({ message: 'Internal Server Error!', error: error_5 })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return UserLoginController;
}());
exports["default"] = UserLoginController;
//# sourceMappingURL=user.js.map