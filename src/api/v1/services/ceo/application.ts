import { PrismaClient, application } from "@prisma/client";

const client = new PrismaClient()

class AppCeoService {
    constructor() { }

    // System
    async getApplications(): Promise<application[] | null> {
        return await client.application.findMany()
    }

    async deleteAppById(incomingId: number): Promise<application> {
        return await client.application.delete({ where: { id: incomingId } })
    }

    async deleteAllApps() {
        await client.application.deleteMany()
    }

    async getAppById(incomingId: number): Promise<application | null> {
        return await client.application.findUnique({ where: { id: incomingId } })
    }

    async applicationById(incomingId: number): Promise<application | null> {
        return client.application.findUnique({
            where: {
                id: incomingId
            }
        })
    }
}

export default AppCeoService
