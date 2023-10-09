import Room from "../models/Room.js";
import Hotels from "../models/Hotels.js";
import { createError } from "../utils/error.js";

export const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  const newRoom = new Room(req.body);

  try {
    const savedRoom = await newRoom.save();
    //updating he hotel
    try {
      //whenever any room used by cutomer thne that must be locked adn updated here we done the same
      //created room id is saved into the htoel id
      await Hotels.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRoom._id }, //room Id added to hotel model
      });
    } catch (error) {
      next(error);
    }
    res.status(200).json(savedRoom);
  } catch (error) {
    next(error);
  }
};

export const updateRoom = async (req, res, next) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    ); //sending the latest version of our documents
    res.status(200).json({ updatedRoom });
    console.log("data updated sucessfullt to the database");
  } catch (error) {
    next(error); //erorr will be passed to the next middleware and that middleare is basically is a error handlers
  }
};

export const updateRoomavailability = async (req, res, next) => {
  try {
    //not using findbyid as we are notupdateing the room we are jsut updating the room numbers
    await Room.updateOne(
      { "roomNumber._id": req.params.id },
      {
        $push: {
          "roomNumber.$.unavailableDate": req.body.dates,
        },
      }
    );
    res.status(200).json(" room updated update");

    // res.status(200).json({updatedRoom})
    console.log("dates updated to the unavailability");
  } catch (error) {
    next(error);
  }
};

export const deleteRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid;

  try {
    await Room.findByIdAndDelete(req.params.id);
    res.status(200).json("Room has been deleted");
    console.log("data updated sucessfullt to the database");

    try {
      await Hotels.findByIdAndUpdate(hotelId, {
        $pull: { rooms: req.params.id },
      });
      console.log("Room deleted from hotel too ");
    } catch (error) {
      next(error);
    }
  } catch (error) {
    res.status(500).json(error);
    //need to understand how usnig express middleware
  }
};
export const getRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id);
    res.status(200).json({ room });
    console.log("data updated sucessfullt to the database");
  } catch (error) {
    //this is pass the errir message to the next middlewar
    next(error);
    // res.status(500).json(error)
    //need to understand how usnig express middleware
  }
};
export const getAllRoom = async (req, res, next) => {
  //get by st , featured
  try {
    const room = await Room.find();
    res.status(200).json({ room });
    console.log("data updated sucessfullt to the database");
  } catch (error) {
    res.status(500).json(error);
    //need to understand how usnig express middleware
  }
};
