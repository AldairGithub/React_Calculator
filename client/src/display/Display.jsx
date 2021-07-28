import React from 'react'

export default function Display(props) {
  const {
    firstInput,
    operator,
    secondInput,
    result
  } = props

  return (
    <>
      <p>
        {firstInput}
        {operator}
        {secondInput}
      </p>
      <p>{result}</p>
    </>
  )
}