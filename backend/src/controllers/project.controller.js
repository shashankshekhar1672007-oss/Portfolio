const Project = require('../models/project.model.js');
const uploadImage = require('../services/storage.service.js');

async function createProject(req, res) {
    try {
        const { title, description, liveLink, githubLink, tags } = req.body;

        if (!title || !description) {
            return res.status(400).json({ error: "Title and description are required" });
        }

        if (!req.file) {
            return res.status(400).json({ error: "Please upload a project preview image" });
        }

        // Upload image to ImageKit
        const uploadResult = await uploadImage(req.file.buffer, req.file.originalname);
        
        let tagsArray = [];
        if (tags) {
            if (typeof tags === 'string') {
                tagsArray = tags.split(',').map(tag => tag.trim()).filter(Boolean);
            } else if (Array.isArray(tags)) {
                tagsArray = tags;
            }
        }

        const project = await Project.create({
            title,
            description,
            image: uploadResult.url,
            liveLink,
            githubLink,
            tags: tagsArray
        });

        return res.status(201).json({
            message: "Project created successfully",
            project
        });
    } catch (error) {
        console.error("Error in createProject:", error);
        return res.status(500).json({ error: "Failed to create project" });
    }
}

async function getAllProjects(req, res) {
    try {
        const projects = await Project.find().sort({ createdAt: -1 });
        return res.status(200).json(projects);
    } catch (error) {
        console.error("Error in getAllProjects:", error);
        return res.status(500).json({ error: "Failed to fetch projects" });
    }
}

module.exports = {
    createProject,
    getAllProjects
};
