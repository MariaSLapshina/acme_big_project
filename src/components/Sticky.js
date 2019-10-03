import React from 'react'
import { connect } from 'react-redux'
const Form = () => {
    return(
        <div>
            First Name <input type = 'text'/>
            Last Name <input type= 'text'/>
            email <input type = 'email'/>
            GPA <input type = 'number'/>
            Enrolled at<select>
                <option>Not specified</option>
                <option></option>
                <option></option>
            </select>
            <button>Save</button>
        </div>
    )
}
export default Form
