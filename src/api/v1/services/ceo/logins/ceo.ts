import { PrismaClient, user, ceo } from "@prisma/client";

const client = new PrismaClient()

class ceoLoginServices {

    async createCeologin(login: ceo){
        return await client.ceo.create({
            data:{
                login: login.login, 
                name: login.name,
                password: login.password, 
                role: login.role
            }
        }
    )}      

    async findAllCeoLogin(): Promise<ceo[] | null> {
        return await client.ceo.findMany()
    }

    async findCeoLogin(login:string): Promise<ceo | null> {
        return await client.ceo.findFirst({
            where: {
                login: login
            }
        }
    )}

    async deleteCeoLoginByID (incomingId: number): Promise<ceo | null> {
        return client.ceo.delete({where: {id: incomingId}}
    )}
    
    // archieve for next purposes!
    async findByUserID(incomingId: number) {
        return client.teacher.findUnique({
            select: {
                id: true,
                name: true,
                login: false,
                password: false,
                role: false,
            },
            where: {
                id: incomingId
            }
        })
    }
}


export default ceoLoginServices