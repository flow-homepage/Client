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
    };
  }

  /**
   * This function grabs the weather from our server
   * and sets it on our front end
   */
  async componentDidMount() {
    const { lat, lng } = this.props;
    const res = await axios.get(
      `${process.env.REACT_APP_URL}/weather`,
      {
        params: {
          lat,
          lng,
        },
      }
    );
    this.setState({
      weather: `${Math.round(res.data.temperature)}°F`,
      summary: res.data.summary,
    });

    // tick function
    // update every hour
  }
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
}
