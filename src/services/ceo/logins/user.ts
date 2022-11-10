import { PrismaClient, user } from "@prisma/client";

const client = new PrismaClient()

class UserLoginServices {

    async createUserlogin(login: user){
        return await client.user.create({
            data:{
                login: login.login, 
                fullname: login.fullname,
                password: login.password, 
                role: login.role
            }
        }
    )}      

    async findAllUserLogin(): Promise<user[] | null> {
        return await client.user.findMany()
    }

    async findUserLogin(login:string) {
        return await client.user.findFirst({
            where: {
                login: login
            },
            select: {
                id: true,
                fullname: true,
                applications: true,
                suggestions: true,
                password: true,
                role: true,
                _count: true
            }
            
        }
    )}

    async deleteUserLoginByID (incomingId: number): Promise<user | null> {
        return client.user.delete({where: {id: incomingId}}
    )}

    async deleteAllLogins () {
        return await client.user.deleteMany()
    }

    async updateUserLogin(id: number, password: string): Promise<user | null> {
        return await client.user.update({
            where: {
                id
            },
            data: {
                password
            }
        })
    }


    async findByUserID(incomingId: number) {
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
    
    async filterUserByQuery(fullname: string): Promise<user[] | null> {
        return await client.user.findMany({
           where: {
               fullname: {
                    contains: fullname,
                    mode: "insensitive"    
               }
           }
        })
    }

    

    

    
}

export default UserLoginServices