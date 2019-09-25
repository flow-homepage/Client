import React, { Component } from 'react';
import './css/styles.css';
import MomentTime from './components/MomentTime';
import Weather from './components/Weather';
import BrowserHistory from './components/BrowserHistory';
import Footer from './components/Footer';

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
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
