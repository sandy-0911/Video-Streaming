import {asynchHandler} from "../utils/asyncHandler.js";


const registerUser = asynchHandler(async (req, res) => { res.status(200).json({
    message: "User registered successfully"
  })
} )
export {registerUser}

