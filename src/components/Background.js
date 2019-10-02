import React, { Component } from 'react';
import axios from 'axios';

export default class Background extends Component {
  static propTypes = {};
  constructor(props) {
    super(props);

    this.state = {
      background: [],
      maker: '',
    };
  }

  async componentDidMount() {
    const res = await axios.get(
      `https://flowhome-server.herokuapp.com/api/background`
    );
    // this.style.background = `linear-gradient(rgba(36, 51, 91, 0.5), rgba(36, 51, 91, 0.5)), url('${res.data.urls.regular}')`;
    // this.style.backgroundSize = `cover`;
    // this.innerHTML = `${res.data.user.name}`;
    // this.photoCredits.href = `${res.data.user.links.html}?utm_source=flow_homepage&utm_medium=referral`;
    this.setState({
      background: res.data.urls.regular,
      maker: res.data.user.name,
      photocredit: res.data.user.links.html,
    });
  }
  render() {
    return (
      <React.Fragment>
        <img src={this.state.background} alt="bg" className="bg" />
        <div>
          {this.state.maker} {this.state.photocredit}
        </div>
      </React.Fragment>
    );
  }
}
