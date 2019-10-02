import React, { Component } from 'react';
import Swal from 'sweetalert2';
import './css/styles.css';
import MomentTime from './components/MomentTime';
import Weather from './components/Weather';
import BrowserHistory from './components/BrowserHistory';
import LocationModal from './components/LocationModal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 34.0522,
      lng: -118.2436,
      toggleLocation: false,
    };
  }
  


  getCurrentPosition = () => {
    const position = navigator.geolocation.getCurrentPosition(this.displayLocationInfo);
    setTimeout(() => {
      navigator.geolocation.clearWatch(position);
    }, 10000);
  }
  
  displayLocationInfo = (position) => {
    const lng = position.coords.longitude;
    const lat = position.coords.latitude;
    this.setState({
      lat,
      lng
    });
  }

  toggleLocation = () => {
    this.setState(state => ({
      toggleLocation: !state.toggleLocation,
    }));
  }

  render() {
    const { lat, lng, toggleLocation } = this.state;
    return (
      <React.Fragment>
        <header>
          <section className="logoWithText">
            <img src="/img/flowlogo.png" alt="" className="logoImg" />
          </section>
          <section>
            <MomentTime />
            <Weather lat={lat} lng={lng} />
            <button onClick={this.toggleLocation}>🌐</button>
          </section>
        </header>
        { toggleLocation ? <LocationModal getCurrentPosition={this.getCurrentPosition} displayLocationInfo={this.displayLocationInfo} /> : ''}
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
