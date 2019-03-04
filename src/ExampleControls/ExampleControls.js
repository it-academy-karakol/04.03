import React, { Component } from 'react';

class ExampleControls extends Component {
  render() {
    return (
      <div className='ExampleControls'>
        <button onClick={this.props.resetHandler}>Reset</button>
        <button onClick={this.props.toggleHandler}>Toggle</button>
      </div>
    );
  }
}

export default ExampleControls;