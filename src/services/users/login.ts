import { PrismaClient } from "@prisma/client";
const client = new PrismaClient()

class Userlogin {
    constructor(){}
       
    async findUserLogin(login:string){
        return await client.userLogin.findFirst({where: {login: login}})}
}

export default Userlogin

