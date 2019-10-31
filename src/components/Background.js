import React, { Component } from 'react';
import axios from 'axios';
export default class Background extends Component {
  static propTypes = {};
  constructor(props) {
    super(props);
    this.rootRef = React.createRef();
    this.state = {
      maker: '',
      makerUrl: '',
      location: '',
    };
  }

  async componentDidMount() {
    const res = await axios.get(
      `${process.env.REACT_APP_URL}/background`
    );

    this.setState({
      maker: res.data.user.name,
      makerUrl: `${res.data.user.links.html}?utm_source=flow_homepage&utm_medium=referral`,
      location: res.data.location.name,
    });

    const backgroundDiv = this.rootRef.current;
    backgroundDiv.style.backgroundImage = `linear-gradient(rgba(36, 51, 91, 0.5), rgba(36, 51, 91, 0.5)), url('${res.data.urls.regular}')`;
    // backgroundDiv.style.backgroundSize = `cover`;
    // backgroundDiv.style.height = `100vh`;
    // this.style.backgroundSize = `cover`;
    // this.innerHTML = `${res.data.user.name}`;
    // this.photoCredits.href = `${res.data.user.links.html}?utm_source=flow_homepage&utm_medium=referral`;
  }
  render() {
    return (
      <React.Fragment>
        <div ref={this.rootRef} className="bg" />
        <div className="credits">
           {''} {this.state.location}{''} Shot by {''}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={this.state.makerUrl}
          >
            {this.state.maker}
          </a>
          {''} on {''}
          <a href="https://unsplash.com?utm_source=flow_homepage&utm_medium=referral">
            Unsplash
          </a>
        </div>
      </React.Fragment>
    );
  }
}
