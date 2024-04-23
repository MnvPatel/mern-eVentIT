import Teacher from "../models/teacher.model.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from 'bcryptjs';
import Listing from "../models/listing.model.js"

export const testt = (req,res) => {
    res.json({
        message: 'Hello World',
    });
}

export const updateTeacher = async (req, res, next) => {
    if(req.teacher.id !== req.params.id) return next(errorHandler(401, 'You can only update your own account'))
    try {
        if(req.body.password) {
            req.body.password = bcryptjs.hashSync(req.body.password, 10)
        }

        const updateTeacher = await Teacher.findByIdAndUpdate(req.params.id,{
            $set:{
                username: req.body.username,
                RegistrationNumber: req.body.RegistrationNumber,
                email: req.body.email,
                gender: req.body.gender,
                DOB: req.body.DOB,
                password: req.body.password,
            }
        }, {new: true})

        const {password, ...rest} = updateTeacher._doc;

        res.status(200).json(rest);
    } catch (error) {
        next(error)
    }
};

export const getUserListings = async (req, res, next) => {
    if (req.teacher.id === req.params.id){
        try {
            const listings = await Listing.find({userRef: req.params.id});
            res.status(200).json(listings);
        } catch (error) {
           next(error) 
        }
    }else{
        return next(errorHandler(401, 'You can only view your own listings!'))
    }
}