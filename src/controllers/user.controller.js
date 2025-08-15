import {asyncHandler} from "../utils/asyncHandler.js";
const registerUser = asyncHandler(async (req, res) => { 
  console.log("Correct route hit")
  res.status(200).json({
    
    message: "api hit successfully",
  })
} )



export {
    registerUser,
}