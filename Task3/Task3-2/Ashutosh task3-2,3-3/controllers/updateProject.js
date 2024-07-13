//import th model
const Project = require("../models/Project");

//define route handler

exports.updateProject = async(req,res) => {
    try {
        const {id} = req.params;
        const {title, description} = req.body;

        const todo = await Project.findByIdAndUpdate(
            {_id:id},
            {title, description, updatedAt: Date.now()},
        )

        res.status(200).json({
            success:true,
            data:todo,
            message: `Updated Successfully`,
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
