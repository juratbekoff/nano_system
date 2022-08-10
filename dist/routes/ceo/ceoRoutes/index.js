"use strict";
exports.__esModule = true;
var express_1 = require("express");
var ceo_1 = require("../../../controller/ceo");
var router = (0, express_1.Router)();
// application routes
router.get('/application/system', ceo_1.application.applicationSystem);
router.get('/application/teachers', ceo_1.application.applicationTeachers);
// attendance routes
router.post('/attendance/date', ceo_1.attendance.attendanceDate);
router.post('/attendance/pupil', ceo_1.attendance.attendancePupil);
//# sourceMappingURL=index.js.map