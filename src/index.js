// require('dotenv').config({path: './config.env'});
import dotenv from 'dotenv';
import connectDB from "./db/index.js";

dotenv.config({
        path:'./env'
})

connectDB()













// import express from "express";
// const app = express();  

//iffy use karenge


// ;( async() => {
//     try{
//          await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//          app.on("error", (error)=> {
//             console.log("Error :", error);
//             throw error
//          })

//          app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port $ {process.env.PORT}`); })

            
//     }catch (error){
//             console.log("error: ", error)
//             throw err
//     }
// })()