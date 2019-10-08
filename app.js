const express = require('express');
const app = express();
const path = require('path');
const { Student, School } = require('./db/db').models


app.use(express.json())
app.use('/dist', express.static(path.join(__dirname, 'dist')))
app.use('/assets', express.static(path.join(__dirname, 'assets')))
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
app.post('/api/students', (req,res,next) => {
    Student.create(req.body)
    .then(student =>res.send(student))
    .catch(next)
})
app.put('/api/students/:id', (req,res,next)=> {
    Student.findByPk(req.params.id)
        .then( student => student.update(req.body))
        .then( student => res.send(student))

})
app.delete('/api/students/:id', (req,res,next)=>{
    Student.findByPk(req.params.id)
    .then(user => user.destroy())
    .then(() => res.sendStatus(204))
    .catch(next);
})

module.exports = app
