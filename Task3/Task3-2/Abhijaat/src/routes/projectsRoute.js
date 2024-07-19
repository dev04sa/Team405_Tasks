import express from 'express';
import fs from 'fs-extra';
const router = express.Router();


const projectsRoute = () => {
    router.get('/', async (req, res) => {
        try {
            const data = await fs.readJson('./data.json');
            res.json(data.projects);
        } catch (err) {
            res.status(500).send('Error reading projects data');
        }
    });

    router.get('/:id', async (req, res) => {
        try {
            const data = await fs.readJson('./data.json');
            const project = data.projects.find(p => p.id == req.params.id);
            if (project) {
                res.json(project);
            } else {
                res.status(404).send('Project not found');
            }
        } catch (err) {
            res.status(500).send('Error reading projects data');
        }
    });
}

export default projectsRoute;