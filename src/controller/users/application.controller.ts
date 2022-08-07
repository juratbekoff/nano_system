import { application } from "@prisma/client";
import { Request, Response } from "express";
import AppService from "../../services/users/application.service";

const appService = new AppService()

// Not completely set!

class AppController {
      
    async application(req: Request,res: Response) {
        try {
          let application = {
              id:0,
              appname: req.body.appname,
              message: req.body.message,
              system: req.body.system
          }
      
          if(application.system.valueOf() === 'Ustozlar') {

            await appService.applicationSystem(application)
             
            return res.status(200).json({
                  message: 'Success! Ustozlar'
                })
          }
          
          if(application.system.valueOf() === 'Tizim') {
            
              appService.applicationTeachers(application)
      
              return res.status(200).json({
                  message: 'Success! System'
              })
              
          }

          
        } catch (error) {
          console.log(error)
        }  
  }
}

export default AppController