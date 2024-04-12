import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
    const { username, RegistrationNumber, email, branch, gender, DOB, password, cpassword } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const hashedCpassword = bcryptjs.hashSync(cpassword, 10);
    const newUser = new User({ username, RegistrationNumber, email, branch, gender, DOB, password: hashedPassword, cpassword: hashedCpassword });
    try {
        await newUser.save()
        res.status(201).json('User Created Successfully!');
    } catch (error) {
       next(error); 
    }    
}

export const signin = async (req, res, next) => {
    const {RegistrationNumber, password} = req.body;
    try {
        const validUser = await User.findOne({ RegistrationNumber });
        if(!validUser) return next(errorHandler(404, 'User not found!'));
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if(!validPassword) return next(errorHandler(404, 'Invalid Credentials!'));
        const token = jwt.sign({id: validUser._id}, process.env.JWT_SECRET);
        const { password: pass, cpassword: cpass, ...rest} = validUser._doc;
        res.cookie('access_token', token, {httpOnly: true, expires: new Date(Date.now() + 900000)}).status(200).json(rest);
    } catch (error) {
        next(error);
    }
}