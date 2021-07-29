import React from 'react'

import './Bonus.css'

export default function Bonus(props) {
  const {reset, handleOperatorClick} = props
  return (
    <>
      <div className='bonus-container'>
        <button
          onClick={reset}
          className='bonus-button'>
          AC
        </button>
        <button
          onClick={(e) => handleOperatorClick("^")}
          className='bonus-button'>
          ^
        </button>
        <button
          onClick={(e) => handleOperatorClick("%")}
          className='bonus-button'>
          %
        </button>
      </div>
    </>
  )
}