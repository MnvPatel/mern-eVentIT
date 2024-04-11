import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';

export const signup = async (req, res) => {
    const { username, RegistrationNumber, email, branch, gender, DOB, password, cpassword } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const hashedCpassword = bcryptjs.hashSync(cpassword, 10);
    const newUser = new User({ username, RegistrationNumber, email, branch, gender, DOB, password: hashedPassword, cpassword: hashedCpassword });
    try {
        await newUser.save()
        res.status(201).json('User Created Successfully!');
    } catch (error) {
       res.status(500).json(error.message); 
    }    
}