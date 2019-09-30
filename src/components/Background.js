import React, { Component } from 'react';
import axios from 'axios';

export default class Background extends Component {
  static propTypes = {};
  constructor(props) {
    super(props);

    this.state = {
      background: [],
    };
  }

  async componentDidMount() {
    const res = await axios.get(
      `https://flowhome-server.herokuapp.com/api/background`
    );

    this.setState({
      background: res.data.full,
    });
  }
  render() {
    return (
      <React.Fragment>
        <img src={this.state.background} alt="bg" className="bg" />
        <div className="bg-color" />
      </React.Fragment>
    );
  }
}
