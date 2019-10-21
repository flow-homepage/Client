import React, { Component } from 'react';
import axios from 'axios';

export default class Credit extends Component {
  static propTypes = {};
  constructor(props) {
    super(props);
    this.rootRef = React.createRef();
  }

  async componentDidMount() {
    const res = await axios.get(
      `https://flowhome-server.herokuapp.com/api/background`
    );
  }
  render() {
    return <div ref={this.rootRef} className="credit" />;
  }
}
