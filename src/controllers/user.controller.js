import {asyncHandler} from "../utils/asyncHandler.js";


const registerUser = asynchHandler(async (req, res) => { res.status(200).json({
    message: "chai aur code"
  })
} )
export {
    registerUser,
}

