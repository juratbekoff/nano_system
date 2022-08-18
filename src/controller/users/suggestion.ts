import { suggestion } from "@prisma/client";
import { Request, Response } from "express";
import Suggestion from "../../services/users/suggestion";

const suggest = new Suggestion()

class SuggestController {
    constructor(){}

    async suggestion(req: Request,res: Response) {
        try {
            
            let suggestion: suggestion = {
                id: 0,
                Name: req.body.Name,
                suggestName: req.body.suggestName,
                message: req.body.message
            }
            
            await suggest.createSuggestion(suggestion)

            return res.status(200).json({ message: "Suggestion has been sent!", suggestion })

        } catch (error) {
            return res.status(500).send({  message: "Internal Server Error!", error})
        }  
    }
    
}

export default SuggestController