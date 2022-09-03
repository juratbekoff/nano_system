"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var router_1 = __importDefault(require("./routes/router"));
var testRoute_1 = __importDefault(require("./test/testRoute"));
var app = (0, express_1["default"])();
app.use((0, cors_1["default"])());
app.use(express_1["default"].json());
app.use(express_1["default"].urlencoded({ extended: true }));
// Route
app.use('/api/v1', router_1["default"]);
app.use(testRoute_1["default"]);
app.listen(process.env.PORT || 8085, function () {
    console.log('Server is running ...');
});
//# sourceMappingURL=server.js.map