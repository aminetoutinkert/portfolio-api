const projectController = require('../controllers/projectController');
const express = require('express');
const router = express.Router();

router.post('/createProject', projectController.createProject);
router.get('/getAllProjects', projectController.getAllProjects);
router.put('/updateProject/:id', projectController.updateProject);
router.delete('/deleteProject/:id', projectController.deleteProject);
module.exports = router;