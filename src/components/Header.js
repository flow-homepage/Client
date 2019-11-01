import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <>
        <section className="logoWithText">
          <a href="https://www.flowhome.us/">
            <img src="/img/flowlogo.png" alt="" className="logoImg" />
          </a>
          Flow
        </section>
      </>
    );
  }
}
