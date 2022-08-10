"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
// Imports User Router
var usersRouter_1 = __importDefault(require("./users/usersRouter"));
// Imports Ceo Router
var ceoRoutes_1 = __importDefault(require("./ceoRoutes"));
var mainRoute = (0, express_1["default"])();
mainRoute.use((0, cors_1["default"])());
mainRoute.use(express_1["default"].json());
mainRoute.use(express_1["default"].urlencoded({ extended: true }));
mainRoute.use('/ceo', ceoRoutes_1["default"]);
mainRoute.use('/users', usersRouter_1["default"]);
exports["default"] = mainRoute;
//# sourceMappingURL=mainRoute.js.map