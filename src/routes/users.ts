import { Router } from "express"
import { application} from "./../controller/users/"

const router = Router()

// application routes
router.post('/application', application.application)

export default router

