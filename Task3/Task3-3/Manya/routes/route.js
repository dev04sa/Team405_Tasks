import { Router } from "express";
import Controller from "../controllers/controller.js";
const router = Router();

router.get("/home", Controller.home);
router.get("/about", Controller.about);
router.get("/contact", Controller.contact);
router.post("/project/:id", Controller.addProject);
router.get("/projects" , Controller.getAllProjects);
router.get("/project/:id", Controller.getProject);
router.delete("/project/:id", Controller.deleteProject);
router.put("/home", Controller.updateHome);
router.put("/about", Controller.updateAbout);
router.patch("/project/:id", Controller.updateProject);

export default router ;