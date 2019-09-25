import React, { Component } from 'react';
import './css/styles.css';
import MomentTime from './components/MomentTime';
import Weather from './components/Weather';
import BrowserHistory from './components/BrowserHistory';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 34.0522,
      lng: -118.2436,
    };
  }
  
  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.displayLocationInfo);
    } else {
      // error
      // request location here
    }
  }
  
  displayLocationInfo = (position) => {
    const lng = position.coords.longitude;
    const lat = position.coords.latitude;
    this.setState({
      lat,
      lng
    });
  }

  render() {
    const { lat, lng } = this.state;
    return (
      <React.Fragment>
        <header>
          <section className="logoWithText">
            <img src="/img/flowlogo.png" alt="" className="logoImg" />
          </section>
          <section>
            <MomentTime />
            <Weather lat={lat} lng={lng} />
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
