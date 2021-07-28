import React from 'react'

export default function Display(props) {
  const {
    firstInput,
    operator,
    secondInput,
    result,
    getResult,
    reset
  } = props

  return (
    <>
      <p>
        {firstInput}
        {operator}
        {secondInput}
      </p>
      <button onClick={getResult}>=</button>
      <p>{result}</p>
      <button onClick={reset}>reset</button>
    </>
  )
}