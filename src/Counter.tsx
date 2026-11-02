import { Component } from 'react';

// Counter has no props; its state always stores a numeric count.
interface CounterState {
  count: number;
}

// A class component that increases its count when the button is clicked.
class Counter extends Component<Record<string, never>, CounterState> {
  // Set the starting count when the component is created.
  state: CounterState = {
    count: 0,
  };

  // Use the previous state so rapid clicks always increment reliably.
  increment = (): void => {
    this.setState((previousState) => ({
      count: previousState.count + 1,
    }));
  };

  render() {
    return (
      <section className="counter-card" aria-label="Counter">
        <p>Count: {this.state.count}</p>
        <button className="counter-button" type="button" onClick={this.increment}>
          Increment
        </button>
      </section>
    );
  }
}

export default Counter;
