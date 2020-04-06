import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
class App extends Component {
  state = {
    counter: [
      { id: 1, value: 1 },
      { id: 2, value: 0 },
      { id: 3, value: 2 },
      { id: 4, value: 0 },
    ],
  };

  constructor() {
    super();
    console.log("App - Constructor");
  }

  componentDidMount() {
    console.log("App - Mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    //Ajax calls when data is changed for new data
    console.log("App - updated");
  }

  componentWillUnmount() {
    console.log("App - Unmount");
  }

  handleDelete = (counterId) => {
    const counter = this.state.counter.filter((c) => c.id !== counterId);
    this.setState({ counter });
  };

  handleIncrement = (counterArray) => {
    // const counter = this.state.counter.map((c) => {
    //   if (c.id === counterArray.id) c.value++;
    //   return c;
    // });
    const counter = [...this.state.counter];
    const index = counter.indexOf(counterArray);
    counter[index] = { ...counterArray };
    counter[index].value++;
    this.setState({ counter });
  };

  handleReset = () => {
    const counter = this.state.counter.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counter });
  };

  render() {
    console.log("App - rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCounter={this.state.counter.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counter={this.state.counter}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
