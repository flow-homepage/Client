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
    };
  }

  async componentDidMount() {
    const res = await axios.get(
      `https://flowhome-server.herokuapp.com/api/background`
    );

    this.setState({
      maker: res.data.user.name,
      makerUrl: res.data.user.portfolio_url,
    });
  }
  render() {
    return (
      <>
        <footer className="foot">
          <nav className="navnav">
            <a href={this.state.makerUrl}>{this.state.maker}</a>
          </nav>
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
