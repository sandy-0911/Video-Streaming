import mongoose, {Schema} from "mongoose";


//In simple terms, it's used to safely store passwords so even if your database is hacked, the hacker can’t see the real passwords.bcrypt.
//jasonwebtoken is used to create a atoken that can be used to authenticate the user in the future without having to log in again
import bcrypt from "bcryptjs"; // for hashing passwords
import jwt from "jsonwebtoken"; // for creating tokens

//direct encryption not possible so we have to take help of mongoose hooks


const userSchema = new Schema(
    {
        username: {
            type : String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true // for faster search , jaldi search kar sake, little expensive bhi hota hai
        },

        email: {
            type : String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },
        fullName: {
            type : String,
            required: true,
            trim: true,
            index: true
        },
        avatar: {
            type : String, //cloudinary image url
            required: true,
        },
        coverImage: {
            type : String, //cloudinary image url
            
        },
        watchHistory: [{
            type: Schema.Types.ObjectId,
            ref: 'Video' // reference to the Video model
        }],
        password: {
            type : String,
            required: [true, "Password is required"]
        },
        refreshToken: {
            type : String
        }
    },
    {
        timestamps: true // automatically adds createdAt and updatedAt fields
    }
)

// jab bhi data save ho, usse pehle hash kar do
// ye ek middleware hai jo save hone se pehle chalega
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) { // agar password modify nahi hua hai toh seedha next function call karo
        return next() 
    }
    this.password = await bcrypt.hash(this.password, 10); // 10 is the salt rounds
    next();
})

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

//interviews : JWT is a bearer token that is used to authenticate the user

userSchema.methods.createAccessToken = function () {
    return jwt.sign(
        {_id : this._id,
        email : this.email,
        fullName : this.fullName,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY 
        }

     )
}
userSchema.methods.createRefreshToken = function () {
    return jwt.sign(
        {_id : this._id,
        
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY 
        }

     )
}


export const User = mongoose.model('User', userSchema)