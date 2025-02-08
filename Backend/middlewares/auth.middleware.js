const userModel = require('../models/user.model');
const captainModel = require('../models/captain.model');
const jwt = require('jsonwebtoken');
const blacklistModel = require('../models/blacklistToken.model');

module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    
    if(!token){
        return res.status(401).json({message: 'Unauthorized'});
    }

    const isblacklisted = await blacklistModel.findOne({token:token});
    if(isblacklisted){
        return res.status(401).json({message: 'Unauthorized'});
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);
        console.log(user);
        if(!user){
            return res.status(404).json({message: 'User not found'});
        }
        req.user = user;
        return next();
    } catch (error) {
        return res.status(401).json({message: 'Unauthorized'});
    }
}
module.exports.authCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    
    if(!token){
        return res.status(401).json({message: 'Unauthorized'});
    }

    const isblacklisted = await blacklistModel.findOne({token:token});
    if(isblacklisted){
        return res.status(401).json({message: 'Unauthorized'});
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id);
        if(!captain){
            return res.status(404).json({message: 'Captain not found'});
        }
        req.captain = captain;
        return next();
    } catch (error) {
        return res.status(401).json({message: 'Unauthorized'});
    }
}