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

    async deleteSuggestById(req: Request, res: Response) {
        try {
            await suggest.deleteSuggestById(+req.params.id)
                return res.status(200).send({ message: `ID ${+req.params.id} deleted from suggestion table!`})
        } catch (error) {
            console.log(error);
            return res.status(500).send({  message: "Internal Server Error!", error: error})
        }
    }

    async deleteAllSuggest(req: Request, res: Response) {
        try {
            await suggest.deleteAllSuggests()
                return res.status(200).send({ message: 'All suggestions deleted!'})       
        } catch (error) {
            console.log(error);
            return res.status(500).send({  message: "Internal Server Error!", error: error})
        }
    }

    async searchSuggest(req: Request, res: Response) {
        try {

            let query = {
                ownName: req.query.name?.toString(),
                suggestName: req.query.suggest?.toString()
            }            

            await suggest.searchSuggest(query)
                .then(suggests => res.send( { message: 'This suggest!', suggests}))
        } catch (error) {
            console.log(error);
            return res.status(500).send({  message: "Internal Server Error!", error})
        }
    }  


}
 
export default CeoSuggestController
