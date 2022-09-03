import { PrismaClient, application, user } from "@prisma/client";
const client = new PrismaClient()

class AppService {
    constructor() {}

    async application(application:application): Promise<application> {
        return client.application.create({
            data: {
                appname: application.appname, 
                message: application.message, 
                system: application.system, 
                userId: application.userId
            }
        }
      )
    }
}

export default AppService