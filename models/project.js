const e = require('express');
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    projectname: {
        type: String,
        required: true,
        minlength: 1
    },
    description: {
        type: String,
        minlength: 50
    },
    link: {
        type: String,
        required: true,
        unique: true,
        minlength: 10
    },
    isLive : {
        type: Boolean,
        default: true
    },
    stack: {
        type: String,
        required: true,
        enum: ['Frontend', 'Backend', 'Fullstack', 'Mobile', 'Other'],
        default: 'Other'
    },
    githubrepo: {
        type: String,
        unique: true,
    },

});

module.exports = mongoose.model('project', projectSchema);