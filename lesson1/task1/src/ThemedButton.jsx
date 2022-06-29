import React from 'react';

class ThemedButton extends React.Component {
  render() {
    return <button {...this.props} className="btn"></button>;
  }
}
export default ThemedButton;
