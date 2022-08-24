import { PrismaClient, newsPublish } from "@prisma/client";

const client = new PrismaClient()

class NewsPublish {
    constructor() {}

    async createPublish (publish: newsPublish): Promise<newsPublish> {
        return client.newsPublish.create({
            data: {
                image: publish.image,
                title: publish.title,
                message: publish.message,
                date: publish.date
            }
        })
    }

    async getAllPublished () {
        return await client.newsPublish.findMany()
    }

    async getPublishedById (incomingId: number): Promise<newsPublish | null> {
        return await client.newsPublish.findUnique({
            where: {
                id: incomingId
            }
        })
    }

    async deleteAllPublished () {
        return await client.newsPublish.deleteMany()
    }

    async deletePublishedById (incomingId: number): Promise<newsPublish | null>  {
        return await client.newsPublish.delete({
            where: {
                id: incomingId
            }
        })
    }

}

export default NewsPublish