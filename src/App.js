import React, { Component } from 'react';
import './css/styles.css';
import MomentTime from './components/MomentTime';
import Weather from './components/Weather';
import BrowserHistory from './components/BrowserHistory';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <section className="logoWithText">
            <img src="/img/flowlogo.png" alt="" className="logoImg" />
          </section>
          <section>
            <MomentTime />
            <Weather />
          </section>
        </header>
        <BrowserHistory />
        <footer>
          <a className="footer" href="./pages/signup.html">
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
          </a>
        </footer>
      </React.Fragment>
    );
  }
}

export default App;
