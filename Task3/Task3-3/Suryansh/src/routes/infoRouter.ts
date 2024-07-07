import express from 'express';
import { getInfoAboutRoutes } from '../controllers/infoController';

const infoRouter=express.Router();

infoRouter
.get('/',getInfoAboutRoutes)

export default infoRouter;