const express  = require("express");
const router = express.Router();

//import controller
const {createProject } = require("../controllers/createProject");
const {createContact  } = require("../controllers/createContact");
const {getProject, getProjectById , getContact } = require("../controllers/getProject");
const {updateProject} = require("../controllers/updateProject");
const {deleteProject} =  require("../controllers/deleteProject");

//define APi routes
router.post("/createProject", createProject);
router.post("/createcontact" ,createContact );
router.get("/getcontact" , getContact );
router.get("/getProject", getProject);
router.get("/getProject/:id", getProjectById);
router.put("/updateProject/:id", updateProject);
router.delete("/deleteProject/:id", deleteProject);

module.exports = router;