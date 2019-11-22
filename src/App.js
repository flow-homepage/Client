import React, { Component } from 'react';
import ReactGA from 'react-ga';
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

ReactGA.initialize('UA-153142888-1');
ReactGA.pageview(window.location.pathname + window.location.search);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }

//  initializeReactGA = ()=> {
//   ReactGA.initialize('UA-153142888-1');
//   ReactGA.pageview('/');
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
