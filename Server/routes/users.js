import express from "express";
const router = express.Router();
import {
  deleteUser,
  getAllUser,
  getUser,
  updateUser,
} from "../controllers/user.js";
import { checkAdmin, checkUser, verifyToken } from "../utils/verifyToken.js";
//UPDATE
router.put("/:id", checkUser, updateUser);

//DELETE
router.delete("/:id", checkUser, deleteUser);

//GET
router.get("/:id", checkUser, getUser);
//GETALL
router.get("/", checkAdmin, getAllUser);
export default router;
