import React, { Component } from "react";
import Ivy from "./Modals/Ivy";
import Andre from "./Modals/Andre";
import Cody from "./Modals/Cody";
import Dean from "./Modals/Dean";
export default class About extends Component {
  // andre please be careful about which branch you push into
  constructor(props) {
    super(props);
    this.state = {
      ivy: true,
      cody: false,
      andre: false,
      dean: false
    };
  }

  showIvy = () => {
    this.setState(state => ({
      ivy: !state.ivy
    }));
  };

  showCody = () => {
    this.setState(state => ({
      cody: !state.cody
    }));
  };

  showAndre = () => {
    this.setState(state => ({
      andre: !state.andre
    }));
  };

  showDean = () => {
    this.setState(state => ({
      dean: !state.dean
    }));
  };

  render() {
    return (
      <>
        <h1 className="title">Meet the Devs!</h1>
        <div id="team">
          {/* add spans to style with images */}
          <button onClick={this.showIvy}>Ivy</button>
          {this.state.ivy ? <Ivy /> : ""}
          <button onClick={this.showCody}>Cody</button>
          {this.state.cody ? <Cody /> : ""}
          <button onClick={this.showAndre}>Andre</button>
          {this.state.andre ? <Andre /> : ""}
          <button onClick={this.showDean}>Dean</button>
          {this.state.dean ? <Dean /> : ""}
        </div>
      </>
    );
  }
}
