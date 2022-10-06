import { PrismaClient, permissions, testUser  } from "@prisma/client";
import e, { Request, Response } from "express";
const client = new PrismaClient()

class TestPractise {

    async createPerm(req: Request, res: Response) {  
        try {
            
            let permissions: permissions = {
                id: 0,
                name: req.body.name,
            }

           let permission =  await client.permissions.create({
                data: {
                    name: permissions.name,
                }
            })

            return res.status(200).send({ message: 'Permission is created!', permission})

        } catch (error) {
            console.log(error);
            return res.status(200).send(error)
        }
      
    }

    async getAllPerms (req: Request, res: Response) {
        try {
            let perms = await client.permissions.findMany()

            return res.status(200).send({ message: 'All perms!', permissions: perms})
        } catch (error) {
            console.log(error);
            return res.status(200).send({message: 'ISE', error})
        }
    }

    async createUser (req: Request, res: Response) {
        try {
            let user: testUser = {
                id: 0,
                fullname: req.body.fullname,
                login: req.body.login,
                password: req.body.password,
            }

            let users = await client.testUser.create({
                data: {
                    fullname: user.fullname,
                    login: user.login,
                    password: user.password
                }
            })

            return res.status(200).send({ message: 'User created!', users})
            
        } catch (error) {
            console.log(error);
                return res.status(200).send({ message: 'ISE', error})
        }
    }

    async getAllUsers (req: Request, res: Response) {
        try {
            let users = await client.testUser.findMany({
                select: {
                    id: true,
                    fullname: true,
                    login: false,
                    password: false,
                    permissions: true
                }
            })

            return res.status(200).send({ message: 'All Users', users})
        } catch (error) {
            console.log(error);
            return res.status(200).send({ message: 'ISE', error})
        }
    }

}


export default TestPractise