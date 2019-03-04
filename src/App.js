import React, { Component } from 'react';
import './App.css';
import ExampleInput from './ExampleInput/ExampleInput';
import ExampleControls from './ExampleControls/ExampleControls';
import FunctionalStateExample from './FunctionalStateExample/FunctionalStateExample';

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

  // Create and Update hook
  render() {
    console.log('[App.js] render');

    let input = null;
    if (!this.state.hidden) {
      input = <ExampleInput value={this.state.value} changeHandler={this.changeHandler} />;
    }

    return (
      <div className="App">
        <ExampleControls resetHandler={this.resetHandler} toggleHandler={this.toggleHandler} />
        {input}
        <FunctionalStateExample />
      </div>
    );
  }

  // Create hook
  // 
  constructor(props) {
    super(props);

    console.log('[App.js] constructor');
  }

  // Create hook
  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  // Update hook
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');

    return true;
  }

  // Update hook
  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }
}

export default App;
