import Project from "../models/projectModel.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";

const createProject = asyncHandler(async (req, res, next) => {
  // const {title,description,projectLink}= req.body

  const project = await Project.create(req.body);
  res.status(200).json(new ApiResponse(201, project));
});

const projectDetail = asyncHandler(async (req, res, next) => {
  const projectId = req.params.id;
  const project = await Project.findById(projectId);
  if (!project) {
    return next(new ApiError(404, "Project not found"));
  }
  res.status(200).json(new ApiResponse(201, project));
});
const updateDescription = asyncHandler(async (req, res, next) => {
  const projectId = req.params.id;
  const { newDescription } = req.body;
  const project = await Project.findByIdAndUpdate(
    projectId,
    { description: newDescription },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json(new ApiResponse(201, project));
});
const deleteProject = asyncHandler(async (req, res, next) => {
  const projectId = req.params.id;
  const project = await Project.findById(projectId);
  if (!project) {
    return next(new ApiError(404, "Project not found"));
  }
  await project.deleteOne();
  res
    .status(200)
    .json(new ApiResponse(201, null, "Project Deleted Successfully"));
});
const updateProject = asyncHandler(async (req, res, next) => {
  const projectId = req.params.id;
  const { newTitle, newDescription, newProjectTitle } = req.body;
  const project = await Project.findByIdAndUpdate(
    projectId,
    {
      title: newTitle,
      description: newDescription,
      projectLink: newProjectTitle,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  if (!project) {
    return next(new ApiError(404, "Project not found"));
  }

  res.status(200).json(new ApiResponse(200, project));
});

export {
  createProject,
  projectDetail,
  updateDescription,
  updateProject,
  deleteProject,
};
