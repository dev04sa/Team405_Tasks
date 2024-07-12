import Project from "../models/ProjectModel.js"

let homeContent = "Hi there, user!";
let aboutContent = "Hello, my name is Manya Gupta.";

class Controller {

    static home = (req, res) => {

        return res.send(homeContent);
    }

    static about = (req, res) => {
        return res.send(aboutContent);
    }

    static contact = (req, res) => {
        return res.json({
            "name" : "Manya Gupta", 
            "email" : "manyag.ug23.ee@nitp.ac.in",
            "tools" : "VS code, Figma, Postman, MongoDB Compass",
            "mobileNo" :"12344556456",
            "techStack" : "HTML, CSS, JS , Javascript, MongoDB, Express, ReactJS, Node.js"
        })
    }

    static addProject = async (req, res) => {
        const { id } = req.params; 
        const { title, description, link } = req.body;
    
        if (title && description && link) {
            try {
                const newProject = new Project({
                    id, 
                    title,
                    description,
                    link
                });
    
                await newProject.save();
                return res.status(201).json({
                    msg: "Project has been successfully added",
                    project: newProject
                });
            } catch (error) {
                console.error("Error adding project:", error);
                return res.status(500).json({
                    msg: "Failed to add project"
                });
            }
        } else {
            return res.status(400).json({
                msg: "Enter all required fields (title, description, link)"
            });
        }
    }
    
    
    static getAllProjects = async (req, res) => {
        try {
            const projects =  await Project.find();
            return res.json({
                "msg" : "All projects are retrieved successfully",
                "projects" : projects
            })
        } catch (error) {
            return res.json({
                "msg" : "Failed to get all your projects"
            })
        }
    }

    static getProject = async (req, res) => {
        const { id } = req.params;
    
        try {
            const project = await Project.findOne({ 
                id: id 
            }); 
    
            if (project) {
                return res.json({
                    msg: "Project fetched successfully",
                    project: project
                });
            } else {
                return res.status(404).json({
                    msg: "No such project exists"
                });
            }
        } catch (error) {
            console.error("Error fetching project:", error);
            return res.status(500).json({
                msg: "Internal Server Error"
            });
        }
    }
    

    static deleteProject = async (req,res) => {
        const {id} = req.params;

        try {
            const project = await Project.findOneAndDelete({
                "id" : id
            })
            
            const projects =  await Project.find();

            if(project) {
                return res.json({
                    "msg"  : "Project deleted successfully",
                    "existing projects" : projects
                })
            } else { 
                return res.json({
                    "msg" : "No such project exists"
                })
            }
        } catch (error) {
            return res.json({
                "msg" : "Internal Server Error"
            })
        }
    }

    static updateHome = (req, res) => {
        let { message } = req.body;
        if (!message) {
            return res.status(400).json({
                msg: "Message is required to update home content"
            });
        }
    
        homeContent = message;
    
        return res.json({
            msg: "The home page content has been modified",
            content: homeContent
        });
    }
    

    static updateAbout = (req, res) => {
        const {message} = req.body;

        aboutContent = message ;

        return res.json({
            "msg" : "The about page content has been modified ",
            "content" : aboutContent
        })
    }

    static updateProject = async (req, res) => {
        const {id} = req.params;
        const {description} = req.body;

        const project =  await Project.findOne({
            "id" : id
        })

       if(project) { 
        if(description) {
            try {
                project.description = description;
                await project.save;
                 
                return res.json({
                    "msg" : "Project description has been succesfully modified", 
                    "project" : project
                })
            } catch (error) {
                return res.json({
                    "msg" : "Internal server error"
                })
            }
        } else {
            return res.json({
                "msg" : " There are no changes to make"
            })
        }
       } else {
         return res.json({
            "msg"  : "No such project exists"
         })
       }
    }


}

export default Controller;