import { ceo } from "@prisma/client"
import { Request, Response } from "express"
import jwt from 'jsonwebtoken'
import ceoLoginServices  from "../../../services/ceo/logins/ceo"

const ceologins = new ceoLoginServices()

class CeoLoginController {

        async setCeoLogin(req: Request, res: Response) {
            try {
                let ceologs: ceo = {
                    id: 0, 
                    name: req.body.name, 
                    login: req.body.login, 
                    password: req.body.password,
                    role: req.body.role }

                let findCeoLogin = await ceologins.findCeoLogin(ceologs.login)
                
                if(ceologs.login.length < 3) {
                    return res.status(400).send({message: 'login must be at least 5 symbols!'})} 
                
                if(ceologs.password.length <3) {
                    return res.status(400).send({message: 'password must be at least 5 symbols!'})}
                
                if(findCeoLogin) {
                    return res.status(403).send({message: `Sorry! This '${ceologs.login}' login is already exicted! Please! Change login's value!`})}    

                let login =  await ceologins.createCeologin(ceologs)
                    return res.status(200).send({ message: 'Ceo successfuly created!', user: login})
            } catch (error) {
                console.log(error);
                    return res.status(500).json({message: "Internal Server Error!", error})
        }}

        async ceoLogin(req: Request, res: Response) {
            try {
                let { login, password } = req.body
                let Ip = req.ip

                let logsin = await ceologins.findCeoLogin(login)
                
                if (!logsin) {
                    return res.status(404).send({success: 0, data: "Incorrect login!"})}
            
                if(logsin.password !== password) {
                    return res.status(404).json({message: 'Incorrect password!'})}

                const jsontoken = jwt.sign({ result: logsin}, 'qwert1', {expiresIn: "1y"})
                    return res.status(200).send({ 
                        ip: Ip,
                        message: "Xush kelibsiz CEO!", 
                        token: jsontoken
                     });

            } catch (error) {
                console.log(error);
                    return res.status(500).send({ message: "Internal Server Error!"})
        }}

        async findAllLogins (req: Request, res: Response) {
            try {
                await ceologins.findAllCeoLogin()
                    .then(logins => res.status(200).send( { message: 'All Logins get from the database!', logins}))
            } catch (error) {
                console.log(error);
                return res.status(500).send(error)
            }
        }
        
        async deleteLoginById (req:Request, res: Response) {
            try {
                await ceologins.deleteCeoLoginByID(+req.params.id)
                  return res.status(200).send( { message: `This ${+req.params.id} successfully deleted from the ceologin's table`})
            } catch (error) {
                console.log(error);
                  return res.status(500).send(error)
            }
        }  
}

export default CeoLoginController

    


