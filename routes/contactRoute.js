const contactController = require('../controllers/contactController');
const express = require('express');
const router = express.Router();

router.post('/createContactMessage', contactController.createContactMessage);
router.get('/getAllContactMessages', contactController.getAllContactMessages);
module.exports = router;
