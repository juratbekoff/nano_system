import { PrismaClient, Applciation, User } from "@prisma/client";

const client = new PrismaClient()

async function createUser(user: User): Promise<User> {
    return client.user.create({
        data: {
            fullname: user.fullname,
            login: user.login,
            password: user.password,
            role: user.role
        },
        include: {
            applications: true
        }
    }) 
}

async function applciation(app: Applciation): Promise<Applciation> {
    return client.applciation.create({
        data: {
            appname: app.appname,
            message: app.message,
            system: app.system,
            userId: app.userId
        },
        include: {
            user: true
        }
    })
}

// async application(application:Applciation): Promise<Applciation> {
//     return client.applciation.create({
//         data: {
//             appname: application.appname, 
//             message: application.message, 
//             system: application.system, 
//             userId: application.userId
//         },
//         include: {
//             user: true
//         }
//     }
//   )
// }

async function findAllApps() {
    return client.applciation.findMany({
        include: {
           user: true
        }
    })
}

async function userId(incomingId: number): Promise<User[] | null> {
    return client.user.findMany({
        include: {
            _count: {
                select: {
                    applications: true
                }
            },
            applications: true
        },
        where: {
            id: incomingId
        },
    })
}

export default {
    createUser,
    applciation,
    findAllApps,
    userId
}
