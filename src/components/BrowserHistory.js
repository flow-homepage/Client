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
      checked: `radio${initialCategory}`
    };
  }

  /**
   * This function allows you the expand and close
   * the recent closed tabs
   */
  toggleExpand = () => {
    this.setState(state => ({
      expand: !state.expand
    }));
  };
  //   hasExtension = () => {
  //     if(!this.state.extension)
  //   };

  handleCategoryRadio = changeEvent => {
    this.setState({
      checked: changeEvent.target.id
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
            id="radioFun"
            name="radioCategories"
            value="Fun"
            onChange={this.handleCategoryRadio}
            checked={this.state.checked === 'radioFun'}
          />
          <label htmlFor="radioFun">Fun</label>
          <input
            type="radio"
            id="radioInterest"
            name="radioCategories"
            value="Interest"
            onChange={this.handleCategoryRadio}
            checked={this.state.checked === 'radioInterest'}
          />
          <label htmlFor="radioInterest">Interest</label>
          <input
            type="radio"
            id="radioLife"
            name="radioCategories"
            value="Life"
            onChange={this.handleCategoryRadio}
            checked={this.state.checked === 'radioLife'}
          />
          <label htmlFor="radioLife">Life</label>
          <input
            type="radio"
            id="radioInformation"
            name="radioCategories"
            value="Information"
            onChange={this.handleCategoryRadio}
            checked={this.state.checked === 'radioInformation'}
          />
          <label htmlFor="radioInformation">Information</label>
          <input
            type="radio"
            id="radioUncategorized"
            name="radioCategories"
            value="Uncategorized"
            onChange={this.handleCategoryRadio}
            checked={this.state.checked === 'radioUncategorized'}
          />
          <label htmlFor="radioUncategorized">Uncategorized</label>
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
            DOWNLOAD CHROME EXTENSION (MANUAL CATEGORIES)
          </a>
          <a
            className="recentTab"
            href="https://chrome.google.com/webstore/detail/flow-homepage-helper/nabmfemolponikemcnihifjnopilldfc"
            target="_blank"
            rel="noopener noreferrer"
            style={{ width: '75%' }}
          >
            DOWNLOAD CHROME EXTENSION (AUTOMATIC CATEGORIES)
          </a>
        </div>
        <button id="expandButton" onClick={this.toggleExpand} />
      </div>
    );
  }
}
