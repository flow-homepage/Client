import React, { Component } from 'react';
import Moment from 'moment';
import 'moment-timezone';

export default class MomentTime extends Component {
  static propTypes = {};
  constructor(props) {
    super(props);

    this.state = {
      time: '',
    };
  }
  /**
   * This function provides and sets
   * moment on the frontend
   */
  componentDidMount() {
    const data = Moment().format('h:mm a  MMMM Do YYYY');
    this.setState({
      time: data,
    });
  }
  render() {
    return <h1> {this.state.time} </h1>;
  }
}
