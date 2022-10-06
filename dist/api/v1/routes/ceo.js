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
var storage = multer_1["default"].diskStorage({ destination: function (req, file, cb) { cb(null, './src/uploads/news'); }, filename: function (req, file, cb) { cb(null, (0, uuid_1.v4)() + '.png'); } });
var upload = (0, multer_1["default"])({ storage: storage });
//application routes
router.get('/applications', ceo_1.application.getApplication);
router.get('/application/:id', ceo_1.application.applicationById);
router["delete"]('/applications', ceo_1.application.deleteAllApps);
router["delete"]('/application/:id', ceo_1.application.deleteAppByID);
// suggestion routes
router.get('/suggestions', ceo_1.ceoSuggest.suggestion);
router.get('/suggest', ceo_1.ceoSuggest.searchSuggest);
router.get('/suggestion/:id', ceo_1.ceoSuggest.getSuggestById);
router["delete"]('/suggestion/:id', ceo_1.ceoSuggest.deleteSuggestById);
router["delete"]('/suggestions', ceo_1.ceoSuggest.deleteAllSuggest);
// news routes
router.post('/news', upload.single('image'), ceo_1.publish.createPublish);
router.get('/news', ceo_1.publish.getAllPublished),
    router.get('/news/:id', ceo_1.publish.getPublishedById);
// category routes
router.post('/category/news', ceo_1.publish.createCategory);
router.get('/categories/news', ceo_1.publish.getAllCategories);
// ceoLogin routes
router.post('/set/login', ceo_1.ceoLogin.setCeoLogin);
router.post('/login', ceo_1.ceoLogin.ceoLogin);
router.get('/login', ceo_1.ceoLogin.findAllLogins);
router["delete"]('/login', ceo_1.ceoLogin.deleteLoginById);
// teacherLogin routes
router.post('/set/teacher/login', ceo_1.teacherLogin.setTeacherLogin);
router.post('/teacher/login', ceo_1.teacherLogin.teacherLogin);
router.get('/teacher/login', ceo_1.teacherLogin.findAllTeacherLogins);
router["delete"]('/teacher/login', ceo_1.teacherLogin.deleteTeacherLoginById);
// userLogin routes
router.post('/set/user/login', ceo_1.userLogin.setUserLogin);
router.post('/user/login', ceo_1.userLogin.userLogin);
router.get('/user/login', ceo_1.userLogin.findAllUserLogins);
router["delete"]('/user/login', ceo_1.userLogin.deleteUserLoginById);
// infrom routes for Profile
router.get('/user/:id', ceo_1.userLogin.findByUserID);
router.get('/teacher/:id', ceo_1.teacherLogin.findByTeacherID);
exports["default"] = router;
//# sourceMappingURL=ceo.js.map