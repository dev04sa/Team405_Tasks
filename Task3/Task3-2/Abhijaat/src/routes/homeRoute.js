import express from 'express';
const router = express.Router();


const homeRoute = () => {
    router.get('/home', (req, res) => {
        res.send('Welcome to the home page');
    });

}


export default homeRoute;

