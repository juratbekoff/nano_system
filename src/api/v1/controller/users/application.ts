import { application } from "@prisma/client";
import { Request, Response } from "express";
import AppService from "../../services/users/application";

const appService = new AppService()

// Not completely set!

class AppController {

    async application(req: Request, res: Response) {
        try {
            let application: application = {
                id: 0,
                appname: req.body.appname,
                teachername: req.body.teachername,
                message: req.body.message,
                userID: req.body.userID,
            }

            let app = await appService.application(application)
            return res.status(200).send({ message: 'Application has been sent!', application: app })
        } catch (error) {
            console.log(error);
            return res.status(500).send({ message: "Internal Server Error!" })
        }
    }
}

export default AppController