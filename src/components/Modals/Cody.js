import React, { Component } from "react";

export default class Cody extends Component {
  render() {
    return (
      <div>
        <div>
          <span className="modal-exit">&times;</span>
          <div>
            <h1>Tab Hoarder | Easily overwhelmed</h1>
            <ul>
              <li>Interests, Curiosities, Motivations & Passions</li>
              <li>Being competitive on online video games</li>
              <li>RPGS</li>
              <li>Travel/hiking</li>
              <li>Also working to provide a good life for my cat</li>
              <li>
                Quirk: Gets really angry with inconsequential inconveniences,
                but we still love them!
              </li>
              <img src="/img/cody1.svg" alt="" />
              <img src="/img/cody2.svg" alt="" />
              <img src="/img/cody3.svg" alt="" />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
