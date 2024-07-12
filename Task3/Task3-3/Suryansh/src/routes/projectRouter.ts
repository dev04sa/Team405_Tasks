import express from 'express';
import { createProject, deleteProject, getInfoByProjectId, getProjects, modifyDescription } from '../controllers/projectController';

const projectRouter=express.Router();

projectRouter
.get('/projects',getProjects)
.get('/project/:id',getInfoByProjectId)
.post('/project/:userId',createProject)
.patch('/project/:id',modifyDescription)
.delete('/project/:id',deleteProject)

export default projectRouter;