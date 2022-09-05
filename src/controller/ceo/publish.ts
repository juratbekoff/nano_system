import { Request, Response } from "express";
import NewsPublish from "../../services/ceo/publish";
import multer from "multer";
import { v4 as uuid } from "uuid"
import { category, newsPublish } from "@prisma/client";

const publishing = new NewsPublish()

class NewsPublishController {
    constructor() { }

    // news
    async createPublish(req: Request, res: Response) {
        try {
            let file = req.file!
            let publish: newsPublish = {
                id: 0,
                image: file.filename,
                title: req.body.title,
                message: req.body.message,
                date: new Date().toLocaleString(),
                category_id: req.body.category_id
            }

            await publishing.createPublish(publish)
                .then(publish => res.send({ message: 'News successfully uploaded!', publish }))
        } catch (error) {
            console.log(error);
            return res.status(500).send({ message: "Internal Server Error!" })
        }
    }

    async getAllPublished(req: Request, res: Response) {
        try {
            await publishing.getAllPublished()
                .then(publish => res.send({ message: 'All publishes!', publish }))
        } catch (error) {
            console.log(error);
            return res.status(500).send({ message: "Internal Server Error!" })
        }
    }

    async getPublishedById(req: Request, res: Response) {
        try {
            await publishing.getPublishedById(+req.params.id)
                .then(publish => res.send({ message: `This ${+req.params.id} deleted from newsPublish table!`, publish }))
        } catch (error) {
            console.log(error);
            return res.status(500).send({ message: "Internal Server Error!" })
        }
    }

    //category
    async createCategory(req: Request, res: Response) {
        try {
            let category: category = {
                id: 0,
                name: req.body.name
            }

            let createdCategory = await publishing.createCategory(category)
            return res.status(200).json({ message: "Category successfully added!", createdCategory })
        } catch (error) {
            console.log(error);
            return res.status(500).send({ message: "Internal Server Error!" })
        }
    }

    async getAllCategories(req: Request, res: Response) {
        
            let categories = await publishing.getAllcats()
            return res.status(200).json({ message: 'Retrieved all categries!', categories })
    }

}

export default NewsPublishController