import { PrismaClient, application, Applciation } from "@prisma/client";

const client = new PrismaClient()

class AppCeoService {
    constructor() { }

    // System
    async getApplications(): Promise<Applciation[] | null> {
        return await client.applciation.findMany()
    }

    async deleteAppById(incomingId: number): Promise<Applciation> {
        return await client.applciation.delete({ where: { id: incomingId } })
    }

    async deleteAllApps() {
        await client.applciation.deleteMany()
    }

    async getAppById(incomingId: number): Promise<Applciation | null> {
        return await client.applciation.findUnique({ where: { id: incomingId } })
    }

    async applicationById(incomingId: number): Promise<Applciation | null> {
        return client.applciation.findUnique({
            where: {
                id: incomingId
            },
            include: {
                user: true
            }
        })
    }
}

export default AppCeoService
