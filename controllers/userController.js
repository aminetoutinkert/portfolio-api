const user = require('../models/user');



exports.createUser = async (req, res) => {
    try {
        const { name, about, status, phone, email, githublink, linkedinlink } = req.body;
        const newUser = new user({ name, about, status, phone, email, githublink, linkedinlink });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, about, status, phone, email, githublink, linkedinlink } = req.body;
        const updatedUser = await user.findByIdAndUpdate(
            id,
            { name, about, status, phone, email, githublink, linkedinlink },
            { new: true }
        );
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await user.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};