import React from 'react'

import './Number.css'

export default function Number(props) {
  const {
    handleInputClick,
    number
  } = props

  return (
    <>
      <button
        className='button'
        onClick={() => handleInputClick(number)}>
        {number}
      </button>
    </>
  )
}