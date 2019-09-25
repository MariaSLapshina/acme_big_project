import React, { Component } from 'react'
import { HashRouter, Route, Link } from 'react-router-dom';

const Nav = () => {
    return(
        <div>
            <h1>Acme Schools</h1>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/students'>Students</Link>
                <Link to='/schools'>Schools</Link>
            </nav>
            </div>
        )
    }

class App extends Component{
    // componentDidMount(){
    // }
    render(){
        return(
            <HashRouter>
                <Route  component = {Nav}/>
            </HashRouter>
        )
    }
}

export default App