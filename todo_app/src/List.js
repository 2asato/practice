import React, { Component } from 'react'

class List extends Component {
  constructor(props) {
  super()
  console.log('List props: ', props);
  this.state = {
    todos: props.todos
  }
}

  handleClick() {
    console.log('clicked');
    this.setState({
      todos: []
    })
  }

  updateUI(event) {
    console.log(event.target.className='strikeout');
  }

  render() {
    const listItems = this.state.todos.map(item =>
      <li onClick={ this.updateUI.bind(this) }>{ item }</li>);
    return (
      <div>
        <button onClick={ this.handleClick.bind(this) }>Clear</button>
        <ul>
          { listItems }
        </ul>
      </div>
    )
  }
}

// const List = (props) => {
//   // console.log('these are the props: ', props);
//   const listItems = props.todos.map(item => <li>{ item }</li>);
//   return (
//     <ul>
//       { listItems }
//     </ul>
//   )
// }

export default List;
