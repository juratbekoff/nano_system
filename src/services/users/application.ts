import { PrismaClient, application } from "@prisma/client";

const client = new PrismaClient()

class AppService {
    constructor() {
    }

    async applicationSystem(application:application): Promise<application> {
        return client.application.create({
            data: {
                appname: application.appname,
                message: application.message,
                system: application.system,
            }
        })
        
    }

    async applicationTeachers(application:application): Promise<application> {
        return client.teachersApplication.create({
            data: {
                appname: application.appname,
                message: application.message,
                system: application.system,
            }
        })
        
    }
}

export default AppService