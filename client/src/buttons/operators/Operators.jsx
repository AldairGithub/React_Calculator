import React from 'react'

import './Operators.css'

export default function Operators(props) {
  const { getResult, handleOperatorClick } = props
  
  const symbols = ["+", "-", "*", "/"]

  return (
    <>
      <div className='operators-container'>
        {symbols.map(symbol => (
          <>
            <button
              className='operators-button'
              onClick={e => handleOperatorClick(symbol)}>
              {symbol}
            </button>
          </>
        ))}
        <button className='operators-button' onClick={getResult}>=</button>
      </div>
    </>
  )
}