import React, { Component } from "react";
import PropTypes from "prop-types";

export default class About extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <>
        <main>
          <h1 className="title">Meet the Devs!</h1>
          <div id="team">
            <div className="content ivy modal-button">
              <div className="cardTitle">Ivy Lim</div>
            </div>
            <div className="modal-container">
              <div className="modal-overlay modal-exit" />
              <div className="modal">
                <span className="modal-exit">&times;</span>
                <div>
                  <h1>Easily Distracted work-a-holic | Impulsive Web Surfer</h1>
                  <ul>
                    <li>Interests, Curiosities, Motivations & Passions</li>
                    <li>
                      I like rock climbing, video games, traveling, and FOOOD!
                    </li>
                    <li>I enjoy problem solving and learning new things.</li>
                    <li>Animals and nature are my passions.</li>
                    <li>Quirk: Office advocate, but we still love them!</li>

                    <img src="/img/ivy1.svg" alt="" />
                    <img src="/img/ivy2.svg" alt="" />
                    <img src="/img/ivy3.svg" alt="" />
                    <img src="/img/ivy4.svg" alt="" />
                  </ul>
                </div>
              </div>
            </div>
            <div className="content cody modal-button">
              <div className="cardTitle">Cody Brand</div>
            </div>
            <div className="modal-container">
              <div className="modal-overlay modal-exit" />
              <div className="modal">
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
                      Quirk: Gets really angry with inconsequential
                      inconveniences, but we still love them!
                    </li>
                    <img src="/img/cody1.svg" alt="" />
                    <img src="/img/cody2.svg" alt="" />
                    <img src="/img/cody3.svg" alt="" />
                  </ul>
                </div>
              </div>
            </div>

            <div className="content andre modal-button">
              <div className="cardTitle">Andre Aggalut</div>
            </div>
            <div className="modal-container">
              <div className="modal-overlay modal-exit" />
              <div className="modal">
                <span className="modal-exit">&times;</span>
                <div>
                  <h1>Music Lover | Quote Appreciator</h1>
                  <ul>
                    <li>Interests, Curiosities, Motivations & Passions</li>
                    <li>Listening to music</li>
                    <li>Travel the world one place at a time</li>
                    <li>
                      Sports (lots of basketball and football, but anything
                      really)
                    </li>
                    <li>
                      I enjoy learning new things everyday. Open to any
                      discussions.
                    </li>
                    <li>Quirk: Daydreams a lot, but we still love them!</li>

                    <img src="/img/andre1.svg" alt="" />
                    <img src="/img/andre2.svg" alt="" />
                    <img src="/img/andre3.svg" alt="" />
                    <img src="/img/andre4.svg" alt="" />
                  </ul>
                </div>
              </div>
            </div>

            <div className="content dean modal-button">
              <div className="cardTitle">Dean Sumitro</div>
            </div>
            <div className="modal-container">
              <div className="modal-overlay modal-exit" />
              <div className="modal">
                <span className="modal-exit">&times;</span>
                <div>
                  <h1>
                    Tab Hoarder | Forgetful Web Surfer | Impulsive youtube
                    binger
                  </h1>
                  <ul>
                    <li>
                      I enjoy looking at how things are functionally and
                      aesthetically designed, both in a physical and virtual
                      space, and finding ways to improve them.
                    </li>
                    <li>
                      Outside of work, I play all the video games, I do
                      urban-style dancing, listen to music all the time, and
                      occasionally imagine what it would be like to have a Shiba
                      Inu.
                    </li>
                    <li>
                      I love traveling ever since I was a kid. Currently my
                      bucketlist has cities and places such as: Singapore,
                      Japan, Germany, South Korea, Hong Kong & Taiwan.
                    </li>
                    <li>
                      Quirk: Dean is a snacking fiend, but we still love them.
                    </li>

                    <img src="/img/dean1.svg" alt="" />
                    <img src="/img/dean2.svg" alt="" />
                    <img src="/img/dean3.svg" alt="" />
                    <img src="/img/dean4.svg" alt="" />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}
