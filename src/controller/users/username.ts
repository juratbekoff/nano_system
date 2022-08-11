import { userUsername } from "@prisma/client";
import { Request, Response } from "express";
import Username from "../../services/users/username";

const usernameService = new Username()

class UsernameController {
    constructor(){}

    async username(req: Request,res: Response) {
        try {
            let username: userUsername = { id: 0, username: req.body.username }
                let oldUsername = await usernameService.findUsername(req.body.username)
            if(!username.username) {
                return res.status(400).send({message: "Error from request's body!"})
            } if(oldUsername) {
                return res.status(400).send({message: 'Sorry this username is already exicted!'})
            } if (username === undefined) {
                return res.status(400).send({message: 'Sorry! Plase fill in!'})
            } if (username === null) {
                return res.status(400).send({message: 'Sorry! Plase fill out!'})
            } if (username.username.length < 6) {
                return res.status(400).send({message: 'Username must be at least 6 charachter!'})
            }
            await usernameService.username(username)
               return res.status(200).send({message: 'Username created!'})
        } catch (error) {
            console.log(error)
               return res.status(500).send({message: "Internal Server Error!", error})}  
    }
}

export default UsernameController