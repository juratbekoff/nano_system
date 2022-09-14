"use strict";
exports.__esModule = true;
var express_1 = require("express");
var index_1 = require("../controllers/index");
var router = (0, express_1.Router)();
router.post('/role', index_1.role.createRole);
exports["default"] = router;
//# sourceMappingURL=ceo.js.map