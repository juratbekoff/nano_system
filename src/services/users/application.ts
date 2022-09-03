import { PrismaClient, application, Applciation, User } from "@prisma/client";
const client = new PrismaClient()

class AppService {
    constructor() {}

    async application(application:Applciation): Promise<Applciation> {
        return client.applciation.create({
            data: {
                appname: application.appname, 
                message: application.message, 
                system: application.system, 
                userId: application.userId
            },
            include: {
                user: true
            }
        }
      )
    }
}

export default AppService