"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var application_controller_1 = __importDefault(require("../../../../controller/ceo/application.controller"));
var appCeoController = new application_controller_1["default"]();
var router = (0, express_1.Router)();
// GET application system/teachers
router.get('/system', appCeoController.applicationSystem);
router.get('/teachers', appCeoController.applicationTeachers);
exports["default"] = router;
//# sourceMappingURL=application.routes.js.map