import { Router } from "express"
import multer from "multer";
import { v4 as uuid} from "uuid"
import { application, attendance, ceologin, contacts, ceoSuggest, publish, publish2} from "../controller/ceo";
const router = Router()
// image uploaders
const storage = multer.diskStorage({destination: (req, file, cb) => {cb(null, './src/uploads')},filename: (req,file, cb) => {cb(null, uuid() + '.png')}})
    const upload = multer({storage})

// application system routes
router.get('/application/system', application.getAppSystem)
router.delete('/application/system/:id', application.deleteAppSystemByID)

// application teachers routes
router.get('/application/teachers', application.applicationTeachers)
router.delete('/application/teachers/:id', application.deleteAppTeachersById)

// suggestion routes
router.get('/suggestions', ceoSuggest.suggestion)
router.get('/suggest', ceoSuggest.searchSuggest)
router.get('/suggestion/:id', ceoSuggest.getSuggestById)
router.delete('/suggestion/:id', ceoSuggest.deleteSuggestById)
router.delete('/suggestions', ceoSuggest.deleteAllSuggest)

// attendance routes
router.post('/attendance/date', attendance.attendanceDate)
router.post('/attendance/pupil', attendance.attendancePupil)

// contacts-smm
router.post('/contacts-smm', contacts.contactsSMM)
router.get('/contacts-smm', contacts.getAllContactsSMM)
router.put('/contacts-smm/:id', contacts.updateContactsSMM)
router.delete('/contacts-smm/:id', contacts.deleteCSMMById)

// contacts-main
router.post('/contact', contacts.contactsMain)
router.get('/contact', contacts.getAllContacts)
router.put('/contact/:id', contacts.updateContactsMain)
router.delete('/contact/:id', contacts.deleteCMById)

// login routes
router.post('/set/login', ceologin.setLogin)
router.post('/login', ceologin.login)
router.get('/logins', ceologin.findAllLogins)
router.delete('/login/:id', ceologin.deleteLoginById)
router.delete('/logins', ceologin.deleteAllLogins)

// news pubilsh
router.post('/news', publish.createPublish)
router.get('/news', publish.getAllPublished),
router.get('/news/:id', publish.getPublishedById)

export default router






