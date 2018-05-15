import React, { Component } from 'react';
import './App.css';
import Questions from './Questions.js'

class App extends Component {

  constructor() {
    super()
    this.state = {
      allQuestions: []
    }
  }

  componentDidMount() {
    fetch('http://jservice.io/api/random?count=10')
    .then(response => response.json())
    .then(json => {
      console.log(json)
      this.setState({ allQuestions: json })
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <Questions
        allQuestions={ this.state.allQuestions}
      />
    );
  }
}

export default App;
