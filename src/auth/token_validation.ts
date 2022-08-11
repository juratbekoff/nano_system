import jwt from 'jsonwebtoken'
import { NextFunction, Request, Response } from "express";

async function checkToken(req: Request,res: Response, next: NextFunction) {
        try {
            let token = req.get("authorization");
            if (token) {
                // Remove Bearer from string
                token = token.slice(7);
                jwt.verify(token, 'qwert1', (err, decoded) => {
                  if (err) {
                    return res.json({
                      success: 0,
                      message: "Invalid Token..."
                    });
                  } else {
                    res.locals.decoded=decoded
                    next();
                  }
                });
              }
        } catch (error) {
            console.log(error)
        }    
}
    


export default checkToken
