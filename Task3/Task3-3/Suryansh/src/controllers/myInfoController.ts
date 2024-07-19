import express, { Request,Response } from 'express';
import fs from 'fs';

const fileContent=fs.readFileSync('myInfo.json','utf-8');
const objFile=JSON.parse(fileContent);


export const myContact=async(req:Request,res:Response)=>{
    try {
        const myContact=objFile?.contact;
        res.json(myContact);
    } catch (error) {
        res.status(404).json({success:false,message:'error in finding my information'});
    }
}

export const getAbout=async(req:Request,res:Response)=>{
    try {  
       const about=objFile?.about;
        res.json(about);
    } catch (error) {
        res.status(404).json({success:false,message:'error in to get the information about routes'});
    }
}

export const replaceAbout=async(req:Request,res:Response)=>{
    try {  
        const {about}=req.body;
        const file=objFile;
        file.about=about;
        const newContent=JSON.stringify(file);
        fs.writeFileSync('myInfo.json',newContent);
        res.json({success:true,message:"about content replaced successfully"});
    } catch (error) {
        res.status(404).json('error to replace about page');
    }
}

export const getHome=async(req:Request,res:Response)=>{
    try {  
       
     const home=objFile?.home;
        res.json(home);
    } catch (error) {
        res.status(404).json({success:false,message:'error in to get home page'});
    }
}

export const replaceHome=async(req:Request,res:Response)=>{
    try {  
        const {home}=req.body;
        const file=objFile;
        file.home=home;
        const newContent=JSON.stringify(file);
        fs.writeFileSync('myInfo.json',newContent);
        res.json({success:true,message:'home text successfully replaced'});
        
    } catch (error) {
        res.status(404).json({success:false,message:'error to replace home page'});
    }
}