import { PrismaClient, admin, role } from "@prisma/client";

const client = new PrismaClient()

class Role {

    async createRole(role: role): Promise<role> {
        return client.role.create({
            data: {
                role: role.role,
                application: role.application,
                suggestion: role.suggestion,
                logins: role.logins
            }
        })
    }
}

export default Role