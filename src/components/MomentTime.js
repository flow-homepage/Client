import React, { Component } from 'react';
import Moment from 'moment';
import 'moment-timezone';

export default class MomentTime extends Component {
  constructor() {
   this.state.date = new Date();
  }

  updateTime(){
    var date = this.state.date
    this.setState({ date: date.setSeconds(date.getSeconds() + 1});
    }
  componentDidMount(){
    setInterval(this.updateTime, 1000);

 }
    

  /**
   * This function provides and sets
   * moment on the frontend
   */
  // componentDidMount() {
  //   const data = Moment().format('h:mm a  MMMM Do YYYY');
  //   this.interval = setInterval(() => this.setState({
  //     time: Date.now() }) ,1000);
  //   }
  //   componentWillUnmount() {
  //     clearInterval(this.interval);
  //   }

  //   // componentdidupdate

  //   // it needs to get refreshed every second

  //   // tick functions
  // }
  
  render() {
    const together = "2017-05-14T06:30";
    // return <h1 className="time"> {this.state.time} </h1>;
    <p> <Moment interval={1000} diff={together} unit="seconds">{this.state.date}</Moment> Seconds</p>
  }
}
