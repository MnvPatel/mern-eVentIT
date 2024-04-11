import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    RegistrationNumber : {
        type:String,
        required: true,
        unique: [true, "Registration Number already exists"],
    },
    email:{
        type:String,
        required: true,
        unique: [true, "Email Address already taken"],
    },
    branch : {
        type:String,
        required: true,
    },
    gender : {
        type:String,
        required: true
    },
    DOB : {
        type:String,
        required: true,
    },
    password:{
        type:String,
        required: true,
        minlength: 8
    },
    cpassword:{
        type:String,
        required: true,
        minlength: 8
    },
}, {timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;