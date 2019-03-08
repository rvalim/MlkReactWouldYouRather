import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CreateOption from './component/createOption'
import Answer from './component/answer'
import Answers from './component/answereds'


const test = [
  {
    answer: {
      id: 1,
      option: 'A'
    },
    question: {
      id: 1,
      optionA: 'Ricardo',
      optionB: 'Valim'
    }
  },
  {
    answer: {
      id: 1,
      option: 'A'
    },
    question: {
      id: 1,
      optionA: 'Marli',
      optionB: 'Valim'
    }
  },
  {
    answer: {
      id: 1,
      option: 'A'
    },
    question: {
      id: 1,
      optionA: 'Regiane',
      optionB: 'Valim'
    }
  },
  {
    answer: {
      id: 1,
      option: 'B'
    },
    question: {
      id: 1,
      optionA: 'Ronaldo',
      optionB: 'Valim'
    }
  },
  {
    answer: {
      id: 1,
      option: 'A'
    },
    question: {
      id: 1,
      optionA: 'Roberto',
      optionB: 'Valim'
    }
  },
  {
    answer: {
      id: 1,
      option: 'B'
    },
    question: {
      id: 1,
      optionA: 'Jandira',
      optionB: 'Uttembergue'
    }
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreateOption></CreateOption>
        <Answer question={{ id: 0, optionA: 'Valim', optionB: 'Ricardo' }}></Answer>
        <Answers list={test}></Answers>
      </div>
    );
  }
}

export default App;
