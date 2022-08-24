"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var multer_1 = __importDefault(require("multer"));
var uuid_1 = require("uuid");
var ceo_1 = require("../controller/ceo");
var router = (0, express_1.Router)();
var storage = multer_1["default"].diskStorage({ destination: function (req, file, cb) { cb(null, './src/uploads/contacts_smm'); }, filename: function (req, file, cb) { cb(null, (0, uuid_1.v4)() + '.png'); } });
var upload = (0, multer_1["default"])({ storage: storage });
// application system routes
router.get('/application/system', ceo_1.application.getAppSystem);
router["delete"]('/application/system/:id', ceo_1.application.deleteAppSystemByID);
// application teachers routes
router.get('/application/teachers', ceo_1.application.applicationTeachers);
router["delete"]('/application/teachers/:id', ceo_1.application.deleteAppTeachersById);
// suggestion routes
router.get('/suggestions', ceo_1.ceoSuggest.suggestion);
router.get('/suggestions/?suggestName&name', ceo_1.ceoSuggest.searchSuggest);
router.get('/suggestion/:id', ceo_1.ceoSuggest.getSuggestById);
router["delete"]('/suggestion/:id', ceo_1.ceoSuggest.deleteSuggestById);
router["delete"]('/suggestions', ceo_1.ceoSuggest.deleteAllSuggest);
// attendance routes
router.post('/attendance/date', ceo_1.attendance.attendanceDate);
router.post('/attendance/pupil', ceo_1.attendance.attendancePupil);
// contacts routes
router.post('/contacts-smm', upload.single('img'), ceo_1.contacts.contactsSMM);
// login routes
router.post('/set/login', ceo_1.ceologin.setLogin);
router.post('/login', ceo_1.ceologin.login);
router["delete"]('/logins', ceo_1.ceologin.deleteAllLogins);
exports["default"] = router;
//# sourceMappingURL=ceo.js.map