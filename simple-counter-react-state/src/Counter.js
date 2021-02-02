import React, { Component } from 'react';

class Counter extends Component {

  state = { counter: 0 }

  increment = () => {
    this.setState(
      (state, props) => ({ counter: state.counter + 1 })
    )
  }

  decrement = () => {
    this.setState(
      (state, props) => ({ counter: state.counter - 1 })
    )
  }

  reset = () => {
    this.setState(
      (state, props) => ({ counter: 0 })
    )
  }

  render() {
    const {counter} = this.state

    return (
      <div className='Counter'>
        <p className='count'>{counter}</p>
        <section className='controls'>
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
          <button onClick={this.reset}>Reset</button>
        </section>
      </div>
    );
  }
}

export default Counter;
