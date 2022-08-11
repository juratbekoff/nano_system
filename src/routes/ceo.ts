import { Router } from "express"
import multer from "multer";
import { v4 as uuid} from "uuid"
import { application, attendance, setuserlogin, contacts} from "../controller/ceo";

const router = Router()
const storage = multer.diskStorage({destination: (req, file, cb) => {cb(null, './src/uploads/contacts_smm')},filename: (req,file, cb) => {cb(null, uuid() + '.png')}})
const upload = multer({storage})

// application system routes
router.get('/application/system', application.getAppSystem)
router.delete('/application/system/:id', application.deleteAppSystemByID)

// application teachers routes
router.get('/application/teachers', application.applicationTeachers)
router.delete('/application/teachers/:id', application.deleteAppTeachersById)

// attendance routes
router.post('/attendance/date', attendance.attendanceDate)
router.post('/attendance/pupil', attendance.attendancePupil)

// setuserlogin routes
router.post('/set/user/login', setuserlogin.setUserLogin)

// contacts routes
router.post('/contacts-smm', upload.single('img'), contacts.contactsSMM)

export default router







