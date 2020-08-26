import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = { count: 0 }
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <span>{this.state.count}</span>
      </div>
    )
  }
}

export default App
