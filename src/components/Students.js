import React from 'react'
import { connect } from 'react-redux'
import { actions } from '../store'
//import { destroyStudent_ } from '../store/actions';

const _Students = ({students}) => <div>
    <div>
        {students.map(student =>
        <div key = {student.id}>
        {`${student.firstName} `} 
        {`${student.lastName} `}
        {`${student.email} `}
        {` GPA: ${student.GPA}`}
        <button onClick = {() => actions.destroyStudent_(student)}>Destroy student</button>
        </div>)}
    </div>
</div>

const Students = connect(({students})=> {
    return{
        students
    }
})(_Students)

const mapDispatchToProps = (dispatch) => {
    return{
        destroyStudent_: () => dispatch(actions.destroyStudent_()),
    }
}
export default connect(null, mapDispatchToProps)(Students)