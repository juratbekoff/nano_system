"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var multer_1 = __importDefault(require("multer"));
var uuid_1 = require("uuid");
var express_1 = require("express");
var contacts_1 = __importDefault(require("../../controller/ceo/contacts"));
var contacstsController = new contacts_1["default"]();
var router = (0, express_1.Router)();
//uploading function for routes
var storage = multer_1["default"].diskStorage({
    destination: function (req, file, cb) {
        cb(null, './src/uploads/contacts_smm');
    },
    filename: function (req, file, cb) {
        cb(null, (0, uuid_1.v4)() + '.png');
    }
});
var upload = (0, multer_1["default"])({ storage: storage });
// Method:POST;   Descr: Create SMM links for contacts
router.post('/contacts-smm', upload.single('img'), contacstsController.contactsSMM);
exports["default"] = router;
//# sourceMappingURL=contacts.js.map