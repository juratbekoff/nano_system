"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var application_routes_1 = __importDefault(require("./route/application.routes"));
var express_1 = require("express");
var router = (0, express_1.Router)();
router.use('/application', application_routes_1["default"]);
// application.use('/application', appRoute)
exports["default"] = router;
//# sourceMappingURL=mainAppRoute.js.map