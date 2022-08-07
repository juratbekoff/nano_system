import { PrismaClient, application, teachersApplication } from "@prisma/client";

const client = new PrismaClient()

class AppCeoService {
    constructor() {
    }

    async getSystemApplication() : Promise<application[]> {
        return client.application.findMany({})
    }  

    async getTeachersApplication(): Promise<teachersApplication[]> {
        return client.teachersApplication.findMany()
    }
    

}

export default AppCeoService
