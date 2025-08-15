import {asyncHandler} from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js"
import { User } from "../models/user.model.js";
import {uploadOnCloudinary} from "../utils/cloudinary.js";

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


  const existedUser = User.findOne({
    $or: [{ username }, { email}]
  })

  if (existedUser) {
    throw new ApiError(409, "User already exists with this email or username");

   const avatarLocalpath = req.files?.avatar[0]?.path
   const coverImageLocalPath = req.files?.coverImage[0]?.path

   if (!avatarLocalpath){
    throw new ApiError(400, "Avatar image is required");  
   }

    const avatar = await uploadOnCloudinary(avatarLocalpath)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)

    if (!avatar) {
      throw new ApiError(400, "Avatar image is required");
    }

    const user = await User.create({
      fullname,
      avatar: avatar.url,
      coverImage: coverImage?.url || "",
      email,
      password,
      username: username.toLowerCase()
    })

    const createdUser = await User.findById(user._id).select(
      "-password -refreshToken"
    )
    if (!createdUser) {
      throw new ApiError(500, "User creation failed");
    }
  }
} )



export {
    registerUser,
}