"use strict";
exports.__esModule = true;
var express_1 = require("express");
var users_1 = require("./../../controller/users/");
var router = (0, express_1.Router)();
// application routes
router.post('/application', users_1.application.application);
// suggestion routes
router.post('/suggestion', users_1.suggestion.suggestion);
exports["default"] = router;
//# sourceMappingURL=users.js.map