import mongoose, { connect } from 'mongoose';
import { DB_NAME } from '../constants.js';

const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`Database connected: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("Database connection error:", error);
        process.exit(1);
    }
}


export default connectDB;