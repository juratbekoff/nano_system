import { PrismaClient, userLogin,  user } from "@prisma/client";

const client = new PrismaClient()

export class loginServices {
    constructor(){}

    async login(login: user): Promise<user> {
        return await client.user.create({
            data:{
                login: login.login, 
                fullname: login.fullname, 
                password: login.password, 
                role: login.role
            },
            include: {
                applications: true,
                suggestions: true
            }
        }
    )}      

    async findAllLogin(): Promise<user[] | null> {
        return await client.user.findMany()}

    async findLogin(login:string): Promise<user | null> {
        return await client.user.findFirst({where: {login: login}})}
    
    async deleteLogin() {
        await client.user.deleteMany()
    }        

    async deleteLoginById (incomingId: number): Promise<user | null> {
        return client.user.delete({where: {id: incomingId}})}
    
    async findByUserId(incomingId: number) {

        return client.user.findUnique({
            select: {
                id: true,
                fullname: true,
                applications: true,
                suggestions: true,
                login: false,
                password: false,
                role: false,
                _count: {
                    select: {
                        applications: true,
                        suggestions: true
                    }
                },
            },
            where: {
                id: incomingId
            }
        })
    }
}
