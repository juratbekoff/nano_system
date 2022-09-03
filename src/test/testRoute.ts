import { Applciation, User } from "@prisma/client"
import { Router } from "express"
import testService from "./testService"

const router = Router()


router.post('/user', async (req,res) => {
    try {
       let user: User = {
            id: 0,
            fullname: req.body.fullname,
            login: req.body.login,
            password: req.body.password,
            role: req.body.role
       }

       let users = await testService.createUser(user)

       return res.status(200).send({ message: 'Ok, user created!', user: users})


    } catch (error) {
        console.log(error);
            return res.status(500)
    }
})

router.post('/app', async (req, res) => {
    try {
        let app: Applciation = {
            id: 0,
            appname: req.body.appname,
            message: req.body.message,
            system: req.body.system,
            userId: req.body.userId
        }

       let application = await testService.applciation(app)
    
        return res.status(200).send({ message: 'Ok, Application has been sent!', application})
    
    } catch (error) {
        console.log(error);
            return res.status(500)
    }
   
})

router.get('/all', async (req, res) => {
   let apps = await testService.findAllApps()
        return res.status(200).send({ message: 'Ok, user created!', application: apps})
})

router.get('/user/:id', async (req,res) => {
    let users = await testService.userId(+req.params.id)
        return res.status(200).send({ message: `User applications related to ID number ${+req.params.id}`, users})
})

export default router