import { Router } from "express"
import multer from "multer";
import { v4 as uuid} from "uuid"
import { application, attendance, ceologin, ceoSuggest, publish } from "../controller/ceo";
const router = Router()
import tokenValidation from "./../../../auth/token_validation"

// image uploaders
const storage = multer.diskStorage({destination: (req, file, cb) => {cb(null, './src/uploads/news')},filename: (req,file, cb) => {cb(null, uuid() + '.png')}})
    const upload = multer({storage})

//applciation routes
router.get('/applications', application.getApplication)
router.get('/application/:id', application.applicationById)
router.delete('/application', application.deleteAllApps)
router.delete('/application/:id', application.deleteAppByID)

// suggestion routes
router.get('/suggestions', ceoSuggest.suggestion)
router.get('/suggest', ceoSuggest.searchSuggest)
router.get('/suggestion/:id', ceoSuggest.getSuggestById)
router.delete('/suggestion/:id', ceoSuggest.deleteSuggestById)
router.delete('/suggestions', ceoSuggest.deleteAllSuggest)

// attendance routes
router.post('/attendance/date', attendance.attendanceDate)
router.post('/attendance/pupil', attendance.attendancePupil)

// login routes
router.post('/set/login', ceologin.setLogin)
router.post('/login', ceologin.login)
router.get('/logins', ceologin.findAllLogins)
router.delete('/login/:id', ceologin.deleteLoginById)
router.delete('/logins', ceologin.deleteAllLogins)

// user informs routes
router.get('/user/:id', ceologin.findByUserId)

// news pubilsh
router.post('/news', upload.single('image'), publish.createPublish)
router.get('/news', publish.getAllPublished),
router.get('/news/:id', publish.getPublishedById)

router.post('/category/news', publish.createCategory)
router.get('/categories/news', publish.getAllCategories)

export default router






