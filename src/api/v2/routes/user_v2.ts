import { Router } from "express";
import { createSecondAuth } from "../controllers/user/index"

const router = Router()


// second authorization
router.post('/second-auth', createSecondAuth.createSecondAuth)


export default router