import mongoose from "mongoose";
import 'dotenv/config'

export const dbConnect=async()=>{
    try {
        console.log('database connecting...');
        await mongoose.connect(process.env.MONGO_URL as string);
        console.log('database connected');
        
    } catch (error) {
        console.log('error in database connection');
        
    }
}