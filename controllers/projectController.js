const project = require('../models/project');
// ajouter un projet
exports.createProject = async (req, res) => {
    try {
        const { projectname, description, link, isLive, stack, githubrepo } = req.body;
        const newProject = new project({ projectname, description, link, isLive, stack, githubrepo });
        await newProject.save();
        res.status(201).json(newProject);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.updateProject = async (req, res) => {
    try {
        const { id } = req.params;
        const { projectname, description, link, isLive, stack, githubrepo } = req.body;
        const updatedProject = await project.findByIdAndUpdate(
            id,
            { projectname, description, link, isLive, stack, githubrepo },
            { new: true }
        );
        res.status(200).json(updatedProject);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.deleteProject = async (req, res) => {
    try {
        const { id } = req.params;
        await project.findByIdAndDelete(id);
        res.status(200).json({ message: 'Project deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.getAllProjects = async (req, res) => {
    try {
        const projects = await project.find();
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};  