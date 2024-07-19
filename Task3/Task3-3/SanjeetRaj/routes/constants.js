const express= require("express")
const router=express.Router()
const Constants=require("../models/constants")

/**
 * @method get 
 * @route /
 * @description To get info about all the available routes
 */
router.get("/",(req,res)=>{
    res.render("index")
})


/**
 * @method get 
 * @route /home
 * @description get info about home
 */
router.get("/home",async (req,res)=>{
    const home=await Constants.find({},{home:1,_id:0})
    res.status(200).json(home)    
})


/**
 * @method get 
 * @route /about
 * @description get info about "about " section
 */
router.get("/about",async (req,res)=>{
    const about=await Constants.find({},{about:1,_id:0})
    res.status(200).json(about)   
})


/**
 * @method get 
 * @route /contactus
 * @description get info about contactus
 */
router.get("/contactus",async (req,res)=>{
    const contactus=await Constants.find({},{contactus:1,_id:0})
    res.status(200).json(contactus)   
})


/**
 * @method put 
 * @route /home
 * @description to replace the content of home
 */
router.put("/home",async (req,res)=>{
    if(req.body && !req.body.home){
        res.status(200).json({msg:"Fill the home field"})
    }
    try{
        const home=await Constants.updateOne({},{$set:{home:req.body.home}},{new:true})
        res.status(200).json(home)
    }catch(err){
        res.status(200).json({msg:"Some error occurred"})
    }
})


/**
 * @method put 
 * @route /about
 * @description to replace the content of about 
 */
router.put("/about",async (req,res)=>{
    if(req.body && !req.body.about){
        res.status(200).json({msg:"Fill the about field"})
    }
    try{
        const about=await Constants.updateOne({},{$set:{about:req.body.about}},{new:true})
        res.status(200).json(about)
    }catch(err){
        res.status(200).json({msg:"Some error occurred"})
    }
})


module.exports=router