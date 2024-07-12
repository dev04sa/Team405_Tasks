import express from 'express';
import cors from 'cors';
import { dbConnect } from './utils/db';
import projectRouter from './routes/projectRouter';
import infoRouter from './routes/infoRouter';
import myInfoRouter from './routes/myInfoRouter';

const app=express();
app.use(express.json());
app.use(cors());

app.use('/',projectRouter);
app.use('/',infoRouter);
app.use('/',myInfoRouter);

dbConnect();

const PORT=process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})