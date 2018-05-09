import React, { Component } from 'react';
import List from './List.js'
import Numbers from './Numbers.js'

const todos = ['shovel the driveway', 'karaoke duet', 'sun-dry my chiffon', 'pay off the mayor', 'hoedown', 'sip on gin and juice'];

const numbers = [4, 8, 15, 16, 23, 42];


class App extends Component {
  // can only write methods into the class here

  // class must contain a render method
  render() {
    return (
      <div>
        <h1>My Todo List</h1>
        <List todos={ todos }/>
        <Numbers numbers={ numbers }/>
      </div>
    );
  }
}

export default App;
