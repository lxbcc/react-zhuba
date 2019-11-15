import React, { Component } from 'react'
import{HashRouter as Router,Route}from 'react-router-dom'
import Login from './container/Login'
import AppTab from './container/AppTab'
export default class App extends Component {
    render() {
        return (
          <Router>
            <div>
                {/* <Login/> */}
                <AppTab/>
            </div>   
          </Router>
        )
    }
}
