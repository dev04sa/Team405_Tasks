const mongoose = require("mongoose")

const contactSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            maxLength:50,
        },
        email: {
            type:String,
            required:true,
          
        },

        tools:{
            type:String,

        },
        
        mobile:{
            type:Number,
            required:true,
           
        }
    }
    
);

module.exports = mongoose.model("contact", contactSchema);