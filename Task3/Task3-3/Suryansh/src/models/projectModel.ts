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
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true 
    },
    userId:{
        type:String, //userId of type string only for testing purposes for production only ObjectId of mongoDb
        required:true  
    }
    
});

const Project=mongoose.model('Project',projectSchema);
export default Project;