import mongoose, { Schema } from "mongoose";

export interface IMyInfo {
    about:string
    contact:object
    home:string
}

const myInfoSchema:Schema<IMyInfo>=new mongoose.Schema({
    about:{
        type:String,
        required:true
    },
    contact:{
        name:{
            type:String,
            required:true
        },
        mobileNumber:{
            type:Number,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        techStacks:[String],
        tools:[String]
    },
    home:{
        type:String,
        required:true
    }
})

const MyInfo=mongoose.model('MyInfo',myInfoSchema);
export default MyInfo;