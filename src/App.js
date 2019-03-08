import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CreateOption from './component/createOption'
import Answer from './component/answer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreateOption></CreateOption>
        <Answer question={{id: 0, optionA: 'Valim', optionB: 'Ricardo'}}></Answer>
      </div>
    );
  }
}

export default App;
