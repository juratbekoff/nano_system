import { Request, Response } from "express";
import NewsPublish from "../../services/ceo/publish";
import multer from "multer";
import { v4 as uuid} from "uuid"
import { newsPublish} from "@prisma/client";

const publishing = new NewsPublish()

class NewsPublishController {
    constructor() {}

    async createPublish (req: Request, res: Response) {
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

    async getAllPublished ( req: Request, res: Response) {
        try {
            await publishing.getAllPublished()
                .then(publish => res.send( { message: 'All publishes!', publish}))    
        } catch (error) {
            console.log(error);
            return res.status(500).send({ message: "Internal Server Error!"})
        }
    }

    async getPublishedById (req: Request, res: Response) {
        try {
            await publishing.getPublishedById(+req.params.id)
                .then(publish => res.send( { message: `This ${+req.params.id} deleted from newsPublish table!`, publish}))    
        } catch (error) {
            console.log(error);
            return res.status(500).send({ message: "Internal Server Error!"})
        }
    }

}


export default NewsPublishController