import { Request, Response } from "express";
import AppService from "../../services/users/application";

const appService = new AppService()

// Not completely set!

class AppController {
      
    async application(req: Request,res: Response) {
        try {
            let application = { id:0, appname: req.body.appname,message: req.body.message, system: req.body.system }            
            
            if(application.system.valueOf() === 'Ustozlar') {
                await appService.applicationSystem(application)
                  return res.status(200).json({message: 'Success! Your message has been sent to Ustozlar section! '})
            }
            
            if(application.system.valueOf() === 'Maktab tizimi') {
                await appService.applicationTeachers(application)
                  return res.status(200).json({message: 'Success! Your message has been sent to System section!'}) 
            }
        } catch (error) {
            return res.status(500).send({  message: "Internal Server Error!", error})
        }  
    }
}

export default AppController