import { PrismaClient, userLogin } from "@prisma/client";

const client = new PrismaClient()


class Userlogin {
    constructor(){}

    async userLogin(login: userLogin): Promise<userLogin> {
        return await client.userLogin.create({
            data: {
                login: login.login,
                password: login.password
            }
        })
    }
    
    
    async findUserLogin(login:string){
            return await client.userLogin.findFirst({
            where: {
                login: login,
            }
        })
    }
    
    async deleteUserLogin () {
        return await client.userLogin.deleteMany()
    }
}

export default Userlogin

