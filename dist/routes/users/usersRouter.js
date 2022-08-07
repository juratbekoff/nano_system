"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
// Import Users Routes
var application_routes_1 = __importDefault(require("./usersRoutes/application.routes"));
var userlogin_routes_1 = __importDefault(require("./usersRoutes/userlogin.routes"));
var usersRouter = (0, express_1["default"])();
usersRouter.use((0, cors_1["default"])());
usersRouter.use(express_1["default"].json());
usersRouter.use(express_1["default"].urlencoded({ extended: true }));
// users
usersRouter.use(application_routes_1["default"]);
usersRouter.use(userlogin_routes_1["default"]);
exports["default"] = usersRouter;
//# sourceMappingURL=usersRouter.js.map