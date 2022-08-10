"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.setuserlogin = exports.contacts = exports.attendance = exports.application = void 0;
// imports
var application_1 = __importDefault(require("./application"));
var attendance_1 = __importDefault(require("./attendance"));
var contacts_1 = __importDefault(require("./contacts"));
var setuserlogin_1 = __importDefault(require("./setuserlogin"));
// Exports
exports.application = new application_1["default"]();
exports.attendance = new attendance_1["default"]();
exports.contacts = new contacts_1["default"]();
exports.setuserlogin = new setuserlogin_1["default"]();
//# sourceMappingURL=exports.js.map