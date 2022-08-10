"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.username = exports.userlogin = exports.application = void 0;
//user imports
var application_1 = __importDefault(require("./application"));
var login_1 = __importDefault(require("./login"));
var username_1 = __importDefault(require("./username"));
//user exports
exports.application = new application_1["default"]();
exports.userlogin = new login_1["default"]();
exports.username = new username_1["default"]();
//# sourceMappingURL=index.js.map