import { PrismaClient, userLogin, ceologin, ceoLogin } from "@prisma/client";

const client = new PrismaClient()

export class loginServices {
    constructor(){}

    async login(login: ceologin): Promise<ceologin> {
        return await client.ceologin.create({data:{login: login.login, fullname: login.fullname, password: login.password, role: login.role}})}      

    async findAllLogin(): Promise<ceologin[] | null> {
        return await client.ceologin.findMany()}

    async findLogin(login:string): Promise<ceologin | null> {
        return await client.ceologin.findFirst({where: {login: login}})}
    
    async deleteLogin() {
        return await client.ceologin.deleteMany()}        

    async deleteLoginById (incomingId: number): Promise<ceoLogin | null> {
        return client.ceologin.delete({where: {id: incomingId}})}

}






