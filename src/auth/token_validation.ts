import jwt from 'jsonwebtoken'
import { NextFunction, Request, Response } from "express";

function checkToken(req: Request,res: Response, next: NextFunction) {
        try {
            let authorization = req.headers.authorization;
            
            if (authorization) {
                // Remove Bearer from string
                let token = authorization.split(' ')[1];

                jwt.verify(token, 'qwert1', (err, decoded) => {
                  if (err) {
                    return res.json({
                      success: 0,
                      message: "Invalid Token..."
                    });

                  } else {
                    res.locals.user = decoded
                    next();
                  }
                });
            }

            return res.status(401).json({
              message: "Tokenni yuvar to'nka"
            })
        } catch (error: any) {
            console.log(error)
            return {
              message: error.message
            }
        }    
}
    


export default checkToken
