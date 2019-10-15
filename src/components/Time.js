import React from 'react';
import Clock from 'react-live-clock';

export default class MyComponent extends React.Component {
  render() {
    return (
      <Clock
        date="2019-10-15T12:14"
        format="dddd, MMMM Mo, YYYY, h:mm A"
        timezone="US/Pacific"
      />
    );
  }
}
