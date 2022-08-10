import { Router } from "express"
import { application, userlogin, username } from "./../controller/users/"

const router = Router()

// application routes
router.post('/application', application.application)

// userslogin routes
router.post('/login', userlogin.login)

// username routes
router.post('/username', username.username)

export default router

