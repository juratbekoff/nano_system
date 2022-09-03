import { PrismaClient, suggestion } from "@prisma/client";

const client = new PrismaClient()

class Suggestion {
    constructor(){}

    async createSuggestion (suggestion: suggestion): Promise<suggestion> {
        return client.suggestion.create({
            data: {
                Name: suggestion.Name,
                suggestName: suggestion.suggestName,
                message: suggestion.message,
                sent_date: suggestion.sent_date,
                userId: suggestion.userId
            },
            include: {
                user: true
            }
        })
    }
}

export default Suggestion