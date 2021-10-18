import React, { Component } from 'react';
import axios from "axios"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { chart } from '../../Models/chart';
import * as d3 from "d3";

var options = {
    method: 'GET',
    url: 'http://127.0.0.1:5000/getDeathsByContinent'
};
class PieChart extends Component {

  constructor(props) {
    super(props);
    this.state = {
        deaths_byContinent:[]
    };
    this.get_Deaths_byContinent();
  }

  componentDidMount() {
    this.drawChart();
  }



drawChart() {
  
}


 get_Deaths_byContinent(){
    axios.request(options).then( (response) => {
        // console.log(response.data);
        console.log(response.data);
        var objs = JSON.parse(response.data.data);

        var items=[];
        const keys = Object.keys(objs);
        keys.forEach((key) => {
            // console.log(`${objs[key]}`)
            items.push(Object.assign(new chart(key,objs[key])));
        });

        console.log(items);
        this.setState({
            deaths_byContinent: response.data
        });
    }).catch(function (error) {
        console.error(error);
    });
 } 

  render() {
    return (
     <div className="dropdown">
        <a className="btn btn-secondary dropwdown-toggle" href="#" role="button" id="dropdownLocation" data-bs-toggle="dropdown" aria-expanded="false">
          Choose A Location
        </a>

        <ul className="dropdown-menu" aria-labelledby="dropdownLocation">
        <li><a className="dropdown-item" href="#">Locations</a></li>
        <li><a className="dropdown-item" href="#">Continents</a></li>
        </ul>
     </div>
    );
  }
}
export default PieChart