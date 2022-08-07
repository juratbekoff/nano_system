"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
// import section
var express_1 = require("express");
var application_controller_1 = __importDefault(require("../../controller/ceo/application.controller"));
var appCeoController = new application_controller_1["default"]();
var router = (0, express_1.Router)();
// System
// Method: GET     Descr: Get Application which is for system
router.get('/application-system', appCeoController.applicationSystem);
// Teachers     
// Method: GET     Descr: Get Application which is for teachers
router.get('/application-teachers', appCeoController.applicationTeachers);
exports["default"] = router;
//# sourceMappingURL=application.routes.js.map