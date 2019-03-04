import React, { Component } from 'react';

class ExampleControls extends Component {
  render() {
    console.log('[ExampleControls.js] render');

    return (
      <div className='ExampleControls'>
        <button onClick={this.props.resetHandler}>Reset</button>
        <button onClick={this.props.toggleHandler}>Toggle</button>
      </div>
    );
  }

  // Create hook
  constructor(props) {
    super(props);

    console.log('[ExampleControls.js] constructor');
  }

  // Create hook
  componentDidMount() {
    console.log('[ExampleControls.js] componentDidMount');
  }

  // Update hook
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[ExampleControls.js] shouldComponentUpdate');

    return false;
  }

  // Update hook
  componentDidUpdate() {
    console.log('[ExampleControls.js] componentDidUpdate');
  }
}

export default ExampleControls;