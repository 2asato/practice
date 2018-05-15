import React, { Component } from 'react';
import './App.css';
import Questions from './Questions.js'
import Answer from './Answer.js'

class App extends Component {

  constructor() {
    super()
    this.state = {
      allQuestions: [],
      currentAnswer: null
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

  showAnswer(answer) {
    console.log(answer);
    console.log('this in showAnswer: ', this)
    this.setState({
      currentAnswer: answer
    }, () => console.log(this.state));
  }

  showQuestions() {
    this.setState({
      currentAnswer: null
    })
  }

  render() {
    if (this.state.currentAnswer) {
      return (
        <Answer
          currentAnswer={ this.state.currentAnswer }
          showQuestions={ this.showQuestions.bind(this) }
        />
      )
    } else {
    return (
      <Questions
        allQuestions={ this.state.allQuestions }
        showAnswer={ this.showAnswer.bind(this) }
        />
      );
    }
  }
}

export default App;
