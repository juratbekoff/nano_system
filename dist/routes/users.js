"use strict";
exports.__esModule = true;
var express_1 = require("express");
var users_1 = require("./../controller/users/");
var router = (0, express_1.Router)();
// application routes
router.post('/application', users_1.application.application);
// userslogin routes
router.post('/login', users_1.userlogin.login);
// username routes
router.post('/username', users_1.username.username);
exports["default"] = router;
//# sourceMappingURL=users.js.map