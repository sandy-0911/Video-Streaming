import {asyncHandler} from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js"
import { User } from "../models/user.model.js";

const registerUser = asyncHandler(async (req, res) => { 
  // steps for registering a user
  // get user details from frontend (from model) (or postman)
  // validation of user details entered != not empty
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

  // if (fullName === ""){
  //   throw new ApiError(400, "Full name is required");
  // }
  if (
    [fullName, email, username, password].some((field) => field?.trim() === "")
  ){
    throw new ApiError(400, "All fields are required");
  }


} )



export {
    registerUser,
}