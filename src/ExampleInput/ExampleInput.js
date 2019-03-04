import React, { Component } from 'react';

class ExampleInput extends Component {
  render() {
    return (
      <div className='ExampleInput'>
        <input type="text" value={this.props.value} onChange={this.props.changeHandler} />
      </div>
    );
  }
}

export default ExampleInput;