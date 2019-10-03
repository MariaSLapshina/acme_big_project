import React from 'react'
import { connect } from 'react-redux'
const destroyStudent = () => {
    
}
const _Students = ({students}) => <div>
    <div>
        {students.map(student =>
        <div>
        {`${student.firstName} `} 
        {`${student.lastName} `}
        {`${student.email} `}
        {` GPA: ${student.GPA}`}
        <button>Destroy student</button>
        </div>)}
    </div>
</div>

const Students = connect(({students})=> {
    return{
        students
    }
})(_Students)

export default Students