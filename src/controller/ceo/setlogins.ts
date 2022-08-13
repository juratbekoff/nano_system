import { ceologin, userLogin } from "@prisma/client"
import { NextFunction, Request, Response } from "express"
import bcrypt, { hashSync } from 'bcrypt';
import jwt from 'jsonwebtoken'
import { Userlogin, Ceologin } from "../../services/ceo/setlogins"

const userlogin = new Userlogin()
const ceologin = new Ceologin()


export class UserLoginController {
    constructor() {}

    async setUserLogin(req:Request, res:Response) {
        try {
            let userLogin: userLogin = { id: 0, login: req.body.login, password: req.body.password} 
	            let salt = bcrypt.genSaltSync(10)
                    userLogin.password  = hashSync(userLogin.password, salt)
        if(userLogin.login.length < 5 ) {
            return  res.status(400).send({ message: "Login must be at least 5 letters! "})
        } 
        await userlogin.deleteUserLogin()
            await userlogin.userLogin(userLogin)
                return res.status(200).send({message: 'Successfully code setted!'})
        } catch (error) {
            return res.status(500).send({ message: "Internal Server Error!", error})}
    };   
}

export class CeoLoginController {
    constructor(){}

        async setCeoLogin(req: Request, res: Response) {
            try {
                let ceologs: ceologin = {id: 0, login: req.body.login, password: req.body.password,role: req.body.role}
                if(ceologs.login.length < 5) {
                    return res.status(400).send({message: 'login must be at least 5 symbols!'})}
                if(ceologs.password.length <5) {
                    return res.status(400).send({message: 'password must be at least 5 symbols!'})}
                let salt = bcrypt.genSaltSync(10)
                        ceologs.password = hashSync(ceologs.password, salt)
                await ceologin.deleteCeoLogin()
                    await ceologin.ceoLogin(ceologs)
                return res.status(200).send({message: 'Successfully CEO code setted!'})
            } catch (error) {
                console.log(error);
                res.status(500).json({message: "Internal Server Error!"})
            }}

        async loginCeo(req: Request, res: Response) {
            try {
                let {login, password, role} = req.body                
                    let logsin = await ceologin.findCeoLogin(login)
                if (!logsin) {
                    return res.json({success: 0, data: "Incorrect login!"})}
                        const logsinPassword = bcrypt.compareSync(password, logsin.password)  
                if(!logsinPassword) {
                    return res.status(400).json({message: 'Incorrect password!'})} 
                if(logsin.role !== role) {
                    return res.status(401).json({success: 0, data: "You don't have permittion to enter CEO panel! "})}
                const jsontoken = jwt.sign({ result: logsin}, 'qwert1', {expiresIn: "1y"})
                        return res.json({ success: 1, message: "login successfully!", token: jsontoken});
            } catch (error) {
                console.log(error);
                return res.status(500).send({ message: "Internal Server Error!"})
            }            
        }        

}


    
