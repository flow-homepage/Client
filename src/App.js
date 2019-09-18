import React from 'react';
import axios from 'axios';
import './img/flowlogo.png';
import './jsFiles/expand.js';


function App() {
  return (
    <React.Fragment>
      <header>
      <section className="logoWithText">
        <img src="./img/flowlogo.png" alt ="" className="logoImg"/>
      </section>
      <section>
        {/* <h1 id="displayMoment" style="text-align: center"></h1>
        <h1 id="weather" style="text-align: center" onload="getWeather()"></h1> */}
      </section>
    </header>
    <main>
      <section>
        <div className="tabWidget">
          <h2>
            Recently Closed Tabs
          </h2>
          <div id="recentTabs" className="recentTabs">
            <a
              target="noopener no referrer"
              href="https://chrome.google.com/webstore/detail/flow-homepage-helper/jadklcjnechlbblefifkjodppcbckmlg"
              
            >
              CHROME EXTENSION REQUIRED
            </a>
          </div>
          <button id="expandButton" onClick= {this.toggleExpand(false)}></button>
        </div>
      </section>
    </main>
    <footer>
      <a className="footer" href="./pages/signup.html">Sign Up</a>
      <a className="footer" href="./pages/login.html">Login</a>
      <a className="footer" href="./pages/about.html">About</a>
      <a className="footer" href="contact.html">Contact Us</a>
    </footer>
    
    </React.Fragment>
  );
}

export default App;
