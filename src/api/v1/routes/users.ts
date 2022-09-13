import { Router } from "express"
import { application, suggestion} from "./../controller/users/"
import tokenValidation from "./../../../auth/token_validation"

const router = Router()

// application routes
router.post('/application', application.application)

// suggestion routes
router.post('/suggestion', suggestion.suggestion)

export default router

