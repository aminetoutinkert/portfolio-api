const express = require('express')
const mongoose = require('mongoose')
const userRoute = require('./routes/userRoute')
const skillRoute = require('./routes/skillRoute')
const projectRoute = require('./routes/projectRoute')
const contactRoute = require('./routes/contactRoute')

const app = express()
app.use(express.json())

app.use('/users/api', userRoute)
app.use('/skills/api', skillRoute)
app.use('/projects/api', projectRoute)
app.use('/contacts/api', contactRoute)
// http://localhost:5000/users/api for postman + appropriate route for each model
mongoose.connect('mongodb://localhost:27017/portfolioapi').then((result) => {
    console.log('connected to database')
    app.listen(5000, () => {
        console.log('server is running on port 5000')
    })
}).catch((err) => {
    console.log(err.message)
});