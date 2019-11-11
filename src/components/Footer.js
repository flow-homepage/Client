import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Footer extends Component {
  render() {
    return (
      <>
        <footer className="foot">
          <nav className="navroute">
            {/* <Link to="signup">Sign Up</Link> */}
            {/* <Link to="login">Log In</Link> */}
            <Link to="about">About Us</Link>
            <a href="mailto: team@flowhome.us" aria-label="Link to email us">Contact Us</a>
            <a href="https://forms.gle/NNhNxEVXd5UyB85CA" target="blank" aria-label="Link to feedback form">Feedback</a>
          </nav>
        </footer>
      </>
    );
  }
}
