import Teacher from "../models/teacher.model.js";
import bcryptjs from 'bcryptjs';

export const SignUp = async (req, res) => {
    const { username, RegistrationNumber, email, gender, DOB, password, cpassword } = req.body;
    const hashedTPassword = bcryptjs.hashSync(password, 10);
    const hashedTCpassword = bcryptjs.hashSync(cpassword, 10);
    const newTeacher = new Teacher({ username, RegistrationNumber, email, gender, DOB, password: hashedTPassword, cpassword: hashedTCpassword });
    try {
        await newTeacher.save()
        res.status(201).json('Teacher Created Successfully!');
    } catch (error) {
        res.status(500).json(error.message); 
    }
}