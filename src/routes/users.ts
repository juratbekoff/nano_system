import { Router } from "express"
import { application, suggestion} from "./../controller/users/"

const router = Router()

// application routes
router.post('/application', application.application)

// suggestion routes
router.post('/suggestion', suggestion.suggestion)


export default router

