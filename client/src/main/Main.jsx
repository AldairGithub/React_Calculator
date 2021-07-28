import React, {useState} from 'react'

import Display from '../display/Display'
import Operators from '../buttons/operators/Operators'
import NumberGroup from '../buttons/number_group/NumberGroup'

export default function Main() {

  const [operator, setOperator] = useState(null)
  const [firstInput, setFirstInput] = useState("")
  const [operatorPresent, setOperatorPresent] = useState(false)
  const [secondInput, setSecondInput] = useState("")
  const [result, setResult] = useState(0)

  const handleInputClick = (number) => {
    if (operatorPresent) {
      const newInput = secondInput.concat(number)
      setSecondInput(
        newInput
      )
    } else {
      const newInput = firstInput.concat(number)
      setFirstInput(
        newInput
      )
    }
  }

  const handleOperatorClick = (x) => {
    setOperator(x)
    setOperatorPresent(true)
  }

  const getResult = () => {
    switch (operator) {
      case "+":
        setResult(
          parseInt(firstInput) + parseInt(secondInput)
        )
        break;
      case "-":
        setResult(
          parseInt(firstInput) - parseInt(secondInput)
        )
        break;
      case "*":
        setResult(
          parseInt(firstInput) * parseInt(secondInput)
        )
        break;
      case "/":
        setResult(
          parseInt(firstInput) / parseInt(secondInput)
        )
        break;
      default:
        break
    }
  }

  const reset = () => {
    setFirstInput("")
    setOperator(null)
    setOperatorPresent(false)
    setSecondInput("")
    setResult(0)
  }
  return (
    <>
      <h1>This is the main component</h1>
      <Display
        firstInput={firstInput}
        operator={operator}
        secondInput={secondInput}
        getResult={getResult}
        result={result}
        reset={reset}
      />
      <Operators
        handleOperatorClick={handleOperatorClick}
      />
      <NumberGroup
        handleInputClick={handleInputClick}
      />
    </>
  )
}