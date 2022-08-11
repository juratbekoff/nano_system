import { userLogin } from "@prisma/client"
import { Request, Response } from "express"
import bcrypt, { hashSync } from 'bcrypt';
import Userlogin from "../../services/ceo/userlogin"

const userlogin = new Userlogin()

class UserLoginController {
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

export default UserLoginController

