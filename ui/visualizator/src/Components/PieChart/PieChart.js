import React, { Component } from 'react';
import axios from "axios"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { chart } from '../../Models/chart';

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
      <div>
          <p> Hello</p>
      </div>
    );
  }
}
export default PieChart