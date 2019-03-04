import React, { Component } from 'react';
import './App.css';
import ExampleInput from './ExampleInput/ExampleInput';
import ExampleControls from './ExampleControls/ExampleControls';

class App extends Component {
  state = {
    value: '',
    hidden: false
  }

  resetHandler = () => {
    this.setState({ value: '' });
  }

  toggleHandler = () => {
    this.setState({ hidden: !this.state.hidden });
  }

  changeHandler = event => {
    this.setState({ value: event.target.value });
  }

  render() {
    let input = null;
    if (!this.state.hidden) {
      input = <ExampleInput value={this.state.value} changeHandler={this.changeHandler} />;
    }

    return (
      <div className="App">
        <ExampleControls resetHandler={this.resetHandler} toggleHandler={this.toggleHandler} />
        {input}
      </div>
    );
  }
}

export default App;
