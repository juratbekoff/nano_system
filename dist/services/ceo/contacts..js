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
exports.__esModule = true;
var client_1 = require("@prisma/client");
var client = new client_1.PrismaClient();
var Contacts = /** @class */ (function () {
    function Contacts() {
    }
    Contacts.prototype.contact = function (contact) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, client.contacts.create({
                        data: {
                            contact: contact.contact,
                            location: contact.location,
                            email: contact.email,
                            appsAppStrore: contact.appsAppStrore,
                            appsGooglePlay: contact.appsGooglePlay
                        }
                    })];
            });
        });
    };
    Contacts.prototype.contacts_smm = function (contacts_smm) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, client.contacts_smm.create({
                        data: {
                            name: contacts_smm.name,
                            img: contacts_smm.img,
                            url: contacts_smm.url
                        }
                    })];
            });
        });
    };
    Contacts.prototype.updateContacts = function (contacts, incomingId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, client.contacts.update({
                        data: {
                            contact: contacts.contact,
                            email: contacts.email,
                            location: contacts.location,
                            appsAppStrore: contacts.appsAppStrore,
                            appsGooglePlay: contacts.appsGooglePlay
                        },
                        where: {
                            id: incomingId
                        }
                    })];
            });
        });
    };
    Contacts.prototype.updateContactsSmm = function (contacts_smm, incomingId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, client.contacts_smm.update({
                        data: {
                            name: contacts_smm.name,
                            img: contacts_smm.img,
                            url: contacts_smm.url
                        },
                        where: {
                            id: incomingId
                        }
                    })];
            });
        });
    };
    Contacts.prototype.getAllContacts = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, client.contacts.findMany()];
            });
        });
    };
    Contacts.prototype.getAllContactSMM = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, client.contacts_smm.findMany()];
            });
        });
    };
    return Contacts;
}());
exports["default"] = Contacts;
//# sourceMappingURL=contacts..js.map