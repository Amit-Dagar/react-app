import React, { Component } from "react";
class Counter extends Component {
  render() {
    const { onIncrement, onDelete, counter } = this.props;
    return (
      <div className="m-3">
        <span className={this.getClassbadges()}>{this.formatCount()}</span>
        <button
          onClick={() => onIncrement(counter)}
          className="btn btn-primary m-2"
        >
          Increment
        </button>
        <button
          className="btn btn-danger m-2"
          onClick={() => onDelete(counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }
  getClassbadges() {
    const { counter } = this.props;
    let clases = "badge m-2 badge-";
    clases += counter.value === 0 ? "warning" : "primary";
    return clases;
  }

  formatCount() {
    const { counter } = this.props;
    const { value } = counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
