import { Request, Response } from "express";
import AppCeoService from "../../services/ceo/application.service";

const appCeoService = new AppCeoService()

class AppCeoController {

    async applicationSystem(req: Request,res: Response) {
        try {
            appCeoService.getSystemApplication()
                .then(application => res.send( { message: 'Get all system ceo applications!', application}))
        } catch (error) {
            console.log(error)
        }    
    }
    
    async applicationTeachers(req: Request, res: Response) {
        try {
            appCeoService.getTeachersApplication()
                .then(application => res.send( { message: 'Get all teachers applications!', application}))
        } catch (error) {
            console.log(error)
        }
    }
}

export default AppCeoController