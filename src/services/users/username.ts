import { PrismaClient, userUsername } from "@prisma/client";

const client = new PrismaClient()

class Username {
    constructor(){}

    async username (setUsername: userUsername): Promise<userUsername> {
        return client.userUsername.create({
            data: {
                username: setUsername.username
            }
        })
    }
    
    async findUsername (username: string): Promise<userUsername | null> {
        return client.userUsername.findFirst({
            where: {
                username: username
            }
        })
    }
}

export default Username