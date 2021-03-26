const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const UserServices = require('../services/UserServices');

const AuthController = {
    async login(req,res){
        userEmail = req.body.email;
        try {
            const listUserEmail = await UserServices.listUserEmail(userEmail);
            console.log(listUserEmail.password)
            console.log(req.body.password)
            if(bcrypt.compareSync(req.body.password, listUserEmail.password)) {
                return res.status(401).json({ error: "invalid password!" });
            }

            const jwtPayload = { id: listUserEmail.id };
            const token = jwt.sign(jwtPayload, process.env.JWT_SECRET, { expiresIn: 604800 });

            return res.status(200).json({ token });

        } catch(err) {
            res.status(401).json({ error: "email not found" });
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