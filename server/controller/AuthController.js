const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const UserServices = require('../services/UserServices');
const { ErrorHandler } = require('../utils/error');

const AuthController = {
    async login(req,res,next) {
        try {
            userEmail = req.body.email;
            if(!userEmail) {
                throw new ErrorHandler(400, "email is required");
            }
            if(!req.body.password) {
                throw new ErrorHandler(400, "password is required");
            }
            const listUserEmail = await UserServices.listUserEmail(userEmail);
            if(!listUserEmail) {
                throw new ErrorHandler(404, "email not found");
            }
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
        try {
            const token = req.headers.authorization;
            if(!token) {
                throw new ErrorHandler(401, 'authentication required, please provide your token!');
            }
    
            jwt.verify(token, process.env.JWT_SECRET, (err) => {
                if (err){
                    throw new ErrorHandler(401, 'failed to authenticate token');
                }
            });

            next();
        } catch(error) {
            next(error);
        }

    }
};

module.exports = AuthController