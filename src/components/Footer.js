import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer className="foot">
          <nav className="navroute">
            {/* <Link to="signup">Sign Up</Link> */}
            {/* <Link to="login">Log In</Link> */}
            <Link to="about">About Us</Link>
          </nav>
        </footer>
      </>
    );
  }
}
