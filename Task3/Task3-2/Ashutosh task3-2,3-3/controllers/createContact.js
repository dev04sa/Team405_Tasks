const contact = require("../models/contact");

exports.createContact = async(req, res) => {
    try {
        const {name , email , mobile , tools} = req.body;

        const contactstatus = await contact.create({name,email , mobile , tools});

        res.status(200).json(
            {
                success:true,
                data:contactstatus,
                message:'Entry Created Successfully'
            }
        );
        
    } catch (err) {
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