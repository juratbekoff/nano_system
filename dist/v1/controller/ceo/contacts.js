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
var contacts_1 = __importDefault(require("../../services/ceo/contacts."));
var contacts = new contacts_1["default"]();
var ContacstsController = /** @class */ (function () {
    function ContacstsController() {
    }
    ContacstsController.prototype.contactsMain = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var contact, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        contact = { id: 0, contact: req.body.contact, email: req.body.email, location: req.body.location, appsAppStrore: req.body.appsAppStrore, appsGooglePlay: req.body.appsGooglePlay };
                        return [4 /*yield*/, contacts.contact(contact)
                                .then(function (contact) { return res.status(200).send({ message: 'Contact section has been saved  !', contact: contact }); })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [2 /*return*/, res.status(500).send({ message: "Internal Server Error!", error: error_1 })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ;
    ContacstsController.prototype.getAllContacts = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, contacts.getAllContacts()
                                .then(function (contacts) { return res.status(200).send({ message: 'Contact!', contacts: contacts }); })];
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
    ContacstsController.prototype.deleteCSMMById = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, contacts.deleteCMById(+req.params.id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, res.status(200).status(200).send({ message: "ID ".concat(+req.params.id, " deleted from the contacts table!") })];
                    case 2:
                        error_3 = _a.sent();
                        console.log(error_3);
                        return [2 /*return*/, res.status(500).send({ message: "Internal Server Error!" })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ContacstsController.prototype.updateContactsMain = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, contacts.updateContacts(req.body, +req.params.id)
                                .then(function (updatedContactsMain) { return res.status(200).send({ message: 'Contact updated!', updatedContactsMain: updatedContactsMain }); })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _a.sent();
                        return [2 /*return*/, res.status(500).send({ message: "Internal Server Error!", error: error_4 })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ;
    // contacts-smm
    ContacstsController.prototype.contactsSMM = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var contacts_smm, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        contacts_smm = { id: 0, img: req.body.img, name: req.body.name, url: req.body.url };
                        return [4 /*yield*/, contacts.contacts_smm(contacts_smm)
                                .then(function (contacts_smm) { return res.status(200).send({ message: 'Link setted!', contacts_smm: contacts_smm }); })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_5 = _a.sent();
                        console.log(error_5);
                        return [2 /*return*/, res.status(500).send({ message: "Internal Server Error!", error: error_5 })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ;
    ContacstsController.prototype.getAllContactsSMM = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, contacts.getAllContactSMM()
                                .then(function (contacts) { return res.status(200).send({ message: 'All contact!', contacts: contacts }); })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_6 = _a.sent();
                        console.log(error_6);
                        return [2 /*return*/, res.status(500).send({ message: "Internal Server Error!", error: error_6 })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ContacstsController.prototype.updateContactsSMM = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, contacts.updateContactsSmm(req.body, +req.params.id)
                                .then(function (updatedContactsSMM) { return res.status(200).send({ message: 'contactsSMM updated!', updatedContactsSMM: updatedContactsSMM }); })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_7 = _a.sent();
                        return [2 /*return*/, res.status(500).send({ message: "Internal Server Error!", error: error_7 })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ;
    ContacstsController.prototype.deleteCMById = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var error_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, contacts.deleteCById(+req.params.id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, res.status(200).status(200).send({ message: "ID ".concat(+req.params.id, " deleted from the contacts-smm table!") })];
                    case 2:
                        error_8 = _a.sent();
                        console.log(error_8);
                        return [2 /*return*/, res.status(500).send({ message: "Internal Server Error!", error: error_8 })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return ContacstsController;
}());
exports["default"] = ContacstsController;
//# sourceMappingURL=contacts.js.map