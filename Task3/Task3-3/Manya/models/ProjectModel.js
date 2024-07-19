import mongoose from "mongoose";

const ProjectSchema = mongoose.Schema({
    id: {type: Number, required :true},
    title : {type: String, required : true, trim: true},
    description : {type : String, required : true, trim : true},
    link : {type : String, required : true}
}, {timestamps: true});

const Project = mongoose.model("project", ProjectSchema);

export default Project;
