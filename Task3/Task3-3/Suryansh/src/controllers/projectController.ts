import express, { Request,Response } from 'express';
import Project from '../models/projectModel';
import { IProject } from '../models/projectModel';

export const getInfoByProjectId=async(req:Request,res:Response)=>{
    try {
        const {id}=req.params;
        const project:IProject | null=await Project.findOne({_id:id});
        if(project){
            res.json(project);
        }else{
            res.status(404).json('project not exists');
        }
    } catch (error) {
        res.status(404).json('project not exists');
    }
}

export const createProject=async(req:Request,res:Response)=>{
    try {
        const {userId}=req.params;//userId of type string only for testing purposes for production only ObjectId of mongoDb
        const {title,description,link}=req.body;
        const project=new Project({
            title,
            description,
            link,
            userId
        })
        await project.save();
        res.status(201).json({message:'project created successfully',data:project});
    } catch (error) {
        res.status(404).json('failed to create project');
    }
}

export const modifyDescription=async(req:Request,res:Response)=>{
    try {
        const {id}=req.params;
        const {description}=req.body;
        const project =await Project.findOne({_id:id});
        if(project){
              project.description=description;
              await project.save();
              res.json({message:"project's description updated successfully"})
        }else{
            res.status(404).json('project not found');
        }
    } catch (error) {
        res.status(404).json('failed to update description of the project');
    }
}

export const deleteProject=async(req:Request,res:Response)=>{
     try {
        const {id}=req.params;
        await Project.findByIdAndDelete(id);
        res.json({message:"project deleted successfully"})        
     } catch (error) {
        res.status(404).json('failed to delete the project');
     }
}

export const getProjects=async(req:Request,res:Response)=>{
   try {
    const projects:IProject[]=await Project.find();
    res.json(projects)
   } catch (error) {
    res.status(404).json('failed to get projects');
   }
}