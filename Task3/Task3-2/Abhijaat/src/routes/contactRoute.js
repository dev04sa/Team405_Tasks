import express from 'express';
const router = express.Router();


const contactRoute = () => {
    router.get('/contact', (req, res) => {
        res.json({
            name: "Abhijaat Krishna",
            email: "abhijaat@gmail.com",
            tools: ["Node.js", "Express", "JavaScript", "HTML", "CSS"],
            mobile: "1234567890",
            techStack: ["Frontend", "Backend", "Full Stack"]
        });
    });
}


export default contactRoute;



