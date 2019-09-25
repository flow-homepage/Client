import React, { Component } from "react";
import "./css/styles.css";
import MomentTime from "./components/MomentTime";
import Weather from "./components/Weather";
import BrowserHistory from "./components/BrowserHistory";
import Footer from "./components/Footer";
import About from "./components/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 34.0522,
      lng: -118.2436
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

  displayLocationInfo = position => {
    const lng = position.coords.longitude;
    const lat = position.coords.latitude;
    this.setState({
      lat,
      lng
    });
  };

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
        <Router>
          <Footer />
          <Switch>
            <Route path="/signup" exact component={About} />
            <Route path="/login" exact component={About} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={About} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
