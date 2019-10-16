import React, { Component } from "react";
import PropTypes from "prop-types";
import BrowserHistory from "./BrowserHistory";
export default class Home extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <div>
        <BrowserHistory />
      </div>
    );
  }
}
