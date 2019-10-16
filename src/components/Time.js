import React from 'react';
import Clock from 'react-live-clock';

export default class MyComponent extends React.Component {
  render() {
    return (
      <Clock
        ticking={true}
        format="dddd, MMMM Mo, YYYY, h:mm A"
        timezone="US/Pacific"
      />
    );
  }
}
