import express, { Request,Response } from 'express';
import MyInfo, { IMyInfo } from '../models/myInfoModel';


export const myContact=async(req:Request,res:Response)=>{
    try {
        const info:IMyInfo |null=await MyInfo.findOne({_id:"668a6fd8410afb4364350032"});
        const myContact=info?.contact;
        res.json(myContact);
    } catch (error) {
        res.status(404).json('error in finding my information');
    }
}

export const getAbout=async(req:Request,res:Response)=>{
    try {  
       const info=await MyInfo.findOne({_id:"668a6fd8410afb4364350032"});
       const about=info?.about;
        res.json(about);
    } catch (error) {
        res.status(404).json('error in to get the information about routes');
    }
}

export const replaceAbout=async(req:Request,res:Response)=>{
    try {  
        const {about}=req.body;
        const info=await MyInfo.findOne({_id:"668a6fd8410afb4364350032"});
        if(info){
            info.about=about;
            await info.save();
            res.json('about text successfully replaced');
        }
    } catch (error) {
        res.status(404).json('error to replace about page');
    }
}

export const getHome=async(req:Request,res:Response)=>{
    try {  
       const info:IMyInfo |null=await MyInfo.findOne({_id:"668a6fd8410afb4364350032"});
     const home=info?.home;
        res.json(home);
    } catch (error) {
        res.status(404).json('error in to get home page');
    }
}

export const replaceHome=async(req:Request,res:Response)=>{
    try {  
        const {home}=req.body;
        const info=await MyInfo.findOne({_id:"668a6fd8410afb4364350032"});
        if(info){
            info.home=home;
            await info.save();
            res.json('home text successfully replaced');
        }
    } catch (error) {
        res.status(404).json('error to replace home page');
    }
}