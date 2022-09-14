import express from "express";
import cors from 'cors'
import ceoRoute from "./ceo";

const router = express()

router.use(cors())
router.use(express.json())
router.use(express.urlencoded( { extended: true }))

router.use('/ceo', ceoRoute)

export default router

