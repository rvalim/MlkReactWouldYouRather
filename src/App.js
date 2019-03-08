import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CreateOption from './component/createOption'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreateOption></CreateOption>
      </div>
    );
  }
}

export default App;
