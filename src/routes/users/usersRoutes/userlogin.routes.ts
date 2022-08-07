import { Router } from "express";
import UserLoginController from "../../../controller/ceo/userlogin.controller";

const userlogincontroller = new UserLoginController()

const router = Router()

// Method: POST     Descr: Create login and password for users
router.post('/login', userlogincontroller.login)

export default router