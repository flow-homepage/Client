import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Footer extends Component {
  static propTypes = {};
  constructor(props) {
    super(props);
    this.state = {
      maker: '',
      makerUrl: '',
      location: '',
    };
  }

  async componentDidMount() {
    const res = await axios.get(
      `https://flowhome-server.herokuapp.com/api/background`
    );

    this.setState({
      maker: res.data.user.name,
      makerUrl: `${res.data.user.links.html}?utm_source=flow_homepage&utm_medium=referral`,
      location: res.data.user.location,
    });
  }
  render() {
    return (
      <>
        <footer className="foot">
          <div className="credits">
            Photo of {''} {this.state.location} {''} by {''}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={this.state.makerUrl}
            >
              {this.state.maker}
            </a>
            {''} on {''}
            <a href="https://unsplash.com?utm_source=flow_homepage&utm_medium=referral">
              Unsplash
            </a>
          </div>
          <nav className="navroute">
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
