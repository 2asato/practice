import React from 'react';

const Answer = (props) => {
  return(
    <div>
      <h4>The answer is:</h4>
      <h1>{ props.currentAnswer }</h1>
    </div>
  )
}

export default Answer;
