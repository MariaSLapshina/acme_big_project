import React from 'react'
import { connect } from 'react-redux'
import { actions } from '../store'
//import { destroyStudent_ } from '../store/actions';

const Students = ({students, destroyStudent_}) => <div>
    <div>
        {students.map(student =>
        <div key = {student.id}>
        {`${student.firstName} `} 
        {`${student.lastName} `}
        {`${student.email} `}
        {` GPA: ${student.GPA}`}
        <button onClick = {() => destroyStudent_(student)}>Destroy student</button>
        </div>)}
    </div>
</div>

const mapStateToProps = ({students})=> {
    return{
        students
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        destroyStudent_: (student) => dispatch(actions.destroyStudent_(student)),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Students)