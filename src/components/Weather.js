import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export default class Weather extends Component {
  static propTypes = {
    lat: PropTypes.number,
    lng: PropTypes.number
  };
  constructor(props) {
    super(props);

    this.state = {
      weather: '',
      summary: '',
    };
  }

  /**
   * This function grabs the weather from our server
   * and sets it on our front end
   */
  async componentDidMount() {
    const { lat, lng } = this.props;
    const res = await axios.get(
      `https://flowhome-server.herokuapp.com/api/weather`, { 
        params: {
          lat,
          lng

        }
      }
    );
    this.setState({
      weather: `${res.data.temperature}°F`,
      summary: res.data.summary,
    });

    // tick function
    // update every hour
  }
  render() {
    const { weather, summary } = this.state;
    return (
      <React.Fragment>
        <h1 className="weather">
          {weather} {summary}
        </h1>
      </React.Fragment>
    );
  }
}
