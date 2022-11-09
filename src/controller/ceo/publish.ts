import { Request, Response } from "express";
import NewsPublish from "../../services/ceo/publish";
import { category, newsPublish } from "@prisma/client";

const publishing = new NewsPublish()
    
class NewsPublishController {

    // news
    async createPublish(req: Request, res: Response) {
        try {
            let file = req.file!
            let publish: newsPublish = {
                id: 0,
                image: file.filename,
                title: req.body.title,
                message: req.body.message,
                date: new Date().toString(),
                category_id: +req.body.category_id
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
                .then(publish => res.send({ message: 'All news!', publish }))
        } catch (error) {
            console.log(error);
            return res.status(500).send({ message: "Internal Server Error!" })
        }
    }

    async getAllCategoryWithNews (req: Request, res: Response) {
        try {
            await publishing.getAllNewsWithCategory()
                .then(publish => res.send({ message: 'next categorys!!!', publish }))
        } catch (error) {
            console.log(error);
            return res.status(500).send({ message: "Internal Server Error!" })
        }
    }
    
    async getPublishedById(req: Request, res: Response) {
        try {
            await publishing.getPublishedById(+req.params.id)
                .then(publish => res.send({ message: `This ${+req.params.id} news!`, publish }))
        } catch (error) {
            console.log(error);
            return res.status(500).send({ message: "Internal Server Error!" })
        }
    }

    async deletePublishedById(req: Request, res: Response) {
        try {
            let id = +req.params.id

            let findNews = await publishing.getPublishedById(id)

            if(!findNews) {
                return res.status(400).send({ message: "News already deleted or not created!"})
            }

            await publishing.deletePublishedById(id)
                .then(publish => res.send({ message: `Id ${+req.params.id} news deleted!`}))
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
            return res.status(500).send({ message: "Internal Server Error!", error})
        }
    }
    
    async getAllCategories(req: Request, res: Response) {
        try {

            let categories = await publishing.getAllcats()

            return res.status(200).json({ message: 'Retrieved all categries!', categories })

        } catch (error) {
            console.log(error);
            return res.send("Internal Server Error!")
        }        
    }

    async deleteCategory(req: Request, res: Response) {
       try {
        
            let id = +req.params.id
            
            let findCategory = await publishing.getCategoryById(id)
            
            if(!findCategory) {
                return res.status(400).send({ message: "Category already deleted or not created!"})
            }

            await publishing.deleteCategory(id)

            return res.status(200).json({ message: `Id ${+req.params.id} category deleted!` })

       } catch (error) {
            console.log(error);
                return res.status(500).send("Internal Server Error!")
       }
    }
}

export default NewsPublishController