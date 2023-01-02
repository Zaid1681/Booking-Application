
import mongoose from "mongoose";
const {Schema} = mongoose ;

const UserSchema = new Schema({
    username:{
        type : String , 
        required : true , 
        unique : true
    },
    email:{
        type : String , 
        required : true
    },
    password:{
        type : String , 
        required : true
    },
    isAdmin:{
        type : Boolean , 
        default : false
    } , 
} , {timestamps : true});
//creted and updated at a particular time 
//craeting a model

export default mongoose.model("User" , UserSchema)