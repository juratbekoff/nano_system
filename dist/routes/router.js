"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var users_1 = __importDefault(require("./users"));
var ceo_1 = __importDefault(require("./ceo"));
var router = express_1["default"]();
router.use(cors_1["default"]());
router.use(express_1["default"].json());
router.use(express_1["default"].urlencoded({ extended: true }));
router.use('/ceo', ceo_1["default"]);
router.use('/user', users_1["default"]);
exports["default"] = router;
//# sourceMappingURL=router.js.map