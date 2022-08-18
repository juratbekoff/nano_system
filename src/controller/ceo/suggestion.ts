import { suggestion } from "@prisma/client";
import { error } from "console";
import { query, Request, Response } from "express";
import Suggestion from "../../services/ceo/suggestion";

const suggest = new Suggestion()


class CeoSuggestController {
    constructor(){}

    async suggestion(req: Request,res: Response) {
        try {
           let suggestions =  await suggest.getAllSuggestion()
                return res.status(200).send({ message: "All Suggestions!", suggestions })
        } catch (error) {
            console.log(error)
                return res.status(500).send({  message: "Internal Server Error!", error})
        }  
    }

    async getSuggestById(req: Request, res: Response) {
        try {
            let suggestion = await suggest.getSuggestById(+req.params.id)
                return res.status(200).send({ message: `ID ${+req.params.id} retrieved!`, suggestion})
        } catch (error) {
            console.log(error);
            return res.status(500).send({  message: "Internal Server Error!", error})
        }
    }   
}

export default CeoSuggestController
