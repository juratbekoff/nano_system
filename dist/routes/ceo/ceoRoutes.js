"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var multer_1 = __importDefault(require("multer"));
var uuid_1 = require("uuid");
var ceo_1 = require("../../controller/ceo");
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
// application routes
router.get('/application/system', ceo_1.application.applicationSystem);
router.get('/application/teachers', ceo_1.application.applicationTeachers);
// attendance routes
router.post('/attendance/date', ceo_1.attendance.attendanceDate);
router.post('/attendance/pupil', ceo_1.attendance.attendancePupil);
// setuserlogin routes
router.post('/set/user/login', ceo_1.setuserlogin.setUserLogin);
// contacts routes
router.post('/contacts-smm', upload.single('img'), ceo_1.contacts.contactsSMM);
exports["default"] = router;
//# sourceMappingURL=ceoRoutes.js.map