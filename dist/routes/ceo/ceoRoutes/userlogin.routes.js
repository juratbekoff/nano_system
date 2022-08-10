"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var setuserlogin_1 = __importDefault(require("../../../controller/ceo/setuserlogin"));
var userlogincontroller = new setuserlogin_1["default"]();
var router = (0, express_1.Router)();
// Method: POST     Descr: Create login and password for users
router.post('/user/login', userlogincontroller.setUserLogin);
exports["default"] = router;
//# sourceMappingURL=userlogin.routes.js.map