import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LocationModal extends Component {
  static propTypes = {
    getCurrentPosition: PropTypes.func,
  };

  geolocation = () => {
    if (navigator.geolocation) this.props.getCurrentPosition();
  }

  render() {
    return (
      <div className="locationModal">
        <h1>Enter your Location</h1>
        <input type="text" />
        <button onClick={this.geolocation}>Use Current Location</button>
      </div>
    );
  }
}
