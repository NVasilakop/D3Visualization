import React, { Component } from 'react';
import './First.css';
import axios from "axios"
import PieChart from '../PieChart/PieChart';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import ContinentPicker from '../ContinentPicker/ContinentPicker';

var options = {
    method: 'GET',
    url: 'http://127.0.0.1:5000/'
};

class First extends Component {
  //  routeResult = useRoutes(routes);

  constructor(props) {
    super(props);
    this.state = {
        covidThings:[]
    };
    this.getBackEnd_Data();
  }

 getBackEnd_Data(){
    axios.request(options).then( (response) => {
        console.log(response.data);
        this.setState({
            covidThings: response.data
        });
    }).catch(function (error) {
        console.error(error);
    });
 } 

  render() {
    return (
      <div>
      <div className="wrapper">
    <nav id="sidebar">
        <div className="sidebar-header">
            <h3>Bootstrap Sidebar</h3>
        </div>

        <ul className="list-unstyled components">
            <p>Dummy Heading</p>
            <li className="active">
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Home</a>
                <ul className="collapse list-unstyled" id="homeSubmenu">
                    <li>
                        <a href="#">Home 1</a>
                    </li>
                    <li>
                        <a href="#">Home 2</a>
                    </li>
                    <li>
                        <a href="#">Home 3</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Pages</a>
                <ul className="collapse list-unstyled" id="pageSubmenu">
                    <li>
                        <a href="#">Page 1</a>
                    </li>
                    <li>
                        <a href="#">Page 2</a>
                    </li>
                    <li>
                        <a href="#">Page 3</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#">Portfolio</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
        </ul>

    </nav>
</div>
{/* <div className="container-fluid">
       <button type="button" id="sidebarCollapse" class="btn btn-info">
                <i class="fas fa-align-left"></i>
                <span>Toggle Sidebar</span>
            </button>
  </div> */}
  <ContinentPicker>
    
  </ContinentPicker>
  <PieChart>

  </PieChart>
      </div>
    );
  }
}

export default First