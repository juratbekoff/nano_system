import { ceologin, userLogin } from "@prisma/client"
import { NextFunction, Request, Response } from "express"
import bcrypt, { hashSync } from 'bcrypt';
import jwt from 'jsonwebtoken'
import { loginServices } from "../../services/ceo/setlogins"

const ceologin = new loginServices()

export class LoginController {
    constructor(){}

        async setLogin(req: Request, res: Response) {
            try {
                let ceologs: ceologin = {id: 0, login: req.body.login, password: req.body.password,role: req.body.role}
                    let findCeoLogin = await ceologin.findLogin(ceologs.login)
                if(ceologs.login.length < 5) {
                    return res.status(400).send({message: 'login must be at least 5 symbols!'})} 
                if(ceologs.password.length <5) {
                    return res.status(400).send({message: 'password must be at least 5 symbols!'})}
                if(findCeoLogin) {
                    return res.status(403).send({message: `Sorry! This '${ceologs.login}' login is already exicted! Please! Change login's value!`})}    
                let salt = bcrypt.genSaltSync(10)    
                        ceologs.password = hashSync(ceologs.password, salt)
                            // ceologs.role = hashSync(ceologs.role, salt)
                await ceologin.login(ceologs)
                return res.status(200).send({message: 'Successfully CEO code setted!'})
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

}


    


