"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function checkToken(req, res, next) {
    try {
        var authorization = req.headers.authorization;
        if (authorization) {
            // Remove Bearer from string
            var token = authorization.split(' ')[1];
            jsonwebtoken_1["default"].verify(token, 'qwert1', function (err, decoded) {
                if (err) {
                    return res.json({
                        success: 0,
                        message: "Invalid Token..."
                    });
                }
                else {
                    res.locals.user = decoded;
                    next();
                }
            });
        }
        return res.status(401).json({
            message: "Tokenni yuvar to'nka"
        });
    }
    catch (error) {
        console.log(error);
        return {
            message: error.message
        };
    }
}
exports["default"] = checkToken;
//# sourceMappingURL=token_validation.js.map