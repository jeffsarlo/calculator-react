import React from 'react'

const Buttons = (props) => {
  return (
    <div className="calculator-keypad">
      <div className="input-keys">
        <div className="function-digit-container">
          <div className="function-keys">
            <button className="key key-ce" onClick={props.clearAll}>AC</button>
            <button className="key key-sign" onClick={props.toggleSign}>±</button>
            <button className="key key-percent" onClick={props.percentOperator}>%</button>
          </div>
          <div className="digit-keys">
            <button className="key key-0" onClick={() => props.inputDigit(0)}>0</button>
            <button className="key key-dot" onClick={() => props.inputDot(".")}>●</button>
            <button className="key key-1" onClick={() => props.inputDigit(1)}>1</button>
            <button className="key key-2" onClick={() => props.inputDigit(2)}>2</button>
            <button className="key key-3" onClick={() => props.inputDigit(3)}>3</button>
            <button className="key key-4" onClick={() => props.inputDigit(4)}>4</button>
            <button className="key key-5" onClick={() => props.inputDigit(5)}>5</button>
            <button className="key key-6" onClick={() => props.inputDigit(6)}>6</button>
            <button className="key key-7" onClick={() => props.inputDigit(7)}>7</button>
            <button className="key key-8" onClick={() => props.inputDigit(8)}>8</button>
            <button className="key key-9" onClick={() => props.inputDigit(9)}>9</button>
          </div>
        </div>
        <div className="operator-keys">
          <button className="key key-div" onClick={() => props.performOperation("/")}>÷</button>
          <button className="key key-mult" onClick={() => props.performOperation("*")}>×</button>
          <button className="key key-sub" onClick={() => props.performOperation("-")}>-</button>
          <button className="key key-add" onClick={() => props.performOperation("+")}>+</button>
          <button className="key key-equal" onClick={() => props.performOperation("=")}>=</button>
        </div>
      </div>
    </div>
  )
}

export default Buttons
