import Hotels from "../models/Hotels.js";
import Room from "../models/Room.js";

export const createHotel = async (req, res, next) => {
  const newHotel = await new Hotels(req.body);
  // console.log(newHotel);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json({ savedHotel });
    console.log("data sended to the database");
  } catch (error) {
    next(error);
    //need to understand how usnig express middleware
  }
};
export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotels.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({ updatedHotel });
    console.log("data updated sucessfullt to the database");
  } catch (error) {
    next(error); //erorr will be passed to the next middleware and that middleare is basically is a error handlers
  }
};
export const deleteHotel = async (req, res, next) => {
  try {
    await Hotels.findByIdAndDelete(req.params.id);
    res.status(200).json("hotel has been deleted");
    console.log("data updated sucessfullt to the database");
  } catch (error) {
    res.status(500).json(error);
    //need to understand how usnig express middleware
  }
};
export const getHotel = async (req, res, next) => {
  // const {min , max , ...max}
  try {
    const hotel = await Hotels.findById(req.params.id);
    res.status(200).json({ hotel });
    console.log("data updated sucessfullt to the database");
  } catch (error) {
    //this is pass the errir message to the next middlewar
    next(error);
    // res.status(500).json(error)
    //need to understand how usnig express middleware
  }
};
export const getAllHotel = async (req, res, next) => {
  const { max, min, ...others } = req.query;
  try {
    const hotels = await Hotels.find({
      ...others,
      cheapestPrice: { $gt: min | 1, $lt: max || 999 },
    }).limit(req.query.limit);
    res.status(200).json({ hotels });
    console.log("data updated sucessfullt to the database");
  } catch (error) {
    res.status(500).json(error);
    //need to understand how usnig express middleware
  }
};
export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(","); // gettting citeis in the array
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotels.countDocuments({ city: city });
      })
    );
    res.status(200).json({ list });
    console.log("Hotel count sucessfulll");
  } catch (error) {
    res.status(500).json(error);
    console.log("Hotel count Unsucessfulll");
    //need to understand how usnig express middleware
  }
};

//count by type
export const countByCityType = async (req, res, next) => {
  try {
    const hotelCount = await Hotels.countDocuments({ type: "hotel" });
    const apartmentCount = await Hotels.countDocuments({ type: "apartment" });
    const resortCount = await Hotels.countDocuments({ type: "resort" });
    const villaCount = await Hotels.countDocuments({ type: "villa" });
    const cabinCount = await Hotels.countDocuments({ type: "cabin" });

    res.status(200).json([
      { type: "hotel", count: hotelCount },
      { type: "apartments", count: apartmentCount },
      { type: "resorts", count: resortCount },
      { type: "villas", count: villaCount },
      { type: "cabins", count: cabinCount },
    ]);
  } catch (err) {
    next(err);
  }
};

export const getHotelRooms = async (req, res, next) => {
  try {
    const hotel = await Hotels.findById(req.params.id);
    const list = await Promise.all(
      hotel.rooms.map((room) => {
        console.log(room);
        return Room.findById(room);
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};
