import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Nav = ({studentCount, schoolCount, location: {pathname}}) => {
    return(
        <div>
            <h1>Acme Schools</h1>
            <nav>
                <Link to='/' className={ pathname === '/' ? 'active': ''}>Home</Link>
                <Link to='/students' className={ pathname === '/students' ? 'active': ''}>Students ({studentCount})</Link>
                <Link to='/schools' className={ pathname === '/schools' ? 'active': ''}>Schools ({schoolCount})</Link>
                <Link /*to='' className={ pathname === '/' ? 'active': ''}*/>Most popular name(0)</Link>
                <Link /*to='' className={ pathname === '/' ? 'active': ''}*/>Top school</Link>
            </nav>
            </div>
        )
    }

const mapStateToProps = ({ students,schools })=> {
    const studentCount = students.length
    const schoolCount = schools.length
    // const popularSchool = schools.reduce((acc,school)=>{
    //     if(acc>s)
    // },0)
        return {
            studentCount,
            schoolCount
        }
}

export default connect(mapStateToProps)(Nav);