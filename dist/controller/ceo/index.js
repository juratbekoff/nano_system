"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.publish = exports.ceoSuggest = exports.application = exports.userLogin = exports.teacherLogin = exports.ceoLogin = void 0;
// imports
var ceo_1 = __importDefault(require("./logins/ceo"));
var teacher_1 = __importDefault(require("./logins/teacher"));
var user_1 = __importDefault(require("./logins/user"));
var application_1 = __importDefault(require("./application"));
var suggestion_1 = __importDefault(require("./suggestion"));
var publish_1 = __importDefault(require("./publish"));
// Exports
exports.ceoLogin = new ceo_1["default"]();
exports.teacherLogin = new teacher_1["default"]();
exports.userLogin = new user_1["default"]();
exports.application = new application_1["default"]();
exports.ceoSuggest = new suggestion_1["default"]();
exports.publish = new publish_1["default"]();
//# sourceMappingURL=index.js.map