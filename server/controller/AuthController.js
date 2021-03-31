const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const UserServices = require('../services/UserServices');
const { ErrorHandler } = require('../utils/error');

const AuthController = {
    async login(req,res) {
        try {
            userEmail = req.body.email;
            const listUserEmail = await UserServices.listUserEmail(userEmail);
            if(!bcrypt.compareSync(req.body.password, listUserEmail.password)) {
                throw new ErrorHandler(401, "invalid password!");
            }

            const jwtPayload = { id: listUserEmail.id };
            const token = jwt.sign(jwtPayload, process.env.JWT_SECRET, { expiresIn: 604800 });

            return res.status(200).json({ token });
        } catch(err) {
            next(err);
        }
    },

    async auth(req,res,next) {
        const token = req.headers.authorization;
        if(!token) {
            res.status(401).json({ error: 'authentication required, please provide your token!' });
        }

        jwt.verify(token, process.env.JWT_SECRET, (err) => {
            if (err){
                res.status(500).json({ error: 'failed to authenticate token' });
            }
        });

        next();
    }
};

module.exports = AuthController