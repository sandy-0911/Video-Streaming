import {asyncHandler} from "../utils/asyncHandler.js";
const registerUser = asyncHandler(async (req, res) => { 
  // steps for registering a user
  // get user details from frontend (from model) (or postman)
  // validation of user details entered != not emopty
  // check if user already exists in the database (from email, username)
  // avatar and cover images files uploaded or not
  // if present then upload to cloudinary,avatar
  // create user  object - create entry in DB
  // remove passowrd and refresh token field from response
  // check for user creation 
  //return response

  //data handling from frontend
  const {fullName, email, username, password}= req.body
  console.log("User details: ", email);




} )



export {
    registerUser,
}