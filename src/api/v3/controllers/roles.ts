import { role } from "@prisma/client";
import { Request, Response } from "express";
import Role from "../services/roles";

const mainRole = new Role()

class RoleController {
    
    async createRole(req: Request, res: Response) {
        let role: role = {
            id: 0,
            role: req.body.role,
            application: req.body.application,
            suggestion: req.body.suggestion,
            logins: req.body.logins
        }

        let createdRole = await mainRole.createRole(role)
        return res.status(200).json({message: 'role created!', role: createdRole})
    }
}

export default RoleController