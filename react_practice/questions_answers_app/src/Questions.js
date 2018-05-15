import React from 'react';

const Questions = (props) => {
  console.log('props coming in to Questions: ', props);

  const questionList = props.allQuestions.map(item => {
    return (
      <p onClick={ () => props.showAnswer(item.answer) }>
        { item.question }
      </p>
    )
  })

  return (
    <div>
      { questionList }
    </div>
  )
}

export default Questions;
