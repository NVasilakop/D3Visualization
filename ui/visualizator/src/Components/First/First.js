import React, { Component } from 'react';
import './First.css';
import axios from "axios"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
var apiMovieKey = 'https://api.themoviedb.org/3/movie/550?api_key=0744709c0c9f817d56414c84aae9d5c2';

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
      </div>
    );
  }
}

export default First