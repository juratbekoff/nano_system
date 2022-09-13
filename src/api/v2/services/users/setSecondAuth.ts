import { PrismaClient, second_auth} from "@prisma/client";

const client =  new PrismaClient()

class SecondAuth {

    async createAuth(auth: second_auth): Promise<second_auth> {
            return client.second_auth.create({
                data: {
                    password: auth.password,
                    userId: auth.userId
                }
            })
    }
}

export default SecondAuth