import React from 'react'

const Display = (props) => {
  return (
    <div className="calculator-display">
      <div className="screen">
        <div className="output">{ props.displayValue }</div>
      </div>
    </div>
  )
}

export default Display
