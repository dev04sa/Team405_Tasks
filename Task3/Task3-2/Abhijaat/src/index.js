import * as dotenv from 'dotenv';
dotenv.config();
import connectDB from "./db/index.js";
import express from 'express';
const app = express();
import aboutRoute from './routes/aboutRoute.js';
import homeRoute from './routes/homeRoute.js';
import contactRoute from './routes/contactRoute.js';
import projectsRoute from './routes/projectsRoute.js';


connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(` server is running at port ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log("MONGODB CONNECTION FAILED !!!!", error)
    })



app.use('/home', homeRoute);
app.use('/about', aboutRoute);
app.use('/contact', contactRoute);
app.use('/projects', projectsRoute);

app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT || 8000}`);
});










