import { PrismaClient, suggestion } from "@prisma/client";

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


}

export default Suggestion