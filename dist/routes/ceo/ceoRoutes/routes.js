"use strict";
exports.__esModule = true;
var express_1 = require("express");
var exports_1 = require("../../../controller/exports");
var router = (0, express_1.Router)();
// application controllers
router.get('/system', exports_1.application.applicationSystem);
router.get('/teachers', exports_1.application.applicationTeachers);
//# sourceMappingURL=routes.js.map