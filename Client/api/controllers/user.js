import User from "../models/User.js"


export const updateUser = async (req, res, next) =>{
    try {
        const updateUser =  await User.findByIdAndUpdate(req.params.id , {$set :  req.body} , {new: true})
        res.status(200).json({updateUser})
        console.log("user updated sucessfully to the database");

    } 
    catch (error) {
        next(error) //erorr will be passed to the next middleware and that middleare is basically is a error handlers
        
    }
    
}
export const deleteUser  = async (req, res, next) =>{
    try {
        await User.findByIdAndDelete(req.params.id )
        res.status(200).json("user has been deleted")
        console.log("data updated sucessfullt to the database");

    } 
    catch (error) {
        res.status(500).json(error)
        //need to understand how usnig express middleware
        
    }
    
}
export const getUser = async (req, res, next) =>{
    try {

        const user =  await User.findById(req.params.id)
        res.status(200).json({user})
        console.log("data updated sucessfullt to the database");

    } 
    catch (error) {
        //this is pass the errir message to the next middlewar 
        next(error)
        // res.status(500).json(error)
        //need to understand how usnig express middleware
        
    }

}
export const getAllUser = async (req, res, next) =>{
    try {
        const user =  await User.find()
        res.status(200).json({user})
        console.log("data updated sucessfullt to the database");

    } 
    catch (error) {
        res.status(500).json(error)
        //need to understand how usnig express middleware
        
    }
}
    
