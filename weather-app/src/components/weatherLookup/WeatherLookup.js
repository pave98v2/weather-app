import React, { Component } from 'react';
import axios from 'axios';

class WeatherLookup extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        data: [],
        loading: true,
        error: null,
      };
    
      componentDidMount() {

        let lat = "";
        let long = "";
        axios.get('/getWeather')
          .then(response => {
            console.log("YEAH")
          })
          .catch(error => {
            this.setState({
              error: error,
              loading: false,
            });
          });
      }

    render() { 
        return ( 
            <div className="WeatherLookup">
      <p>Weather</p>
    </div>
         );
    }
}
 
export default WeatherLookup;
