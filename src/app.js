import express from 'express'
import cors from 'cors' // cross-origin resource sharing
import cookieParser from 'cookie-parser'

const app = express();

app.use(cors({
    origin : process.env.CORS_ORIGIN, //takes the origin from environment variable
    credentials: true
}))

app.use(express.json({limit: "16kb"})) //parses incoming requests with JSON payloads
app.use(express.urlencoded({extended: true, limit: "16kb"})) // urlencoded data parsing like with & or ? in the url
app.use(express.static('public')) //serves static files from the public directory
app.use(cookieParser()) // parses cookies attached to the client request object


//routes imports
import userRouter from './routes/user.routes.js';

//routes declaration
app.use("/api/v1/users", userRouter);

//final url : http://localhost:8000/api/v1/users/register
//final url : http://localhost:8000/api/v1/users/login
export {app};