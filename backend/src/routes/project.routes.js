const express = require('express');
const multer = require('multer');
const projectController = require('../controllers/project.controller.js');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post('/', upload.single('image'), projectController.createProject);
router.get('/', projectController.getAllProjects);

module.exports = router;
