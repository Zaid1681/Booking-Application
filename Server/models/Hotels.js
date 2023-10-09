
import mongoose from "mongoose";
const {Schema} = mongoose ;

const HotelSchema = new Schema({
    name:{
        type : String , 
        required : true
    },
    type:{
        type : [String] , 
        required : true
    },
    city:{
        type : String , 
        required : true
    },
    address:{
        type : String , 
        required : true
    },
    distance:{
        type : String , 
        required : true
    },
    photos:{
        type : [String] 
    },
    title:{
        type : String,
        require : true
    },
    desc:{
        type : String,
        require : true
    },
    rating:{
        type : Number , 
        min : 0 ,
        max : 5
    },
    rooms:{
        type : [String]  
    },
    cheapestPrices:{
        type : Number , 
        required : true
    },
    feature:{
        type : Boolean , 
        default : false
    } , 
});

//craeting a model

export default mongoose.model("hotel" , HotelSchema)