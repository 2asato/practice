import React from 'react'

const List = (props) => {
  // console.log('these are the props: ', props);
  const listItems = props.todos.map(item => <li>{ item }</li>);
  return (
    <ul>
      { listItems }
    </ul>
  )
}

export default List;
