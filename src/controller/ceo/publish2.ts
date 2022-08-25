import { PrismaClient, newsPublish } from "@prisma/client";
import { Request, Response } from "express";
import NewsPublish from "../../services/ceo/publish";

const publishing = new NewsPublish()

const client = new PrismaClient()

class NewsPublish2 {
    constructor() {}

    async createPublish2 (req: Request, res: Response) {
        try {
            let publish: newsPublish = {
                id: 0,
                image: req.body.image,
                title: req.body.title,
                message: req.body.message,
                date: new Date().toLocaleString()
            }
            
            await publishing.createPublish(publish)
                .then(publish => res.send( { message: 'News successfully uploaded!', publish}))    
        } catch (error) {
            console.log(error);
            return res.status(500).send({ message: "Internal Server Error!"})
        }
    }    
}

export default NewsPublish2