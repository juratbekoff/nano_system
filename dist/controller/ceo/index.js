"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.publish2 = exports.publish = exports.ceoSuggest = exports.ceologin = exports.contacts = exports.attendance = exports.application = void 0;
// imports
var application_1 = __importDefault(require("./application"));
var attendance_1 = __importDefault(require("./attendance"));
var contacts_1 = __importDefault(require("./contacts"));
var setlogins_1 = require("./setlogins");
var suggestion_1 = __importDefault(require("./suggestion"));
var publish_1 = __importDefault(require("./publish"));
var publish2_1 = __importDefault(require("./publish2"));
// Exports
exports.application = new application_1["default"]();
exports.attendance = new attendance_1["default"]();
exports.contacts = new contacts_1["default"]();
exports.ceologin = new setlogins_1.LoginController();
exports.ceoSuggest = new suggestion_1["default"]();
exports.publish = new publish_1["default"]();
exports.publish2 = new publish2_1["default"]();
//# sourceMappingURL=index.js.map