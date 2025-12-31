const skill = require('../models/skill');


exports.createSkill = async (req, res) => {
    try {
        const { name, level, category, image } = req.body;
        const newSkill = new skill({ name, level, category, image });
        await newSkill.save();
        res.status(201).json(newSkill);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateSkill = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, level, category, image } = req.body;
        const updatedSkill = await skill.findByIdAndUpdate(
            id,
            { name, level, category, image },
            { new: true }
        );
        res.status(200).json(updatedSkill);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.deleteSkill = async (req, res) => {
    try {
        const { id } = req.params;
        await skill.findByIdAndDelete(id);
        res.status(200).json({ message: 'Skill deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



exports.getAllSkills = async (req, res) => {
    try {
        const skills = await skill.find();
        res.status(200).json(skills);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};