import { PrismaClient, user } from "@prisma/client";

const client = new PrismaClient()

export class loginServices {
    constructor(){}

    async login(login: user){
        return await client.user.create({
            data:{
                login: login.login, 
                fullname: login.fullname, 
                password: login.password, 
                role: login.role
            }
        }
    )}      

    async findAllLogin(): Promise<user[] | null> {
        return await client.user.findMany()}

    async findLogin(login:string): Promise<user | null> {
        return await client.user.findFirst({
            where: {
                login: login
            },
            include: {
                applications: true,
                suggestions: true
            }
        }
    )}
    
   async deleteAllLogins()  {
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
                        suggestions: true,
                    }
                },
            },
            where: {
                id: incomingId
            }
        })
    }
}
