"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var publish_1 = __importDefault(require("../../services/ceo/publish"));
var publishing = new publish_1["default"]();
var NewsPublishController = /** @class */ (function () {
    function NewsPublishController() {
    }
    // news
    NewsPublishController.prototype.createPublish = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var file, publish, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        file = req.file;
                        publish = {
                            id: 0,
                            image: file.filename,
                            title: req.body.title,
                            message: req.body.message,
                            date: new Date().toString(),
                            category_id: +req.body.category_id
                        };
                        return [4 /*yield*/, publishing.createPublish(publish)
                                .then(function (publish) { return res.send({ message: 'News successfully uploaded!', publish: publish }); })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [2 /*return*/, res.status(500).send({ message: "Internal Server Error!" })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    NewsPublishController.prototype.getAllPublished = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, publishing.getAllPublished()
                                .then(function (publish) { return res.send({ message: 'All news!', publish: publish }); })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [2 /*return*/, res.status(500).send({ message: "Internal Server Error!" })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    NewsPublishController.prototype.getAllCategoryWithNews = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, publishing.getAllNewsWithCategory()
                                .then(function (publish) { return res.send({ message: 'next categorys!!!', publish: publish }); })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        console.log(error_3);
                        return [2 /*return*/, res.status(500).send({ message: "Internal Server Error!" })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    NewsPublishController.prototype.getPublishedById = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, publishing.getPublishedById(+req.params.id)
                                .then(function (publish) { return res.send({ message: "This ".concat(+req.params.id, " news!"), publish: publish }); })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _a.sent();
                        console.log(error_4);
                        return [2 /*return*/, res.status(500).send({ message: "Internal Server Error!" })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    NewsPublishController.prototype.deletePublishedById = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, findNews, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        id = +req.params.id;
                        return [4 /*yield*/, publishing.getPublishedById(id)];
                    case 1:
                        findNews = _a.sent();
                        if (!findNews) {
                            return [2 /*return*/, res.status(400).send({ message: "News already deleted or not created!" })];
                        }
                        return [4 /*yield*/, publishing.deletePublishedById(id)
                                .then(function (publish) { return res.send({ message: "Id ".concat(+req.params.id, " news deleted!") }); })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_5 = _a.sent();
                        console.log(error_5);
                        return [2 /*return*/, res.status(500).send({ message: "Internal Server Error!" })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    //category
    NewsPublishController.prototype.createCategory = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var category, createdCategory, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        category = {
                            id: 0,
                            name: req.body.name
                        };
                        return [4 /*yield*/, publishing.createCategory(category)];
                    case 1:
                        createdCategory = _a.sent();
                        return [2 /*return*/, res.status(200).json({ message: "Category successfully added!", createdCategory: createdCategory })];
                    case 2:
                        error_6 = _a.sent();
                        console.log(error_6);
                        return [2 /*return*/, res.status(500).send({ message: "Internal Server Error!", error: error_6 })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    NewsPublishController.prototype.getAllCategories = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var categories, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, publishing.getAllcats()];
                    case 1:
                        categories = _a.sent();
                        return [2 /*return*/, res.status(200).json({ message: 'Retrieved all categries!', categories: categories })];
                    case 2:
                        error_7 = _a.sent();
                        console.log(error_7);
                        return [2 /*return*/, res.send("Internal Server Error!")];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    NewsPublishController.prototype.deleteCategory = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, findCategory, error_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        id = +req.params.id;
                        return [4 /*yield*/, publishing.getCategoryById(id)];
                    case 1:
                        findCategory = _a.sent();
                        if (!findCategory) {
                            return [2 /*return*/, res.status(400).send({ message: "Category already deleted or not created!" })];
                        }
                        return [4 /*yield*/, publishing.deleteCategory(id)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, res.status(200).json({ message: "Id ".concat(+req.params.id, " category deleted!") })];
                    case 3:
                        error_8 = _a.sent();
                        console.log(error_8);
                        return [2 /*return*/, res.status(500).send("Internal Server Error!")];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return NewsPublishController;
}());
exports["default"] = NewsPublishController;
//# sourceMappingURL=publish.js.map