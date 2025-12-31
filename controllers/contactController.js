const contact = require('../models/contact');

exports.createContactMessage = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const newContact = new contact({ name, email, message });
        await newContact.save();
        res.status(201).json(newContact);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAllContactMessages = async (req, res) => {
    try {
        const contacts = await contact.find();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};