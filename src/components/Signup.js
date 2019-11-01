import React, { Component } from 'react'
export default class Signup extends Component {
    render() {
        return (
            <form id="signup-login">
            <h3>Sign Up</h3><br/>
            <div class="group">      
              <input type="text" required />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Name</label>
            </div>
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
            <div class="group">      
              <input type="text" required />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Password Confirmation</label>
            </div>
            <div class="buttons">
              <button type="submit">Submit</button>
              <button type="cancel">Cancel</button>
            </div>
          </form>
        )
    }
}
