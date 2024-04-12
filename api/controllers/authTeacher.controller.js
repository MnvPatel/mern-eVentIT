import Teacher from "../models/teacher.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

export const SignUp = async (req, res, next) => {
    const { username, RegistrationNumber, email, gender, DOB, password, cpassword } = req.body;
    const hashedTPassword = bcryptjs.hashSync(password, 10);
    const hashedTCpassword = bcryptjs.hashSync(cpassword, 10);
    const newTeacher = new Teacher({ username, RegistrationNumber, email, gender, DOB, password: hashedTPassword, cpassword: hashedTCpassword });
    try {
        await newTeacher.save()
        res.status(201).json('Teacher Created Successfully!');
    } catch (error) {
        next(error);
    }
}

export const SignIn = async (req, res, next) => {
    const {RegistrationNumber, password} = req.body;
    try {
        const validTeacher = await Teacher.findOne({ RegistrationNumber });
        if(!validTeacher) return next(errorHandler(404, 'Teacher not found!'));
        const validPassword = bcryptjs.compareSync(password, validTeacher.password);
        if(!validPassword) return next(errorHandler(404, 'Invalid Credentials!'));
        const token = jwt.sign({id: validTeacher._id}, process.env.JWT_SECRET);
        const { password: pass, cpassword: cpass, ...rest} = validTeacher._doc;
        res.cookie('access_token', token, {httpOnly: true, expires: new Date(Date.now() + 900000)}).status(200).json(rest);
    } catch (error) {
        next(error);
    }
}