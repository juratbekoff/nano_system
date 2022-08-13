import { Request, Response } from "express"
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import Userlogin from "../../services/users/login"

const userlogin = new Userlogin()

class UserLoginController {
    constructor() {}

    async login(req:Request, res: Response) {
        try {
            let { login, password } = req.body 
            
            let user = await userlogin.findUserLogin(login)

            if (!user) {
                return res.json({success: 0,data: "Invalid email or password! 404!"})
            } const result = bcrypt.compareSync(password, user.password)

            if(result) {
                const jsontoken = jwt.sign({ result: user}, 'qwert1', {expiresIn: "1y"});
                    return res.json({ success: 1, message: "login successfully!", token: jsontoken});
            } else {
                return res.status(404).json({success: 0, data: "Invalid email or password! 404!"})
            }
        } catch (error) {
            return res.status(500).send({ message: "Internal Server Error!", error})
        }
    }
}

export default UserLoginController

