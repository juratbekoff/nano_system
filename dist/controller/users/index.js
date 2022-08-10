"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.userlogin = exports.application = void 0;
//user imports
var application_1 = __importDefault(require("./application"));
var userslogin_1 = __importDefault(require("./userslogin"));
//user exports
exports.application = new application_1["default"]();
exports.userlogin = new userslogin_1["default"]();
//# sourceMappingURL=index.js.map