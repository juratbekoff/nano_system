import { PrismaClient, application, user } from "@prisma/client";
const client = new PrismaClient()

class AppService {

    async application(application:application): Promise<application> {
        return client.application.create({
            data: {
                appname: application.appname, 
                teachername: application.teachername,
                message: application.message, 
                userID: application.userID,
            }
        }
      )
    }
}

export default AppService