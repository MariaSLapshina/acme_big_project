const Sequelize = require('sequelize')
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme_big_project')
const { UUID, UUIDV4, STRING } = Sequelize

const nameDef = {
    type:STRING,
    allowNull: false,
        validate: {
            notEmpty: true
        },
    unique: true
}

const idDef = {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4
}

const Student = conn.define('student', {
    id: idDef,
    firstName: {...nameDef},
    lastName: {...nameDef},
    email: {
        type:STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isEmail: true
        },
        unique: true
    },
    GPA: {
        type: STRING,
        validate: {
            isDecimal:true,
            min:0.0,
            max:4.0
        }
    }  
})  

const School = conn.define('school', {
    id: idDef,
    name: nameDef,
    imageURL:{
        type: STRING,
        validate: {
            isUrl: true
        }
    }   
})

School.hasMany(Student)
Student.belongsTo(School)


const syncAndSeed = async() => {
   await conn.sync({force:true})
   const students = [
       {firstName: 'Haoyu', lastName: 'Yu',email:'hayou@gmail.com', GPA:'3.8'},
       {firstName: 'Maria', lastName: 'Lapshina',email:'maria@gmail.com', GPA:'3.97'},
       {firstName: 'Prof', lastName: 'Katz',email:'prof@gmail.com', GPA:'2.8'}
   ]
   const schools = [
    {name:'CCNY', imageURL: 'https://www.ccny.cuny.edu/sites/default/files/styles/top_slider/public/CCNY%20Quad-2.jpg?itok=LdXcVxCj'},
    {name: 'FullStack', imageURL: 'https://media.licdn.com/dms/image/C4D0BAQGDPuTINGjJYA/company-logo_200_200/0?e=2159024400&v=beta&t=DbYjofNnM6t66Pn_BPd_1oMHvasXqH3eSik09UJ9nW8'},
    {name:'MIT', imageURL:'https://img.jakpost.net/c/2018/10/16/2018_10_16_56356_1539663432._large.jpg'}
]
const schoolsArray = [...await Promise.all(schools.map(school => School.create(school)))]
//console.log(schoolsArray)
await Promise.all(students.map(student => Student.create({...student,schoolId: schoolsArray[Math.floor(Math.random()*schoolsArray.length)].id})))

}

module.exports = {
    syncAndSeed, 
    models:{
        School,
        Student
    }
}