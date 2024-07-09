import { Router } from "express";
import {
  createProject,
  deleteProject,
  projectDetail,
  updateDescription,
  updateProject,
} from "../controllers/project.controller.js";

const router = Router();

router.route("/project/new").post(createProject);

router
  .route("/project/:id")
  .get(projectDetail)
  .patch(updateDescription)
  .delete(deleteProject)
  .put(updateProject);

export default router;
