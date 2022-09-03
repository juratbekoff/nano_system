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
var express_1 = require("express");
var testService_1 = __importDefault(require("./testService"));
var router = (0, express_1.Router)();
router.post('/user', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, users, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                user = {
                    id: 0,
                    fullname: req.body.fullname,
                    login: req.body.login,
                    password: req.body.password,
                    role: req.body.role
                };
                return [4 /*yield*/, testService_1["default"].createUser(user)];
            case 1:
                users = _a.sent();
                return [2 /*return*/, res.status(200).send({ message: 'Ok, user created!', user: users })];
            case 2:
                error_1 = _a.sent();
                console.log(error_1);
                return [2 /*return*/, res.status(500)];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.post('/app', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var app, application, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                app = {
                    id: 0,
                    appname: req.body.appname,
                    message: req.body.message,
                    system: req.body.system,
                    userId: req.body.userId
                };
                return [4 /*yield*/, testService_1["default"].applciation(app)];
            case 1:
                application = _a.sent();
                return [2 /*return*/, res.status(200).send({ message: 'Ok, Application has been sent!', application: application })];
            case 2:
                error_2 = _a.sent();
                console.log(error_2);
                return [2 /*return*/, res.status(500)];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.get('/all', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var apps;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, testService_1["default"].findAllApps()];
            case 1:
                apps = _a.sent();
                return [2 /*return*/, res.status(200).send({ message: 'Ok, user created!', application: apps })];
        }
    });
}); });
router.get('/user/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var users;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, testService_1["default"].userId(+req.params.id)];
            case 1:
                users = _a.sent();
                return [2 /*return*/, res.status(200).send({ message: "User applications related to ID number ".concat(+req.params.id), users: users })];
        }
    });
}); });
exports["default"] = router;
//# sourceMappingURL=testRoute.js.map