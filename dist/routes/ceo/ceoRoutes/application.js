"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
// import section
var express_1 = require("express");
var application_1 = __importDefault(require("../../../controller/ceo/application"));
var appCeoController = new application_1["default"]();
var router = (0, express_1.Router)();
// Method: GET     Descr: Get Application which is for system
router.get('/system', appCeoController.applicationSystem);
// Method: GET     Descr: Get Application which is for teachers
router.get('/teachers', appCeoController.applicationTeachers);
exports["default"] = router;
//# sourceMappingURL=application.js.map