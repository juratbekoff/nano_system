"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var application_controller_1 = __importDefault(require("../../controller/ceo/application.controller"));
var express_1 = require("express");
var appCeoController = new application_controller_1["default"]();
var router = (0, express_1.Router)();
// GET application system
router.get('/application/system', appCeoController.applicationSystem);
// GET application teachers
router.get('/application/teachers', appCeoController.applicationTeachers);
exports["default"] = router;
//# sourceMappingURL=routes.js.map