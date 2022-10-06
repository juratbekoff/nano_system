import { Router } from "express";
import TestPractise from "./tesUser";

const testuser =  new TestPractise()
const router = Router()

// users
router.post('/user', testuser.createUser)
router.get('/user', testuser.getAllUsers)

// permissions
router.post('/perm', testuser.createPerm)
router.get('/perm', testuser.getAllPerms)


export default router