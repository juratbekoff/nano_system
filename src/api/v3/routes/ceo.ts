import { Router } from "express";
import { role } from "../controllers/index"

const router = Router()

router.post('/role', role.createRole)


export default router