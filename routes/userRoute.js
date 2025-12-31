const userController = require('../controllers/userController');
const express = require('express');
const router = express.Router();

router.post('/createUsers', userController.createUser);
router.put('/updateUser/:id', userController.updateUser);
router.get('/getAllUsers', userController.getAllUsers);
module.exports = router;