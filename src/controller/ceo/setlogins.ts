import { ceologin, userLogin } from "@prisma/client"
import e, { NextFunction, Request, Response } from "express"
import bcrypt, { hashSync } from 'bcrypt';
import jwt from 'jsonwebtoken'
import { loginServices } from "../../services/ceo/setlogins"

const ceologin = new loginServices()

export class LoginController {
    constructor(){}

        async setLogin(req: Request, res: Response) {
            try {
                let ceologs: ceologin = {id: 0, fullname: req.body.fullname, login: req.body.login, password: req.body.password,role: req.body.role}
                    let findCeoLogin = await ceologin.findLogin(ceologs.login)
                if(ceologs.login.length < 3) {
                    return res.status(400).send({message: 'login must be at least 5 symbols!'})} 
                if(ceologs.password.length <3) {
                    return res.status(400).send({message: 'password must be at least 5 symbols!'})}
                if(findCeoLogin) {
                    return res.status(403).send({message: `Sorry! This '${ceologs.login}' login is already exicted! Please! Change login's value!`})}    
                // let salt = bcrypt.genSaltSync(10)    
                //         ceologs.password = hashSync(ceologs.password, salt)
                //             ceologs.role = hashSync(ceologs.role, salt)
                 await ceologin.login(ceologs)
                    .then(login => res.send( { message: 'Successfully setted!', login}))
            } catch (error) {
                console.log(error);
                res.status(500).json({message: "Internal Server Error!"})
            }}

        async login(req: Request, res: Response) {
            try {
                let {login, password} = req.body                
                    let logsin = await ceologin.findLogin(login)
                if (!logsin) {
                    return res.status(404).send({success: 0, data: "Incorrect login!"})}
                        const logsinPassword = bcrypt.compareSync(password, logsin.password)  
                if(!logsinPassword) {
                    return res.status(404).json({message: 'Incorrect password!'})} 
        
                const jsontoken = jwt.sign({ result: logsin}, 'qwert1', {expiresIn: "1y"})
                        return res.status(200).send({ message: "login successfully!", token: jsontoken, role: logsin.role});
            } catch (error) {
                console.log(error);
                return res.status(500).send({ message: "Internal Server Error!"})
            }            
        }

        async findAllLogins (req: Request, res: Response) {
            try {
                await ceologin.findAllLogin()
                    .then(logins => res.status(200).send( { message: 'All Logins get from the database!', logins}))
            } catch (error) {
                console.log(error);
                return res.status(500).send(error)
            }
        }
        
        async deleteLoginById (req:Request, res: Response) {
            try {
                await ceologin.deleteLoginById(+req.params.id)
                  return res.status(200).send( { message: `This ${+req.params.id} successfully deleted from the ceologin's table`})
            } catch (error) {
                console.log(error);
                  return res.status(500).send(error)
            }
        }
        
        async deleteAllLogins(req: Request, res: Response) {
            try {
                await ceologin.deleteLogin()
                    return res.status(200).json({ message: "All logins deleted!"})
            } catch (error) {
                console.log(error);
                return res.status(500).send({ message: "Internal Server Error!"})
            }
        }

}


    


