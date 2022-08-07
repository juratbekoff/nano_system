"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var application_controller_1 = __importDefault(require("../../controller/users/application.controller"));
var express_1 = require("express");
var appController = new application_controller_1["default"]();
var router = (0, express_1.Router)();
//Methdo: POST      Descr: create post application for   
router.post('/application', appController.application);
exports["default"] = router;
//# sourceMappingURL=application.routes.js.map