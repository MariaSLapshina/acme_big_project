import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Home = () => {
    return(
        <div>
            <h2>Home</h2>
            <p>Our most popular school is... with 0 students</p>
            <p>Our top performing school is ... with an average GPA of 0</p>
        </div>
    )
}
export default connect(null,null)(Home)