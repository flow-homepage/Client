import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <>
        <section className="logoWithText">
          <Link to="/">
            <img src="/img/flowlogo.png" alt="" className="logoImg" />
          </Link>
          Flow
        </section>
      </>
    );
  }
}
