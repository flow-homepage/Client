import React, { Component } from 'react';
import './css/styles.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BrowserHistory from './components/BrowserHistory';
import Weather from './components/Weather';
import Footer from './components/Footer';
import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
import Background from './components/Background';
import Login from './components/Login';
import Signup from './components/Signup';
import Contact from './components/Contact';
import Time from './components/Time';


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

  getCurrentPosition = () => {
    const position = navigator.geolocation.getCurrentPosition(this.displayLocationInfo);
    setTimeout(() => {
      navigator.geolocation.clearWatch(position);
    }, 10000);
  }

  displayLocationInfo = position => {
    const lng = position.coords.longitude;
    const lat = position.coords.latitude;
    this.setState({
      lat,
      lng,
    });
  };

  render() {
    const { lat, lng } = this.state;
    return (
      <>
        <Router>
          <Background />
          <Header />
          <section className="libs">
            <Time />
            <Weather lat={lat} lng={lng} />
            <button onClick={this.getCurrentPosition}>🌐</button>
          </section>
          
          <BrowserHistory />
          <Footer />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/login" exact component={Login} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
