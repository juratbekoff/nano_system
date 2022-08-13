"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
exports.CeoLoginController = exports.UserLoginController = void 0;
var bcrypt_1 = __importStar(require("bcrypt"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var setlogins_1 = require("../../services/ceo/setlogins");
var userlogin = new setlogins_1.Userlogin();
var ceologin = new setlogins_1.Ceologin();
var UserLoginController = /** @class */ (function () {
    function UserLoginController() {
    }
    UserLoginController.prototype.setUserLogin = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var userLogin, salt, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        userLogin = { id: 0, login: req.body.login, password: req.body.password };
                        salt = bcrypt_1["default"].genSaltSync(10);
                        userLogin.password = (0, bcrypt_1.hashSync)(userLogin.password, salt);
                        if (userLogin.login.length < 5) {
                            return [2 /*return*/, res.status(400).send({ message: "Login must be at least 5 letters! " })];
                        }
                        return [4 /*yield*/, userlogin.deleteUserLogin()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, userlogin.userLogin(userLogin)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, res.status(200).send({ message: 'Successfully code setted!' })];
                    case 3:
                        error_1 = _a.sent();
                        return [2 /*return*/, res.status(500).send({ message: "Internal Server Error!", error: error_1 })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ;
    return UserLoginController;
}());
exports.UserLoginController = UserLoginController;
var CeoLoginController = /** @class */ (function () {
    function CeoLoginController() {
    }
    CeoLoginController.prototype.setCeoLogin = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var ceologs, salt, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        ceologs = { id: 0, login: req.body.login, password: req.body.password, role: req.body.role };
                        if (ceologs.login.length < 5) {
                            return [2 /*return*/, res.status(400).send({ message: 'login must be at least 5 symbols!' })];
                        }
                        if (ceologs.password.length < 5) {
                            return [2 /*return*/, res.status(400).send({ message: 'password must be at least 5 symbols!' })];
                        }
                        salt = bcrypt_1["default"].genSaltSync(10);
                        ceologs.password = (0, bcrypt_1.hashSync)(ceologs.password, salt);
                        return [4 /*yield*/, ceologin.deleteCeoLogin()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, ceologin.ceoLogin(ceologs)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, res.status(200).send({ message: 'Successfully CEO code setted!' })];
                    case 3:
                        error_2 = _a.sent();
                        console.log(error_2);
                        res.status(500).json({ message: "Internal Server Error!" });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CeoLoginController.prototype.loginCeo = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, login, password, role, logsin, logsinPassword, jsontoken, error_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = req.body, login = _a.login, password = _a.password, role = _a.role;
                        return [4 /*yield*/, ceologin.findCeoLogin(login)];
                    case 1:
                        logsin = _b.sent();
                        if (!logsin) {
                            return [2 /*return*/, res.json({ success: 0, data: "Incorrect login!" })];
                        }
                        logsinPassword = bcrypt_1["default"].compareSync(password, logsin.password);
                        if (!logsinPassword) {
                            return [2 /*return*/, res.status(400).json({ message: 'Incorrect password!' })];
                        }
                        if (logsin.role !== role) {
                            return [2 /*return*/, res.status(401).json({ success: 0, data: "You don't have permittion to enter CEO panel! " })];
                        }
                        jsontoken = jsonwebtoken_1["default"].sign({ result: logsin }, 'qwert1', { expiresIn: "1y" });
                        return [2 /*return*/, res.status(200).send({ message: "login successfully!", token: jsontoken })];
                    case 2:
                        error_3 = _b.sent();
                        console.log(error_3);
                        return [2 /*return*/, res.status(500).send({ message: "Internal Server Error!" })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return CeoLoginController;
}());
exports.CeoLoginController = CeoLoginController;
//# sourceMappingURL=setlogins.js.map