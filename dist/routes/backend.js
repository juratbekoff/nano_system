"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
// Imports Ceo Routes
var ceoRouter_1 = __importDefault(require("./ceo/ceoRouter"));
var backendRouter = (0, express_1["default"])();
backendRouter.use((0, cors_1["default"])());
backendRouter.use(express_1["default"].json());
backendRouter.use(express_1["default"].urlencoded({ extended: true }));
// Ceo
backendRouter.use('/ceo', ceoRouter_1["default"]);
// Admin
exports["default"] = backendRouter;
//# sourceMappingURL=backend.js.map