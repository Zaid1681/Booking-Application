import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js";
import hotelsRoutes from "./routes/hotels.js";
import roomsRoutes from "./routes/rooms.js";
import userRoutes from "./routes/users.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

dotenv.config();

const connect = async () => {
  try {
    //trying  to connect to the mongoURI
    await mongoose.connect(`${process.env.MONGO_DB}`);
    console.log("Connected to MongoDb");
  } catch (error) {
    console.log("ERROR :", error);
    throw error;
  }
};

//call back value of mongoose,connect
//if there is problem in mongodb itself it will try to connected
mongoose.connection.on("disconnected", () => {
  console.log("Mongodb disconnected");
});
mongoose.connection.on("connected", () => {
  console.log("Mongodb connected");
});

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/hotels", hotelsRoutes);
app.use("/api/rooms", roomsRoutes);

// next -> sends the request to the next middleware and interrupt the routes
// middlware which sends the error
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage =
    err.message || "Something went wrong or some error has occured !!";
  res.status(500).json({
    sucess: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.get("/", (req, res) => {
  res.status(201).json({
    message: "Landing page!! of booking application",
  });
});
app.listen(process.env.PORT || 8000, () => {
  connect();
  console.log(`Connection sucessfull!! `);
});
