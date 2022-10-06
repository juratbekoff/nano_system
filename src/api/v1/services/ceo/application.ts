import { PrismaClient, application } from "@prisma/client";

const client = new PrismaClient()

class AppCeoService {
    
    // System
    async getApplications() {
      return await client.application.findMany({
            select: {
                id: true,
                appname: true,
                message: true,
                teachername: false,
                user: false,
                userID: false
            }
        })       
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
