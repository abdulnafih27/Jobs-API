const User = require('../models/User');
const {StatusCodes} = require('http-status-codes');
const {BadRequestError, UnauthenticatedError} = require('../errors'); 

const registerUser = async (req, res) => {
    const user = await User.create({...req.body});
    const token = user.createJWT();
    res.status(StatusCodes.CREATED).json({user : {name : user.name}, token});
};

const loginUser = async (req, res) => {
    const {email, password} = req.body;

    if(!email || !password){
        throw new BadRequestError("Please Provide Email and Password");
    }

    const user = await User.findOne({email : email});

    if(!user){
        throw new UnauthenticatedError("Invalid Credentials");
    }

    //compare Password
    const isPassword = await user.comparePassword(password);
    if(!isPassword){
        throw new UnauthenticatedError("Invalid Credentials");
    }
    const token = user.createJWT();
    res.status(StatusCodes.OK).json({user : {name : user.name}, token})
};


module.exports = {
    registerUser,
    loginUser
};