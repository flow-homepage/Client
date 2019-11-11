import React, { Component } from 'react';

export default class BrowserHistory extends Component {
  static propTypes = {};
  constructor(props) {
    super(props);

    let initialCategory = localStorage.getItem('category');
    if (!initialCategory) {
      initialCategory = 'Uncategorized';

      localStorage.setItem('category', initialCategory);
    }

    this.state = {
      expand: false,
      extension: false,
      checked: `radio${initialCategory}`,
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

  handleCategoryRadio = changeEvent => {
    this.setState({
      checked: changeEvent.target.id,
    });

    localStorage.setItem('category', changeEvent.target.value);

    document.querySelectorAll(`.recentTab`).forEach(element => {
      if (!element.classList.contains('hidden')) {
        element.classList.add('hidden');
      }
    });

    document
      .querySelectorAll(`.category${changeEvent.target.value}`)
      .forEach(element => {
        if (element.classList.contains('hidden')) {
          element.classList.remove('hidden');
        }
      });
  };

  render() {
    return (
      <div className="tabWidget">
        <h2 className="categoryTabs">
          <input
            type="radio"
            id="radioUncategorized"
            name="radioCategories"
            value="Uncategorized"
            onChange={this.handleCategoryRadio}
            checked={this.state.checked === 'radioUncategorized'}
          />
          <label htmlFor="radioUncategorized">Uncategorized</label>

          <input
            type="radio"
            id="radioWork"
            name="radioCategories"
            value="Work"
            onChange={this.handleCategoryRadio}
            checked={this.state.checked === 'radioWork'}
          />
          <label htmlFor="radioWork">Work</label>
          <input
            type="radio"
            id="radioHome"
            name="radioCategories"
            value="Home"
            onChange={this.handleCategoryRadio}
            checked={this.state.checked === 'radioHome'}
          />
          <label htmlFor="radioHome">Home</label>
        </h2>
        <div
          id="recentTabs"
          className={`${this.state.expand ? 'expanded' : ''}`}
        >
          <a
            className="recentTab"
            href="https://chrome.google.com/webstore/detail/flow-homepage-helper/jadklcjnechlbblefifkjodppcbckmlg"
            target="_blank"
            rel="noopener noreferrer"
            style={{ width: '75%' }}
          >
            DOWNLOAD CHROME EXTENSION
          </a>
        </div>
        <button id="expandButton" onClick={this.toggleExpand} />
      </div>
    );
  }
}
