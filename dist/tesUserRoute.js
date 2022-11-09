"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var tesUser_1 = __importDefault(require("./tesUser"));
var testuser = new tesUser_1["default"]();
var router = express_1.Router();
// users
router.post('/user', testuser.createUser);
router.get('/user', testuser.getAllUsers);
// permissions
router.post('/perm', testuser.createPerm);
router.get('/perm', testuser.getAllPerms);
exports["default"] = router;
//# sourceMappingURL=tesUserRoute.js.map