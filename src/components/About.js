import React, { Component } from 'react';
import ReactModal from 'react-modal';
import Ivy from './Modals/Ivy';
import Andre from './Modals/Andre';
import Cody from './Modals/Cody';
import Dean from './Modals/Dean';

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ivy: false,
      cody: false,
      andre: false,
      dean: false,
    };
  }

  componentDidMount = () => {
    ReactModal.setAppElement('body');
  };

  toggleIvy = () => {
    this.setState(state => ({
      ivy: !state.ivy,
    }));
  };

  toggleCody = () => {
    this.setState(state => ({
      cody: !state.cody,
    }));
  };

  toggleAndre = () => {
    this.setState(state => ({
      andre: !state.andre,
    }));
  };

  toggleDean = () => {
    this.setState(state => ({
      dean: !state.dean,
    }));
  };

  render() {
    return (
      <>
        <h1 className="title">Who's That Developer?</h1>
        <div id="team">
          {/* add spans to style with images */}
          <div
            className="buttonImage"
            onClick={this.toggleIvy}
            alt=""
            id="ivy"
          />
          <ReactModal
            isOpen={this.state.ivy}
            onRequestClose={this.toggleIvy}
            className="modal"
          >
            <Ivy />
          </ReactModal>
          <div
            className="buttonImage"
            onClick={this.toggleCody}
            alt=""
            id="cody"
          />
          <ReactModal
            isOpen={this.state.cody}
            onRequestClose={this.toggleCody}
            className="modal"
          >
            <Cody />
          </ReactModal>
          <div
            className="buttonImage"
            onClick={this.toggleAndre}
            alt=""
            id="andre"
          />
          <ReactModal
            isOpen={this.state.andre}
            onRequestClose={this.toggleAndre}
            className="modal"
          >
            <Andre />
          </ReactModal>
          <div
            className="buttonImage"
            onClick={this.toggleDean}
            alt=""
            id="dean"
          />
          <ReactModal
            isOpen={this.state.dean}
            onRequestClose={this.toggleDean}
            className="modal"
          >
            <Dean />
          </ReactModal>
        </div>
        <div className="contact">
          <p>Contact Us! </p>
          <a href="mailto: team@flowhome.us" aria-label="Link to email us">
            {' '}
            📧 Email
          </a>
        </div>
      </>
    );
  }
}
