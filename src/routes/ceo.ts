import { Router } from "express"
import multer from "multer";
import { v4 as uuid} from "uuid"
import { application, ceoLogin, ceoSuggest, publish, teacherLogin, userLogin } from "../controller/ceo";
const router = Router()

// image uploaders
const storage = multer.diskStorage({destination: (req, file, cb) => {cb(null, './src/uploads/news')},filename: (req,file, cb) => {cb(null, uuid() + '.png')}})
    const upload = multer({storage})

//application routes
router.get('/applications', application.getApplication)
router.get('/application/:id', application.applicationById)
router.delete('/applications', application.deleteAllApps)
router.delete('/application/:id', application.deleteAppByID)

// suggestion routes
router.get('/suggestions', ceoSuggest.suggestion)
router.get('/suggest', ceoSuggest.searchSuggest)
router.get('/suggestion/:id', ceoSuggest.getSuggestById)
router.delete('/suggestion/:id', ceoSuggest.deleteSuggestById)
router.delete('/suggestions', ceoSuggest.deleteAllSuggest)

// news routes
router.post('/news', upload.single('image'), publish.createPublish)
router.get('/news', publish.getAllPublished),
router.get('/news/:id', publish.getPublishedById)
router.delete('/news/:id', publish.deletePublishedById)

// category routes
router.post('/category', publish.createCategory)
router.get('/categories/only', publish.getAllCategories)
router.get('/categories', publish.getAllCategoryWithNews),
router.delete('/category/:id', publish.deleteCategory)

// ceoLogin routes
router.post('/set/login', ceoLogin.setCeoLogin)
router.post('/login', ceoLogin.ceoLogin)
router.get('/login', ceoLogin.findAllLogins)
router.delete('/login', ceoLogin.deleteLoginById)

// teacherLogin routes
router.post('/set/teacher/login', teacherLogin.setTeacherLogin)
router.post('/teacher/login', teacherLogin.teacherLogin)
router.get('/teacher/login', teacherLogin.findAllTeacherLogins)
router.delete('/teacher/login', teacherLogin.deleteTeacherLoginById)

// userLogin routes
router.post('/set/user/login', userLogin.setUserLogin)
router.post('/user/login', userLogin.userLogin)
router.get('/user/login', userLogin.findAllUserLogins)
router.delete('/user/login', userLogin.deleteUserLoginById)

// infrom routes for Profile
router.get('/user/:id', userLogin.findByUserID)
router.get('/teacher/:id', teacherLogin.findByTeacherID)

export default router






