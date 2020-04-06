import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    const { onReset, onDelete, counter, onIncrement } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-warning m-2">
          reset
        </button>
        {counter.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
