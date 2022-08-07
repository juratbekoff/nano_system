// import section
import { Router } from "express";
import AppCeoController from "../../../controller/ceo/application.controller";

const appCeoController =  new AppCeoController()
const router = Router()

// System
// Method: GET     Descr: Get Application which is for system
router.get('/system', appCeoController.applicationSystem)


// Teachers     
// Method: GET     Descr: Get Application which is for teachers
router.get('/teachers', appCeoController.applicationTeachers)

export default router