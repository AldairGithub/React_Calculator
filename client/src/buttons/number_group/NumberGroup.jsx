import React from 'react'

import './NumberGroup.css'

import Number from '../number/Number'

export default function NumberGroup(props) {
  const {handleInputClick} = props

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

  return (
    <>
      <div className='numbers-container'>
        {numbers.map(num => (
          <div className={num === 0 && 'item-zero'}>
            <Number
              number={num}
              handleInputClick={handleInputClick}
            />
          </div>
        ))}
      </div>
    </>
  )
} 