import express, { Request, Response } from 'express';
import fs from 'fs';
const file=fs.readFileSync('routesInfo.json','utf-8');
const fileObj=JSON.parse(file);
export const getInfoAboutRoutes=async(req:Request,res:Response)=>{
    try {
        
        res.json(fileObj);
    } catch (error) {
        res.status(404).json({
            success:false,
            message:"error in getting routes data"
        });
    }
}