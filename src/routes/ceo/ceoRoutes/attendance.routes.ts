// import section
import { Router } from "express";
import AttendanceCeoController from "../../../controller/ceo/attendance.controller";

const attendanceCeoController = new AttendanceCeoController()
const router = Router()

// Method:POST;   Descr: Create date for attendance (by hand)
router.post('/date', attendanceCeoController.attendanceDate)

// Method:POST;   Descr: Create pupil for attendance
router.post('/pupil', attendanceCeoController.attendancePupil)


export default router