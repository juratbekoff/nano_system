import express from "express";
import cors from 'cors'

// Imports Ceo Routes
import ceoAppRoutes from "./ceoRoutes/application.routes"
import ceoAttendanceRoutes from "./ceoRoutes/attendance.routes"
import ceoContactsRoutes from "./ceoRoutes/contacts.routes"
import ceoUserLoginRoutes from "./ceoRoutes/userlogin.routes"

const ceoRouter = express()

ceoRouter.use(cors())
ceoRouter.use(express.json())
ceoRouter.use(express.urlencoded( { extended: true }))

// Ceo
ceoRouter.use('/application', ceoAppRoutes)
ceoRouter.use('/attendance', ceoAttendanceRoutes)
ceoRouter.use('/', ceoContactsRoutes)
ceoRouter.use('/set', ceoUserLoginRoutes)

export default ceoRouter




