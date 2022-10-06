import { PrismaClient, teacher } from "@prisma/client";

const client = new PrismaClient()

class TeacherLoginServices {

    async createTeacherlogin(login: teacher){
        return await client.teacher.create({
            data:{
                login: login.login, 
                name: login.name,
                password: login.password, 
                role: login.role
            }
        }
    )}      

    async findAllTeacherLogin(): Promise<teacher[] | null> {
        return await client.teacher.findMany()
    }

    async findTeacherLogin(login:string): Promise<teacher | null> {
        return await client.teacher.findFirst({
            where: {
                login: login
            }
        }
    )}

    async deleteTeacherLoginByID (incomingId: number): Promise<teacher | null> {
        return client.teacher.delete({where: {id: incomingId}}
    )}


    // teacher inform by ID
    async findByteacherID(incomingId: number) {
        return client.teacher.findUnique({
            select: {
                id: true,
                name: true,
                applications: {
                    select: {
                        id: true,
                        appname: true,
                        teachername: true,
                        message: true,
                        userID: false
                    }
                },
                login: false,
                password: false,
                role: false,
                _count: {
                    select: {
                        applications: true,
                    }
                },
            },
            where: {
                id: incomingId
            }
        })
    }
}

export default TeacherLoginServices