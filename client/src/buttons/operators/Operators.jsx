import React from 'react'

export default function Operators(props) {
  const { handleOperatorClick } = props
  
  const symbols = ["+", "-", "*", "/"]

  return (
    <>
      {symbols.map(symbol => (
        <>
          <button onClick={e => handleOperatorClick(symbol)}>{symbol}</button>
        </>
      ))}
    </>
  )
}