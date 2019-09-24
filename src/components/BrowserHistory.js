import React, { Component } from 'react';

export default class BrowserHistory extends Component {
  static propTypes = {};
  constructor(props) {
    super(props);

    this.state = {
      expand: false,
      extension: false,
    };
  }
  /**
   * This function allows you the expand and close
   * the recent closed tabs
   */
  toggleExpand = () => {
    this.setState(state => ({
      expand: !state.expand,
    }));
  };
  //   hasExtension = () => {
  //     if(!this.state.extension)
  //   };

  render() {
    return (
      <div className="tabWidget">
        <h2>Recently Closed Tabs</h2>
        <div
          id="recentTabs"
          className={`${this.state.expand ? 'expanded' : ''}`}
        />
        <button id="expandButton" onClick={this.toggleExpand} />

        {/* <a
          target="blank"
          // target="noopener noreferrer"
          href="https://chrome.google.com/webstore/detail/flow-homepage-helper/jadklcjnechlbblefifkjodppcbckmlg"
        >
          CHROME EXTENSION REQUIRED
        </a> */}
      </div>
    );
  }
}
