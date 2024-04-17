import mongoose from 'mongoose';

const teacherSchema = new mongoose.Schema({
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
    avatar: {
        type:String,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
    }
}, {timestamps: true });

const Teacher = mongoose.model('Teacher', teacherSchema);

export default Teacher;