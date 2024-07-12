import mongoose, { Schema,Document } from "mongoose";;

export interface IProject extends Document{
    title:string;
    description:string;
    link:string;
    userId:object | string;  //userId of type string only for testing purposes for production only ObjectId of mongoDb
}

const projectSchema:Schema<IProject>=new mongoose.Schema({
    title:{
        type:String,
        required:[true,"title is required"]
    },
    description:{
        type:String,
        required:[true,"description is required"]
    },
    link:{
        type:String,
        required:[true,"link is required"]
    },
    userId:{
        type:String, //userId of type string only for testing purposes for production only ObjectId of mongoDb
        required:[true,"userId is required"] 
    }
    
});

const Project=mongoose.model('Project',projectSchema);
export default Project;