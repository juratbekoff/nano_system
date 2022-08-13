import { PrismaClient, userLogin, ceologin } from "@prisma/client";

const client = new PrismaClient()

export class Userlogin {
    constructor(){}

    async userLogin(login: userLogin): Promise<userLogin> {
        return await client.userLogin.create({data: { login: login.login,password: login.password}})}
    
    async deleteUserLogin () {
        return await client.userLogin.deleteMany()}
}


export class Ceologin {
    constructor(){}

    async ceoLogin(login: ceologin): Promise<ceologin> {
        return await client.ceologin.create({data:{login: login.login, password: login.password, role: login.role}})}      

    async deleteCeoLogin(){
        return await client.ceologin.deleteMany()}    

    async findCeoLogin(login:string): Promise<ceologin | null> {
        return await client.ceologin.findFirst({where: {login: login}})}
}






