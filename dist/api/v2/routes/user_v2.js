"use strict";
exports.__esModule = true;
var express_1 = require("express");
var index_1 = require("../controllers/user/index");
var router = (0, express_1.Router)();
// second authorization
router.post('/second-auth', index_1.createSecondAuth.createSecondAuth);
exports["default"] = router;
//# sourceMappingURL=user_v2.js.map