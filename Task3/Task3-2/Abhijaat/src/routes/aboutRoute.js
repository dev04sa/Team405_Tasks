import express from 'express';
const router = express.Router();


const aboutRoute = () => {
    router.get('/', (req, res) => {
        res.send('About the Developer: Abhijaat ');
    });
}


export default aboutRoute;