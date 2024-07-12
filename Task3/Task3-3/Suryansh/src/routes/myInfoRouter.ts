import express from 'express';
import { getAbout, getHome, myContact, replaceAbout, replaceHome } from '../controllers/myInfoController';

const myInfoRouter=express.Router();

myInfoRouter
.get('/Contact',myContact)
.get('/home',getHome)
.get('/about',getAbout)
.put('/about',replaceAbout)
.put('/home',replaceHome)

export default myInfoRouter;