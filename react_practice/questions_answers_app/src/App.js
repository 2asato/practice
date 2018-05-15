import React, { Component } from 'react';
import './App.css';

class App extends Component {

  componentDidMount() {
    fetch('http://jservice.io/api/random?count=10')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div></div>
    );
  }
}

export default App;
