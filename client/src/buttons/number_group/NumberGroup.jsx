import React from 'react'

import Number from '../number/Number'

export default function NumberGroup(props) {
  const {handleInputClick} = props

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

  return (
    <>
      {numbers.map(num => (
        <>
          <Number
            number={num}
            handleInputClick={handleInputClick}
          />
        </>
      ))}
    </>
  )
} 