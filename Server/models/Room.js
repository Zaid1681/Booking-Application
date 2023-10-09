import mongoose from "mongoose";
const { Schema } = mongoose;

const RoomSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      default: false,
    },
    isAdmin: {
      type: String,
      default: false,
    },
    roomNumber: [{ number: Number, unavailableDate: { type: [Date] } }], //array of number of rooms and cupdating the availablity of rooms
  },
  { timestamps: true }
);
//creted and updated at a particular time
//craeting a model

// {
//     {
//         number : 101 , unavailableDate:[]
//     }
//     {
//         number : 102 , unavailableDate:[]
//     }
//     {
//         number : 103 , unavailableDate:[]
//     }
//     {
//         number : 104 , unavailableDate:[]
//     }

// }

export default mongoose.model("Room", RoomSchema);
