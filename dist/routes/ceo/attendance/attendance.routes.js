"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
// import section
var express_1 = require("express");
var attendance_controller_1 = __importDefault(require("../../../controller/ceo/attendance.controller"));
var attendanceCeoController = new attendance_controller_1["default"]();
var router = (0, express_1.Router)();
// Method:POST;   Descr: Create date for attendance (by hand)
router.post('/attendance/date', attendanceCeoController.attendanceDate);
// Method:POST;   Descr: Create pupil for attendance
router.post('/attendance/pupil', attendanceCeoController.attendancePupil);
exports["default"] = router;
//# sourceMappingURL=attendance.routes.js.map