import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export default class Weather extends Component {
  static propTypes = {
    lat: PropTypes.number,
    lng: PropTypes.number,
  };
  constructor(props) {
    super(props);
    
    this.state = {
      weather: '',
      summary: '',
      latitude: 0,
      longitude: 0
      // icon:'',
      // lat: 34.0522,
      // lng: -118.2436,
    };
  }

  /**
   * This function grabs the weather from our server
   * and sets it on our front end
   */

 componentDidMount() {
        // if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          this.setState({
            latitude:position.coords.latitude,
            longitude:position.coords.longitude
          });

          console.log(this.state.latitude, this.state.longitude);
          const res = await axios.get(
            `${process.env.REACT_APP_URL}/weather`,
            {
              params: {
                lat: this.state.latitude,
                lng: this.state.longitude,
              },
            }
            );
            console.log('the request', res);
            // } else {
            //   // error
            //   // request location here
            // }
        this.setState({
          weather: `${Math.round(res.data.temperature)}°F`,
          summary: res.data.summary,
          //for adding icons later
          // icon: '',
        });
        console.log(this.state.icon);
        
        }
        );

      // tick function
      // update every hour
    };
  


  // displayLocationInfo = position => {
  //   this.setState({
  //     latitude:position.coords.latitude,
  //     longitude:position.coords.longitude
  //   });
  //   console.log(this.state.latitude, this.state.longitude, 'corrected');
  // }
  

  
  render() {
    const { weather, summary } = this.state;
    return (
      <React.Fragment>
        <div className="weather">
          {weather} {summary}
        </div>
      </React.Fragment>
    );
  }
};
