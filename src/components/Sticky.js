import React from 'react'
import { connect } from 'react-redux'
import Schools from './Schools';
import { actions } from '../store'

const Form = ({schools, createStudent_}) => {
    return(
        <div id = 'form'>
            First Name <input type = 'text'/><br/>
            Last Name <input type= 'text'/><br/>
            email <input type = 'email'/><br/>
            GPA <input type = 'number'/><br/>
            Enrolled at<select>
                <option>--Not enrolled--</option>
               {schools.map(school => <option key = {school.id}>{school.name}</option>)}
            </select><br/>
            <button /*onClick = {()=>createStudent_}*/>Save</button>
        </div>
    )
}
const mapStateToProps = ({ schools })=> {
 
    // const popularSchool = schools.reduce((acc,school)=>{
    //     if(acc>s)
    // },0)
        return {
            schools
        }
}

export default connect(mapStateToProps)(Form)
