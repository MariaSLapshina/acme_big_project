import React from 'react'
import { connect } from 'react-redux'

const _Schools = ({schools}) => <div>
    <ul>
        {schools.map(school =><li key = {school.id}>{school.name}</li>)}
    </ul>
</div>

const Schools = connect(({schools})=> {
    return{
        schools
    }
})(_Schools)

export default Schools