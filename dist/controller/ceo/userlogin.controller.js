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
var bcrypt_1 = __importStar(require("bcrypt"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var userlogin_service_1 = __importDefault(require("../../services/ceo/userlogin.service"));
var userlogin = new userlogin_service_1["default"]();
var UserLoginController = /** @class */ (function () {
    function UserLoginController() {
    }
    UserLoginController.prototype.setUserLogin = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var userLogin, salt;
            return __generator(this, function (_a) {
                try {
                    userLogin = {
                        id: 0,
                        login: req.body.login,
                        password: req.body.password
                    };
                    salt = bcrypt_1["default"].genSaltSync(10);
                    userLogin.password = (0, bcrypt_1.hashSync)(userLogin.password, salt);
                    if (userLogin.login.length < 6) {
                        return [2 /*return*/, res.status(400).send({ message: "Login must be at least 6 letters! " })];
                    }
                    if (userLogin.password.length < 6) {
                        return [2 /*return*/, res.status(400).send({ message: " Password must be at least 6 letters! " })];
                    }
                    userlogin.deleteUserLogin();
                    userlogin.userLogin(userLogin);
                    res.status(200).send({
                        message: 'Successfully code setted!'
                    });
                }
                catch (error) {
                    console.log(error);
                }
                return [2 /*return*/];
            });
        });
    };
    ;
    UserLoginController.prototype.login = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, login, password, user, result, jsontoken, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = req.body, login = _a.login, password = _a.password;
                        return [4 /*yield*/, userlogin.findUserLogin(login)];
                    case 1:
                        user = _b.sent();
                        console.log(user);
                        if (!user) {
                            return [2 /*return*/, res.json({
                                    success: 0,
                                    data: "Invalid email or password! 404!"
                                })];
                        }
                        result = bcrypt_1["default"].compareSync(password, user.password);
                        if (result) {
                            jsontoken = jsonwebtoken_1["default"].sign({ result: user }, 'qwert1', {
                                expiresIn: "1024h"
                            });
                            return [2 /*return*/, res.json({
                                    success: 1,
                                    message: "login successfully!",
                                    token: jsontoken
                                })];
                        }
                        else {
                            return [2 /*return*/, res.json({
                                    success: 0,
                                    data: "Invalid email or password! 404!"
                                })];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        console.log(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return UserLoginController;
}());
exports["default"] = UserLoginController;
//# sourceMappingURL=userlogin.controller.js.map