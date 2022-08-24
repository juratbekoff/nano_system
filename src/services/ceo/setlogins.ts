import { PrismaClient, userLogin, ceologin } from "@prisma/client";

const client = new PrismaClient()

export class loginServices {
    constructor(){}

    async login(login: ceologin): Promise<ceologin> {
        return await client.ceologin.create({data:{login: login.login, fullname: login.fullname, password: login.password, role: login.role}})}      

    async deleteLogin(){
        return await client.ceologin.deleteMany()}    

    async findLogin(login:string): Promise<ceologin | null> {
        return await client.ceologin.findFirst({where: {login: login}})}
}






