import React, { Component } from 'react';

class ExampleInput extends Component {
  render() {
    console.log('[ExampleInput.js] render');

    return (
      <div className='ExampleInput'>
        <input type="text" value={this.props.value} onChange={this.props.changeHandler} />
      </div>
    );
  }

  // Create hook
  constructor(props) {
    super(props);

    console.log('[ExampleInput.js] constructor');
  }

  // Create hook
  componentDidMount() {
    console.log('[ExampleInput.js] componentDidMount');
  }

  // Update hook
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[ExampleInput.js] shouldComponentUpdate');

    if (this.props.value !== nextProps.value) {
      return true;
    }
    else {
      return false;
    }
  }

  // Update hook
  componentDidUpdate() {
    console.log('[ExampleInput.js] componentDidUpdate');
  }

  // Delete hook
  componentWillUnmount() {
    console.log('[ExampleInput.js] componentWillUnmount');
  }
}

export default ExampleInput;