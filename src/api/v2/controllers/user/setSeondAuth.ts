import { second_auth } from "@prisma/client";
import { Request, Response } from "express";
import SecondAuth from "../../services/users/setSecondAuth";

const second_auth = new SecondAuth()

class SecondAuthController {

    async createSecondAuth (req: Request, res: Response) {
        try {
            
            let auth: second_auth = {
                id: 0,
                password: req.body.password,
                userId: req.body.userId
            }

            if(!auth.password || !auth.userId) return 'Please! fill in all fields!'

            let authS = second_auth.createAuth(auth)
                return res.status(200).json({ message: 'Second Auth is setted!', inform: authS })

        } catch (error) {
            console.log(error);
            return res.status(500).send({ message: 'Internal Server Error!', error})
        }
    }

}

export default SecondAuthController