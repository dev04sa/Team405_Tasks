import mongoose from "mongoose";

const connectDb = async (DB_URL) => {
    const DB_OPTION = {
        dbName : "hackslash-task-3"
    }
     
    try {
        await mongoose.connect(DB_URL,DB_OPTION);
        console.log("Database has been connected successfully");
    } catch (error) {
        console.log("Database failed to connect")
    }
}

export default connectDb;