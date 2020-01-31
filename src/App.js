import React from 'react'
import Display from './components/Display'
import Buttons from './components/Buttons'

import './css/App.css'

class App extends React.Component {
  state = {
    value: null,
    displayValue: "0",
    waitingForOperand: false,
    operator: null,
    clear: false
  }

  clearAll = () => {
    const { clear } = this.state

    if (!clear) {
      this.setState({
        displayValue: '0',
        clear: true
      })
    } else {
        this.setState({
          value: null,
          displayValue: '0',
          clear: false
        })
      }
  }


  inputDigit = (digit) => {
    const { displayValue, waitingForOperand } = this.state

    if (waitingForOperand) {
      this.setState({
        displayValue: String(digit),
        waitingForOperand: false,
        clear: false
      })
    } else {
      this.setState({
        displayValue: displayValue === '0' ? String(digit) : displayValue + digit,
        clear: false
      })
    }
  }

  inputDot = (dot) => {
    const { displayValue, waitingForOperand } = this.state

    if (waitingForOperand) {
      this.setState({
        displayValue: ".",
        waitingForOperand: false,
        clear: false
      })
    } else {
      this.setState ({
        displayValue: displayValue.indexOf(dot) === -1 ? displayValue + dot : displayValue,
        waitingForOperand: false,
        clear: false
      })
    }
  }

  toggleSign = () => {
    const { displayValue } = this.state

    this.setState({
      displayValue: displayValue.charAt(0) === "-" ? displayValue.substr(1) : "-" + displayValue
    })
  }

  percentOperator = () => {
    const { displayValue } = this.state
    const value = parseFloat(displayValue)

    this.setState({
      displayValue: String(value / 100),
      clear: false
    })
  }

  performOperation = (nextOperator) => {
    const { displayValue, operator, value } = this.state

    const nextValue = parseFloat(displayValue)

    const operations = {
      "/": (prevValue, nextValue) => prevValue / nextValue,
      "*": (prevValue, nextValue) => prevValue * nextValue,
      "+": (prevValue, nextValue) => prevValue + nextValue,
      "-": (prevValue, nextValue) => prevValue - nextValue,
      "=": (prevValue, nextValue) => nextValue,
    }

    if (value == null) {
      // no previous value, hit an operator key
      this.setState({
        value: nextValue
      })
    } else if (operator) {
        const currentValue = value || 0
        const computedValue = operations[operator](currentValue, nextValue)

        this.setState({
          value: computedValue,
          displayValue: String(computedValue),
          clear: false
        })
      }

    this.setState({
      waitingForOperand: true,
      operator: nextOperator,
      clear: false
    })
  }



  render () {
    return (
      <div className="App">
        <div className="wrapper">
          <div className="calculator">
        {/*<pre>{JSON.stringify(this.state, null, 2)}</pre> */}
            <Display displayValue={ this.state.displayValue } />
            <Buttons
              inputDigit={ this.inputDigit }
              operatorHandler={ this.operatorHandler }
              inputDot={ this.inputDot }
              clearAll={ this.clearAll }
              toggleSign={ this.toggleSign }
              percentOperator={ this.percentOperator }
              performOperation={ this.performOperation }
            />
          </div>
        </div>
      </div>
    )
  }
}


export default App
