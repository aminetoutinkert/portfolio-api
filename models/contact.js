const mongoose = require('mongoose');

const constactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        minlength: 1
    },
    message: {
        type: String,
        required: true,
        minlength: 30
    }
});

module.exports = mongoose.model('contact', constactSchema);