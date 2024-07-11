const express=require("express")
const Projects=require("../models/projects")
const router=express.Router()
module.exports=router

/**
 * @method get
 * @route /project/
 * @description returns all the projects
 */
router.get("/",async(req,res)=>{
    try{
        const projectList=await Projects.find()
        return res.status(200).json(projectList)
    }catch(err){
        return res.status(500).json({msg:err})
    }   
})


/**
 * @method get
 * @route /project/:id
 * @description returns the project with the given id
 */
router.get("/:id",async(req,res)=>{
    try{
        const project=await Projects.findById(req.params.id)

        if(!project){
            return res.status(404).json({msg:"Data not found"})
        }
        return res.status(200).json(project)

    }catch(err){
        if (err.message.indexOf('Cast to ObjectId failed') !== -1)
            return res.status(400).json({msg:"Invalid Id"})
        return res.status(500).json({msg:err.msg})
    }
})


/**
 * @method post
 * @route /project/add
 * @description add the  project 
 */
router.post("/add",async (req,res)=>{
    if(req.body && !req.body.title && !req.body.description && !req.body.link){
        return res.status(400).json({msg:"fill all the required fields"})
    }
    try{
        
        let newProject=new Projects({
            title:req.body.title,
            description:req.body.description,
            link:req.body.link
        })
        newProject=await newProject.save()
        return res.status(200).json(newProject)

    }catch(err){
        return res.status(500).json({msg:"Some error occurred while adding "})
    }
})


/**
 * @method patch 
 * @route /project/:id
 * @description modify the description of the project
 */
router.patch("/:id",async(req,res)=>{
    if(req.body && !req.body.description){
        return res.status(400).json({msg:"Fill the description field"})
    }
    try{
        const updatedProject=await Projects.findByIdAndUpdate(req.params.id,{$set:{description:req.body.description}},{new:true})
        return res.status(200).json(updatedProject)
    }catch(err){
        if (err.message.indexOf('Cast to ObjectId failed') !== -1)
            return res.status(400).json({msg:"Invalid Id"})
        return res.status(500).json({msg:err.msg})
    }
})

/**
 * @method delete 
 * @route /project/:id
 * @description delete the project
 */
router.delete("/:id",async (req,res)=>{
    try{
        await Projects.findByIdAndDelete(req.params.id)
        res.status(200).json({msg:`Successfully deleted the project with id ${req.params.id}`})
    }catch(err){
        if (err.message.indexOf('Cast to ObjectId failed') !== -1)
            return res.status(400).json({msg:"Invalid Id"})
        return res.status(500).json({msg:err.msg})
    }
    
})