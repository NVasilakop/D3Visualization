import React, { Component } from 'react';
import axios from "axios"
import {continent} from '../../Models/continent'
var options = {
    method: 'GET',
    url: 'http://127.0.0.1:5000/getlocationsByContinent'
};
class ContinentPicker extends Component {

    constructor(props) {
      super(props);
      this.state = {
          continents:[]
      };
      this.get_continents();
    }

get_continents(){
    axios.request(options).then( (response) => {
        var listobjs = response.data.jsonData;

        var items=[];

        listobjs.forEach(element => {
            var obj = JSON.parse(element);
            var property = Object.getOwnPropertyNames(obj)[0];
            const key = Object.keys(element);
            items.push(Object.assign(new continent(property,obj[property])))
    });
        console.log(items);
        this.setState({
            continents: items
        });
    }).catch(function (error) {
        console.error(error);
    });
}

render() {
  return (
    <div>
        Hi from picker
    </div>
  );
}
}
export default ContinentPicker