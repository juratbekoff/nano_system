import { NextFunction, Request, Response } from "express";

   export default function accessPortector(req: Request, res: Response, next: NextFunction) {
        try {
            let access = req.header("X-Access-Key")

            console.log(access);
            
            if(access !== process.env.PROTECT_ACCESS_KEY) return res.status(401).json({ message: 'Unauthorized!'})

            if(process.env.PROTECT_ACCESS_KEY === access) {
              next()  
            } 
            
        } catch (error) {
            console.log(error);
                return res.status(200).send({ message: 'ISE', error})
        }
    }
