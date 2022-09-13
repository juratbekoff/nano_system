import express from "express";
import cors from 'cors'
import userRoutes from "./user_v2"

const router = express()

router.use(cors())
router.use(express.json())
router.use(express.urlencoded( { extended: true }))

router.use('/user', userRoutes )

export default router

