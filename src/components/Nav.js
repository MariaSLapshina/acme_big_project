import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Nav = ({studentCount, schoolCount, location: {pathname}}) => {
    return(
        <div>
            <h1>Acme Schools</h1>
            <nav>
                <Link to='/' className={ pathname === '/' ? 'active': ''}>Home</Link>
                <Link to='/students'>Students ({studentCount})</Link>
                <Link to='/schools'>Schools ({schoolCount})</Link>
            </nav>
            </div>
        )
    }

const mapStateToProps = ({ students,schools })=> {
    const studentCount = students.length
    const schoolCount = schools.length
        return {
            studentCount,
            schoolCount
        }
}

export default connect(mapStateToProps)(Nav);