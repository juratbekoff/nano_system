"use strict";
exports.__esModule = true;
function accessPortector(req, res, next) {
    try {
        var access = req.header("X-Access-Key");
        console.log(access);
        if (access !== process.env.PROTECT_ACCESS_KEY)
            return res.status(401).json({ message: 'Unauthorized!' });
        if (process.env.PROTECT_ACCESS_KEY === access) {
            next();
        }
    }
    catch (error) {
        console.log(error);
        return res.status(200).send({ message: 'ISE', error: error });
    }
}
exports["default"] = accessPortector;
//# sourceMappingURL=access-protector.js.map