import express from "express"
import {createError}  from "../utils/error.js"  //error hanlder modlleware

import Hotels from "../models/Hotels.js"  //models
import { createHotel, deleteHotel, getAllHotel, getHotel, updateHotel , countByCity , countByCityType , getHotelRooms} from "../controllers/hotels.js"
import { checkAdmin } from "../utils/verifyToken.js"
const router = express.Router()



//CREATE
//creating a hotel ==> creating a db , creating a new collection , creating a docment this will take a time thus we are making our hotel async
router.post("/", checkAdmin ,  createHotel)

//UPDATE
router.put("/:id" , checkAdmin , updateHotel
    //using the above param :id we will going to update the particular value
)


//DELETE
router.delete("/:id", checkAdmin , deleteHotel
    //using the above param :id we will going to update the particular value
    )

//GET
router.get("/find/:id", getHotel
/**
 //using the above param :id we will going to update the particular value
 // here we are crating a custome value for the error 
//error handling using middleware

// const failed = false
// if(failed) return next(createError(401 , "You are note authenticated pls try with proper credentials"))
*/
    )
//GETALL
router.get("/find/" , getAllHotel , 
    //using the above param :id we will going to update the particular value
   

)
router.get("/countByCity", countByCity
    //using the above param :id we will going to update the particular value
   

)
router.get("/countByCityType", countByCityType
    //using the above param :id we will going to update the particular value
   

)

//get hotel rooms
router.get("/hotelrooms/:id" , getHotelRooms)
// router.get("/", getCountHotel
//     //using the above param :id we will going to update the particular value
   

// )
export default router;