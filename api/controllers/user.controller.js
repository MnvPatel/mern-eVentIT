import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from 'bcryptjs';

export const test = (req,res) => {
    res.json({
        message: 'Hello World',
    });
}

export const updateUser = async (req, res, next) => {
    if(req.user.id !== req.params.id) return next(errorHandler(401, 'You can only update your own account'))
    try {
        if(req.body.password) {
            req.body.password = bcryptjs.hashSync(req.body.password, 10)
        }

        const updateUser = await User.findByIdAndUpdate(req.params.id,{
            $set:{
                username: req.body.username,
                RegistrationNumber: req.body.RegistrationNumber,
                email: req.body.email,
                branch: req.body.branch,
                gender: req.body.gender,
                DOB: req.body.DOB,
                password: req.body.password,
            }
        }, {new: true})

        const {password, ...rest} = updateUser._doc;

        res.status(200).json(rest);
    } catch (error) {
        next(error)
    }
};