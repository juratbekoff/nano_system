import { user} from "@prisma/client"
import {  Request, Response } from "express"
import jwt from 'jsonwebtoken'
import userLoginServices  from "../../../services/ceo/logins/user"

const userlogins = new userLoginServices()

class UserLoginController {

        async setUserLogin(req: Request, res: Response) {
            try {
                let ceologs: user = {
                    id: 0, 
                    fullname: req.body.fullname, 
                    login: req.body.login, 
                    password: req.body.password,
                    role: req.body.role }

                let findCeoLogin = await userlogins.findUserLogin(ceologs.login)
                
                if(ceologs.login.length < 3) {
                    return res.status(400).send({message: 'login must be at least 5 symbols!'})} 
                
                if(ceologs.password.length <3) {
                    return res.status(400).send({message: 'password must be at least 5 symbols!'})}
                
                if(findCeoLogin) {
                    return res.status(403).send({message: `Sorry! This '${ceologs.login}' login is already exicted! Please! Change login's value!`})}    

                let login =  await userlogins.createUserlogin(ceologs)
                    return res.status(200).send({ message: 'User successfuly created!', user: login})
            } catch (error) {
                console.log(error);
                    return res.status(500).json({message: "Internal Server Error!", error})
        }}
        
        async userLogin(req: Request, res: Response) {
            try {
                let { login, password } = req.body
                        let logsin = await userlogins.findUserLogin(login)
                    
                    if (!logsin) {
                        return res.status(404).send({success: 0, data: "Incorrect login!"})}
                
                    if(logsin.password !== password) {
                        return res.status(404).json({message: 'Incorrect password!'})}
    
                    const jsontoken = jwt.sign({ result: logsin}, 'qwert1', {expiresIn: "1y"})
                        return res.status(200).send({ 
                            message: "login successfully!", 
                            token: jsontoken, 
                            role: logsin.role,
                            id: logsin.id,
                            fullname: logsin.fullname,
                            applications: logsin.applications,
                            suggestions: logsin.suggestions,
                            applications_count: logsin._count.applications,
                            suggestions_count: logsin._count.suggestions
                         });
    
                } catch (error) {
                    console.log(error);
                        return res.status(500).send({ message: "Internal Server Error!"})
        }}
            
        async findAllUserLogins (req: Request, res: Response) {
            try {
                await userlogins.findAllUserLogin()
                    .then(logins => res.status(200).send( { message: 'All Logins get from the database!', logins}))
            } catch (error) {
                console.log(error);
                return res.status(500).send(error)
            }
        }
        
        async deleteUserLoginById (req:Request, res: Response) {
            try {
                await userlogins.deleteUserLoginByID(+req.params.id)
                  return res.status(200).send( { message: `This ${+req.params.id} successfully deleted from the ceologin's table`})
            } catch (error) {
                console.log(error);
                  return res.status(500).send(error)
            }
        }  

        // user iform by ID
        async findByUserID (req: Request, res: Response) {
            try {
               await userlogins.findByUserID(+req.params.id)
                    .then(userInfo => res.status(200).send( { message: `ID ${+req.params.id} pupil's inform!`, userInfo}))
            } catch (error) {
                console.log(error);
                    return res.status(500).send({message: 'Internal Server Error!', error})
            }
        }
}


export default UserLoginController

