import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom';
import { actions } from './store';
import { connect } from 'react-redux'
import Students from './components/Students'
import Schools from './components/Schools'
import Form from './components/Sticky'
import Nav from './components/Nav'
//import fetchStudents from './store/actions'

class App extends Component{
   
    constructor(){
        super()
        this.state = {}
       
    }
    componentDidMount(){
            this.props.fetchStudents()
            this.props._getSchools()
            
    }
   
    render(){
        return(
            // <div>Hello World</div>
            <HashRouter>
                <Route component = {Nav}/>
                <Route component = {Form}/>
                <Switch>
                    <Route exact path ='/'/>
                    <Route exact path ='/students' component = {Students}/>
                    <Route exact path ='/schools' component = {Schools}/>
                </Switch>
            </HashRouter>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchStudents: () => dispatch(actions.fetchStudents()),
        _getSchools: () => dispatch(actions._getSchools())
    }
}
export default connect(null, mapDispatchToProps)(App)