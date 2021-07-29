import React from 'react'

import './Display.css'

export default function Display(props) {
  const {
    firstInput,
    operator,
    secondInput,
    result
  } = props

  return (
    <>
      <div className='display-container'>
        <div className='display-input'>
          <p>
            {firstInput}
            {operator}
            {secondInput}
          </p>
        </div>
        <p>{result}</p>
      </div>
    </>
  )
}