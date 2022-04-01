const User = require('../models/user.js');
const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const payload = jwt.verify(token, 'mySecretKey');
        const user = await User.findOne({ _id: payload._id, 'tokens.token': token});

        if (!user) {
            throw new Error('User not found')
        }

        req.user = user;
        req.token = token;
        next();
    }
    catch (error) {
        res.status(400).json({"message":"Invalid Token or expired","data":error})
    }
}

module.exports = auth;