import React from 'react'
import { connect } from 'react-redux'

const _Students = ({students}) => <div>
    <ul>
        <h1>hi theere hoe</h1>
        {students.map(student =><li key = {student.id}>{student.firstName}</li>)}
    </ul>
</div>

const Students = connect(({students})=> {
    return{
        students
    }
})(_Students)

export default Students