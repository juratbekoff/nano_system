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
// image uploaders
var storage = multer_1["default"].diskStorage({ destination: function (req, file, cb) { cb(null, './src/uploads'); }, filename: function (req, file, cb) { cb(null, (0, uuid_1.v4)() + '.png'); } });
var upload = (0, multer_1["default"])({ storage: storage });
// application system routes
router.get('/application/system', ceo_1.application.getAppSystem);
router["delete"]('/application/system/:id', ceo_1.application.deleteAppSystemByID);
// application teachers routes
router.get('/application/teachers', ceo_1.application.applicationTeachers);
router["delete"]('/application/teachers/:id', ceo_1.application.deleteAppTeachersById);
// suggestion routes
router.get('/suggestions', ceo_1.ceoSuggest.suggestion);
router.get('/suggest', ceo_1.ceoSuggest.searchSuggest);
router.get('/suggestion/:id', ceo_1.ceoSuggest.getSuggestById);
router["delete"]('/suggestion/:id', ceo_1.ceoSuggest.deleteSuggestById);
router["delete"]('/suggestions', ceo_1.ceoSuggest.deleteAllSuggest);
// attendance routes
router.post('/attendance/date', ceo_1.attendance.attendanceDate);
router.post('/attendance/pupil', ceo_1.attendance.attendancePupil);
// contacts-smm
router.post('/contacts-smm', ceo_1.contacts.contactsSMM);
router.get('/contacts-smm', ceo_1.contacts.getAllContactsSMM);
router.put('/contacts-smm/:id', ceo_1.contacts.updateContactsSMM);
router["delete"]('/contacts-smm/:id', ceo_1.contacts.deleteCSMMById);
// contacts-main
router.post('/contact', ceo_1.contacts.contactsMain);
router.get('/contact', ceo_1.contacts.getAllContacts);
router.put('/contact/:id', ceo_1.contacts.updateContactsMain);
router["delete"]('/contact/:id', ceo_1.contacts.deleteCMById);
// login routes
router.post('/set/login', ceo_1.ceologin.setLogin);
router.post('/login', ceo_1.ceologin.login);
router.get('/logins', ceo_1.ceologin.findAllLogins);
router["delete"]('/login/:id', ceo_1.ceologin.deleteLoginById);
router["delete"]('/logins', ceo_1.ceologin.deleteAllLogins);
// news pubilsh
router.post('/news', ceo_1.publish.createPublish);
router.get('/news', ceo_1.publish.getAllPublished),
    router.get('/news/:id', ceo_1.publish.getPublishedById);
exports["default"] = router;
//# sourceMappingURL=ceo.js.map