// Importing neccessary components

import mongoose from "mongoose";
import validator from "validator";

// Validation Schema

const UserSchema = new mongoose.Schema({
    Name : {
        type : String,
        required : true
    },
    Mobile : {
        type : String,
        default : "000-000-0000"
    },
    Email : {
        type : String,
        required : true ,
        lowercase : true,
        validate : (value) =>{
            return validator.isEmail(value);
        }
    },
    Password : {
        type : String,
        required : true
    },
    ResetPin : {
        type : String
    },
    Role : {
        type : String,
        default : "user"
    },
    CreatedAt : {
        type : Date,
        default : Date.now
    }
},{
    versionKey : false
})

const User = mongoose.model("users",UserSchema);
export default User;