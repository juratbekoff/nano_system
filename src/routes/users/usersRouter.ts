import express from "express";
import cors from 'cors'

// Import Users Routes
import applicationRoutes from "./usersRoutes/application.routes"
import userloginroutes from "./usersRoutes/userlogin.routes"

const usersRouter = express()

usersRouter.use(cors())
usersRouter.use(express.json())
usersRouter.use(express.urlencoded( { extended: true }))

// users
usersRouter.use(applicationRoutes)
usersRouter.use(userloginroutes)

export default usersRouter

