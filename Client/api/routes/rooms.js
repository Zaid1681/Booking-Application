import express from "express"
import { createRoom, deleteRoom, getRoom , getAllRoom , updateRoom , updateRoomavailability} from "../controllers/room.js"
import { checkAdmin } from "../utils/verifyToken.js"
const router = express.Router()


//CREATE

router.post("/:hotelid", checkAdmin ,  createRoom)

//UPDATE
router.put("/:id" , checkAdmin , updateRoom
)
router.put("/availabikity/:id"  , updateRoomavailability
)


//DELETE
router.delete("/:id/:hotelid", checkAdmin , deleteRoom
    )

//GET
router.get("/:id", checkAdmin , getRoom

    )
//GETALL
router.get("/",  checkAdmin ,getAllRoom
   

)
export default router;