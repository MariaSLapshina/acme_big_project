import React from 'react'
import { connect } from 'react-redux'
const Form = () => {
    return(
        <div>
            First Name <input type = 'text'/>
            Last Name <input/>
            email <input/>
            GPA <input/>
            <select>
                <option>Not specified</option>
                <option></option>
                <option></option>
            </select>
        </div>
    )
}
export default Form
