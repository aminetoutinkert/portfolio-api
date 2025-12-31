const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    about: {
        type: String,
        minlength: 50,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true,
        minlength: 10
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 10
    },
    githublink: {
        type: String,
        unique: true,
    },
    linkedinlink: {
        type: String,
        unique: true,
    }
});

module.exports = mongoose.model('user', userSchema);