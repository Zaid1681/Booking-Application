import express from "express"
const router = express.Router()
import { deleteUser, getAllUser, getUser, updateUser } from "../controllers/user.js"
import { checkAdmin, checkUser, verifyToken } from "../utils/verifyToken.js"




//getting user authenticated by using its token inside the cookie
// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//     res.send("hello user you are Authenticated")
// }
//     //using the above param :id we will going to update the particular value
// )

// //checking a user and allow him to delete his account
// //how :=>
// router.get("/checkUser/:id", checkUser, (req, res, next) => {
//     res.send("Congrats You are authenticatd and can be able to delete you account")
// }
// )

// //checking admin
// router.get("/checkUser/:id", checkAdmin, (req, res, next) => {
//     res.send("Congrats the admin are authenticatd and can be able to delete all account")
// }
// )
//UPDATE
router.put("/:id", checkUser ,updateUser
)


//DELETE
router.delete("/:id", checkUser, deleteUser
)

//GET
router.get("/:id", checkUser, getUser

)
//GETALL
router.get("/", checkAdmin, getAllUser


)
export default router;