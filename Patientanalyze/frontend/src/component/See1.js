import React, { Component } from 'react';
import Navbar from './Navbar';
import {Link} from 'react-router-dom';
class  See1 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container-fluid">
             <div class="mainBackground img-res">
            <Navbar />
                <div className="centerfont text-white">
                What if your hospital wanted to compare its performance with other <br></br>hospitals and predict its future… <div>
                …but at the same time avoid revealing the private data of the patient.</div>
                First, you enter the data in into PatientAlyze in an encrypted form.</div><br></br>
                <p className="see2">
                <img className="ml-5 w-75" src={require('../images/see how it works 1.png')} /></p>
                <div className="text-center">
                <Link to="/see2" className="btn btn-primary text-white ml-5 p-3 mt-3 " >WHAT ABOUT OTHERS</Link></div>
            </div>
            </div>
         );
    }
}
 
export default See1 ;