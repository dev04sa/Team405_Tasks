//import th model
const Project = require("../models/Project");


//define route handler

exports.createProject = async(req,res) => {
    try {
            //extract title and desxcription from reauest body
            const {title,description , link} = req.body;
            
            //create a new Todo Obj and insert in DB
            const response = await Project.create({title,description , link});

           
            //send a json response with a success flag
            res.status(200).json(
                {
                    success:true,
                    data:response,
                    message:'Entry Created Successfully'
                }
            );
    }
    catch(err) {
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}





