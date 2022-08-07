import { userLogin } from "@prisma/client"
import { Request, Response } from "express"
import bcrypt, { hashSync } from 'bcrypt';
import jwt from 'jsonwebtoken'
import Userlogin from "../../services/ceo/userlogin.service"

const userlogin = new Userlogin()

class UserLoginController {
    constructor() {}

    async setUserLogin(req:Request, res:Response) {
        try {
            let userLogin: userLogin = {
                id: 0,
                login: req.body.login,
                password: req.body.password
            }
            
        
	    let salt = bcrypt.genSaltSync(10)
        
        userLogin.password  = hashSync(userLogin.password, salt)
          
        if(userLogin.login.length < 6) {
            return  res.status(400).send({ message: "Login must be at least 6 letters! "})
          }
      
        if(userLogin.password.length < 6) {
            return  res.status(400).send({ message: " Password must be at least 6 letters! "})
        }
        
        userlogin.deleteUserLogin()
        
        userlogin.userLogin(userLogin)
        
        res.status(200).send({
              message: 'Successfully code setted!'
          })
        } catch (error) {
            console.log(error)
        }
    };

    async login(req:Request, res: Response) {
        try {
            
            let { login, password } = req.body 

            let user = await userlogin.findUserLogin(login)

            console.log(user)

            if (!user) {
                return res.json({
                    success: 0,
                    data: "Invalid email or password! 404!"
                })
            }

            const result = bcrypt.compareSync(password, user.password)

            if(result) {
                const jsontoken = jwt.sign({ result: user}, 'qwert1', {
                    expiresIn: "1024h"
                });
    
                return res.json({
                    success: 1,
                    message: "login successfully!", 
                    token: jsontoken
                });
            } else {
                return res.json({
                    success: 0,
                    data: "Invalid email or password! 404!"
                })
            }

            
        } catch (error) {
            console.log(error)
        }
    }
}

export default UserLoginController

