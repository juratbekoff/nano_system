import express from "express";
import cors from 'cors'
import usersRoutes from "./users";
import ceoRoutes from "./ceo";

const router = express()

router.use(cors())
router.use(express.json())
router.use(express.urlencoded( { extended: true }))

router.use('/ceo',  ceoRoutes)
router.use('/user',  usersRoutes)

export default router

