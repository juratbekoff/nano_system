import { PrismaClient, suggestion } from "@prisma/client";
import { StorageEngine } from "multer";

const client = new PrismaClient()

class Suggestion {
    constructor(){}

    async getAllSuggestion(){
        return await client.suggestion.findMany()
    }

    async getSuggestById(incomingId: number): Promise<suggestion | null> {
        return await client.suggestion.findUnique({
            where: {
                id: incomingId
            }
        })
    }

    async deleteSuggestById(incomingId: number): Promise<suggestion | null> {
        return await client.suggestion.delete({
            where: {
                id: incomingId
            }
        })
    }

    async deleteAllSuggests() {
       await client.suggestion.deleteMany()
    }

    async searchSuggest (query: { ownName: string | undefined, suggestName: string | undefined }) {
        return await client.suggestion.findMany({
            where: {

                Name: query.ownName ? {
                    contains: query.ownName,
                    mode: "insensitive"
                } : undefined,

                suggestName: query.suggestName ? {
                    contains: query.suggestName,
                    mode: "insensitive"
                } : undefined,
            }
        })
    }

    
}

export default Suggestion