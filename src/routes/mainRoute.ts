import express from "express";
import cors from 'cors'

// Imports User Router
import usersRouter from "./users/usersRouter";

// Imports Ceo Router
import ceoRouter from "./ceo/ceoRouter";

const mainRoute = express()

mainRoute.use(cors())
mainRoute.use(express.json())
mainRoute.use(express.urlencoded( { extended: true }))

mainRoute.use('/ceo', ceoRouter)
mainRoute.use('/users', usersRouter)


export default mainRoute

