import React, { Component } from 'react';
import axios from 'axios';
export default class Credit extends Component {
  static propTypes = {};
  constructor(props) {
    super(props);
    this.rootRef = React.createRef();
  }
  
  async componentDidMount() {
    const { BACKEND_IMAGE_URL } = process.env;
    const res = await axios.get(
      `${BACKEND_IMAGE_URL}`
    );
  }
  render() {
    return <div ref={this.rootRef} className="credit" />;
  }
}
