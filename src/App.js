import React, { Component } from 'react';
import './css/styles.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Weather from './components/Weather';
import Footer from './components/Footer';
import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
import Background from './components/Background';
// import Login from './components/Login';
// import Signup from './components/Signup';
import Time from './components/Time';
import FOUROHFOUR from './components/FOUROHFOUR';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }
  // lat: 34.0522,
  // lng: -118.2436,

  // componentDidMount() {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(this.displayLocationInfo);
  //   } else {
  //     // error
  //     // request location here
  //   }
  // }

  // displayLocationInfo = position => {
  //     const long = position.coords.longitude;
  //     const lati = position.coords.latitude;
     
  //   this.setState({
  //     lat:lati,
  //     lng:long
  //   });
  //   console.log(lati,long);
  // };


  render() {
 
    return (
      <>
        <Router>
          <Background />
          <Header />
          <section className="libs">
            <Weather />
            <Time />
          </section>
          <Switch>
            <Route path="/" exact component={Home} />
            {/* <Route path="/signup" exact component={Signup} /> */}
            {/* <Route path="/login" exact component={Login} /> */}
            <Route path="/about" exact component={About} />
            <Route path="*" component={FOUROHFOUR} />
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
