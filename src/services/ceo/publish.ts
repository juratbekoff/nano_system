import { PrismaClient, newsPublish, category } from "@prisma/client";

const client = new PrismaClient()

class NewsPublish {
    constructor() { }

    // news
    async createPublish(publish: newsPublish): Promise<newsPublish> {
        return client.newsPublish.create({
            data: {
                image: publish.image,
                title: publish.title,
                message: publish.message,
                date: publish.date,
                category: {
                    connect: {
                        id: publish.category_id
                    }
                }
            }
        })
    }

    async getAllPublished() {
        return await client.newsPublish.findMany()
    }

    async getPublishedById(incomingId: number): Promise<newsPublish | null> {
        return await client.newsPublish.findUnique({
            where: {
                id: incomingId
            }
        })
    }

    async deleteAllPublished() {
        return await client.newsPublish.deleteMany()
    }

    async deletePublishedById(incomingId: number): Promise<newsPublish | null> {
        return await client.newsPublish.delete({
            where: {
                id: incomingId
            }
        })
    }

    // category

    async createCategory(category: category): Promise<category> {
        return client.category.create({
            data: {
                name: category.name
            }
        })
    }

    async getAllcats() {
        return await client.category.findMany({
            include: {
                news: true
            }
        })
    }

}

export default NewsPublish








