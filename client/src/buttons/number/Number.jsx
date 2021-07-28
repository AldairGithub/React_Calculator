import React from 'react'

export default function Number(props) {
  const {
    handleInputClick,
    number
  } = props

  return (
    <>
      <button onClick={() => handleInputClick(number) }>{ number }</button>
    </>
  )
}