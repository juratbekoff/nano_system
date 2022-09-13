import { Request, Response } from "express";
import AppCeoService from "../../services/ceo/application";

const appCeoService = new AppCeoService()

class AppCeoController {

    async getApplication(req: Request,res: Response) {
        try {
          let applications =  await appCeoService.getApplications()
                return res.status(200).send({ message: 'All applications retrieved!', applications: applications})
        } catch (error) {
            return res.status(500).send({ message: "Internal Server Error!", error})
        }    
    } 
    
    async deleteAppByID(req: Request, res: Response) {
        try {
            let oldID = await appCeoService.getAppById(+req.params.id)
                if(!oldID?.id) return res.status(404).send({ message: `Sorry! We cannot find id = ${+req.params.id}! This ID is already deleted from the database!`})
                    await appCeoService.deleteAppById(+req.params.id)
                        res.status(200).send({ message: `ID ${+req.params.id} - deleted  from the database!`})
        } catch (error) {
            console.log(error);
                return res.status(500).send({ message: 'Internal Server Error', error})
        }  
    }

    async deleteAllApps(req: Request, res: Response) {
        try {
            await appCeoService.deleteAllApps()            
                 return res.status(200).send({ message: "All applications deleted!"})
        } catch (error) {
            console.log(error);
                return res.status(500).send({ message: 'Internal Server Error', error})
        }  
    }

    async applicationById(req: Request,res: Response) {
        try {
            let application = await appCeoService.applicationById(+req.params.id)
                return res.status(200).send({ message: `ID ${+req.params.id} application!`, application})
        } catch (error) {
            console.log(error);
            return res.status(500).send({  message: "Internal Server Error!", error})
        }  
    }
}

export default AppCeoController
