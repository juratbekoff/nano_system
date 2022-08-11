import { Request, Response } from "express";
import AppCeoService from "../../services/ceo/application";

const appCeoService = new AppCeoService()

class AppCeoController {

    // System
    async getAppSystem(req: Request,res: Response) {
        try {
            await appCeoService.getSystemApplication()
                .then(application => res.send( { message: 'Get all system ceo applications!', application}))
        } catch (error) {
            return res.status(500).send({ message: "Internal Server Error!", error})
        }    
    } 
    
    async deleteAppSystemByID(req: Request, res: Response) {
        try {
            let oldID = await appCeoService.getSystemAppById(+req.params.id)
                if(!oldID?.id) return res.status(404).send({ message: `Sorry! We cannot find id = ${+req.params.id}! This ID is already deleted from the database!`})
                    await appCeoService.deleteSystemAppById(+req.params.id)
                        res.status(200).send({ message: `ID ${+req.params.id} - deleted  from the database!`})
        } catch (error) {
            res.status(500).send({ message: 'Internal Server Error', error})
        }  
    }

    //Teachers
    async applicationTeachers(req: Request, res: Response) {
        try {
            await appCeoService.getTeachersApplication()
                .then(application => res.send( { message: 'All teachers application!', application}))
        } catch (error) {
            res.status(500).send({ message: 'Internal Server Error', error})
        }
    }

    async deleteAppTeachersById(req: Request, res: Response) {
        try {
            let oldTeacherID = await appCeoService.getTeachersAppById(+req.params.id)
                if(!oldTeacherID?.id) return res.status(404).send({message: `Sorry! We cannot find id = ${+req.params.id}! This ID is already deleted from the database!` })
                    await appCeoService.deleteTeachersAppById(+req.params.id)
                        res.status(200).send({ message: `ID ${+req.params.id} - deleted  from the database!`})
        } catch (error) {
            res.status(500).send({ message: 'Internal Server Error', error})
        }
    }
}

export default AppCeoController