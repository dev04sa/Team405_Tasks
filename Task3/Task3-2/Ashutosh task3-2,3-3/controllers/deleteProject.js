//import th model
const Project = require("../models/Project");

//define route handler

exports.deleteProject = async(req,res) => {
    try {
        const {id} = req.params;

        await Project.findByIdAndDelete(id);

        res.json({
            success:true,
            message:"Project DELETED",
        })
       
    }
    catch(err) {
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:'Server Error',
        });
    }
}
