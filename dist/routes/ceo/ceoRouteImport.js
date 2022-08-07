"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var contacts_routes_1 = __importDefault(require("./ceoRoutes/contacts.routes"));
var ceoRouter = (0, express_1["default"])();
ceoRouter.use((0, cors_1["default"])());
ceoRouter.use(express_1["default"].json());
ceoRouter.use(express_1["default"].urlencoded({ extended: true }));
// Ceo
ceoRouter.use('/', contacts_routes_1["default"]);
ceoRouter.use('/', contacts_routes_1["default"]);
exports["default"] = ceoRouter;
//# sourceMappingURL=ceoRouteImport.js.map