import React, { Component } from 'react';

export default class Login extends Component {
<<<<<<< HEAD
  render() {
    return (
      <form>
        <h3>Log In</h3>
        <div class="group">
          <input type="text" required />
          <span className="highlight" />
          <span className="bar" />
          <label>Email</label>
        </div>
        <div class="group">
          <input type="text" required />
          <span className="highlight" />
          <span className="bar" />
          <label>Password</label>
        </div>
        <div className="buttons">
          <button type="submit">Submit</button>
          <button type="cancel">Cancel</button>
        </div>
      </form>
    );
  }
=======
    render() {
        return (
            <form id ="signup-login">
            <h3>Log In</h3>
            <div class="group">      
              <input type="text" required />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Email</label>
            </div>
            <div class="group">      
              <input type="text" required />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Password</label>
            </div>
            <div class="buttons">
              <button type="submit">Submit</button>
              <button type="cancel">Cancel</button>
            </div>
          </form>
        )
    }
>>>>>>> Staging
}
