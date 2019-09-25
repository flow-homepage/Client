import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <>
        <footer>
          <nav>
            <Link to="signup">Sign Up</Link>
            <Link to="login">Log In</Link>
            <Link to="about">About Us</Link>
            <Link to="contact">Contact Us</Link>
          </nav>
        </footer>
      </>
    );
  }
}

/* <a className="footer" href="./pages/signup.html">
  Sign Up
</a>
<a className="footer" href="./pages/login.html">
  Login
</a>
<a className="footer" href="./pages/about.html">
  About
</a>
<a className="footer" href="contact.html">
  Contact Us
</a> */
