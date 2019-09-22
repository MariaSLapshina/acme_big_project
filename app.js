const express = require('express');
const app = express();
const path = require('path');
const { Student, School } = require('./db').models

module.exports = app

app.use(express.json())
app.get('/', (req,res,next) => res.sendFile(path.join(__dirname, 'index.html')))

app.get('/api/schools', (req,res,next) => {
    School.findAll()
    .then(schools => res.send(schools))
    .catch(next)
})
app.get('/api/students', (req,res,next) => {
    Student.findAll()
    .then(students => res.send(students))
    .catch(next)
})
app.post('api/students', (req,res,next) => {
    Student.create(req.body)
    .then(student =>res.send(student))
    .catch(next)
})