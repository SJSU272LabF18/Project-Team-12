import React, { Component } from 'react';
import Login from './Login'
import {Route} from 'react-router-dom';
import Home from './Home';
import See1 from './See1';
import See2 from './See2';
import See3 from './See3';
import Navbar from './Navbar';
import Create from './Create';
import About from './About';
import Delete from './Delete';
import Dashboard from './Dashboard';
import Contact from './contact'

class Main extends Component {
    state = {  }
    render() { 
        return(
        <div>
            <Route exact path="/" component={Home}/> 
            <Route exact path="/see1" component={See1}/> 
            <Route exact path="/see2" component={See2}/> 
            <Route exact path="/see3" component={See3}/> 
            <Route exact path="/login" component={Login}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/create" component={Create}/> 
            <Route exact path="/contact" component={Contact}/>
            {/* <Route exact path="/delete" component={Delete}/> */}
            <Route exact path="/analyze" component={Dashboard}/>
        </div>
          )  }
}
 
export default Main;