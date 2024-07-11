const  mongoose  = require("mongoose");

const constantsSchema=new mongoose.Schema({
    home:String,
    about:String,
    contactus:String,
})
const constants=mongoose.model("Constants",constantsSchema)
module.exports=constants