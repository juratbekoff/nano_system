import AppController from "../../../controller/users/application.controller";
import { Router } from "express";

const appController = new AppController()
const router = Router();

//Methdo: POST      Descr: create post application for   
router.post('/application', appController.application)

export default router