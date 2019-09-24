import React, { Component } from 'react';
import axios from 'axios';

export default class Weather extends Component {
  static propTypes = {};
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
    const res = await axios.get(
      `https://flowhome-server.herokuapp.com/api/weather`
    );
    // console.log(res);
    this.setState({
      weather: `${res.data.temperature}°F`,
      summary: res.data.summary,
    });
  }
  render() {
    return (
      <React.Fragment>
        <h1>
          {this.state.weather} {this.state.summary}
        </h1>
      </React.Fragment>
    );
  }
}
