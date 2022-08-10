import { Router } from "express"
import { application, userlogin } from "./../controller/users/"

const router = Router()

// application routes
router.post('/application', application.application)

// userslogin routes
router.post('/login', userlogin.login)

export default router

