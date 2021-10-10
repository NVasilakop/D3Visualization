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
        <PieChart>
  
        </PieChart>
      </div>
    );
  }
}

export default First