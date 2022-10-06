import { teacher} from "@prisma/client"
import { Request, Response } from "express"
import jwt from 'jsonwebtoken'
import teacherLoginServices  from "../../../services/ceo/logins/teacher"

const teacherlogins = new teacherLoginServices()

class TeacherLoginController {

        async setTeacherLogin(req: Request, res: Response) {
            try {
                let ceologs: teacher = {
                    id: 0, 
                    name: req.body.name, 
                    login: req.body.login, 
                    password: req.body.password,
                    role: req.body.role }

                let findCeoLogin = await teacherlogins.findTeacherLogin(ceologs.login)
                
                if(ceologs.login.length < 3) {
                    return res.status(400).send({message: 'login must be at least 5 symbols!'})} 
                
                if(ceologs.password.length <3) {
                    return res.status(400).send({message: 'password must be at least 5 symbols!'})}
                
                if(findCeoLogin) {
                    return res.status(403).send({message: `Sorry! This '${ceologs.login}' login is already exicted! Please! Change login's value!`})}    

                let login =  await teacherlogins.createTeacherlogin(ceologs)
                    return res.status(200).send({ message: 'User successfuly created!', user: login})
            } catch (error) {
                console.log(error);
                    return res.status(500).json({message: "Internal Server Error!", error})
        }}

        async teacherLogin(req: Request, res: Response) {
            try {
                let { login, password } = req.body
                    let logsin = await teacherlogins.findTeacherLogin(login)
                
                if (!logsin) {
                    return res.status(404).send({success: 0, data: "Incorrect login!"})}
            
                if(logsin.password !== password) {
                    return res.status(404).json({message: 'Incorrect password!'})}

                const jsontoken = jwt.sign({ result: logsin}, 'qwert1', {expiresIn: "1y"})
                    return res.status(200).send({ 
                        message: "login successfully!", 
                        token: jsontoken, 
                        role: logsin.role, 
                        teacherInform: logsin });

            } catch (error) {
                console.log(error);
                    return res.status(500).send({ message: "Internal Server Error!"})
        }}

        async findAllTeacherLogins (req: Request, res: Response) {
            try {
                await teacherlogins.findAllTeacherLogin()
                    .then(logins => res.status(200).send( { message: 'All Logins get from the database!', logins}))
            } catch (error) {
                console.log(error);
                return res.status(500).send(error)
            }
        }
        
        async deleteTeacherLoginById (req:Request, res: Response) {
            try {
                await teacherlogins.deleteTeacherLoginByID(+req.params.id)
                  return res.status(200).send( { message: `This ${+req.params.id} successfully deleted from the teacherlogin's table`})
            } catch (error) {
                console.log(error);
                  return res.status(500).send(error)
            }
        }  

        // teacher inform by ID
        async findByTeacherID (req: Request, res: Response) {
            try {
                await teacherlogins.findByteacherID(+req.params.id)
                    .then(logins => res.status(200).send( { message: `This ${+req.params.id} get from the teacherlogin's table`, logins}))
            } catch (error) {
                console.log(error);
                return res.status(500).send(error)
            }
        }

}

export default TeacherLoginController

    


