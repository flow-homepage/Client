import React from 'react';
import Clock from 'react-live-clock';

export default class MyComponent extends React.Component {
  render() {
    return (
      <div className="time">
        {' '}
        <Clock
          ticking
          format="dddd, MMMM Do, YYYY, h:mm A"
          timezone="US/Pacific"
        />{' '}
      </div>
    );
  }
}
