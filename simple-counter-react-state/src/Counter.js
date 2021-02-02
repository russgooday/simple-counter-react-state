import React, { Component } from 'react';

class Counter extends Component {

  state = { counter: 0 }

  increment = () => {
    this.setState(
      ({ counter }, { max, step }) => {
        if (counter >= max) return

        return { counter: counter + step }
      }
    )
  }

  decrement = () => {
    this.setState(
      ({ counter }, { max, step }) => {
        return { counter: counter - step }
      }
    )
  }

  reset = () => {
    this.setState(
      () => ({ counter: 0 })
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
