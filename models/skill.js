const mongoose = require('mongoose')

const skillsSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    level : {
        type : String,
        enum : ['beginner','intermediate','advanced'],
        required : true
    },
    category : {
        type : String,
        required : true,
        enum : ['frontend','backend','database','devops','mobile','other'],
        default : 'other'
    },
    image : {
        type : String
    }
})

module.exports= mongoose.model('skill',skillsSchema) 