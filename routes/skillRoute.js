const skillController = require('../controllers/skillController');
const express = require('express');
const router = express.Router();

router.post('/createSkill', skillController.createSkill);
router.put('/updateSkill/:id', skillController.updateSkill);
router.delete('/deleteSkill/:id', skillController.deleteSkill);
router.get('/getAllSkills', skillController.getAllSkills);
module.exports = router;

