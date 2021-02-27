import React, { Component } from "react";
import PropTypes from "prop-types";
import "./counter.css";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <div className="counter">
        <CounterButton incrementMethod={this.increment} decrementMethod={this.decrement}/>
        <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
        <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
        <span className="counter">{this.state.counter}</span>
        <div><button className="reset" onClick={this.reset}>Reset</button></div>
      </div>
    );
  }

  increment = (by) => {
    // console.log(`parent - ${by}`);
    this.setState({
      counter: this.state.counter + by
    });
  };

  decrement = (by) => {
    this.setState({
      counter: this.state.counter - by
    });
  };

  reset = () => {
    this.setState({
      counter: 0
    });
  }
}

class CounterButton extends Component {
  //Define the initial state in a constructor
  //state => counter 0
  // constructor() {
  //   super();
  //   this.state = {
  //     counter: 0,
  //   };
  //   // this.increment = this.increment.bind(this);
  // }

  render() {
    return (
      <div className="counter">
        <button onClick={this.increment}>+{this.props.by}</button>
        <button onClick={this.decrement}>-{this.props.by}</button>
        {/* <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button> */}
        {/* <span className="counter">{this.state.counter}</span> */}
      </div>
    );
  }

  increment = () => {
    //Update state - counter++
    // this.setState({
    //   counter: this.state.counter + this.props.by,
    // });
    this.props.incrementMethod(this.props.by);
  };

  decrement = () => {
    this.props.decrementMethod(this.props.by);
  };
}

CounterButton.defaultProps = {
  by: 1,
};

CounterButton.propTypes = {
  by: PropTypes.number,
};

export default Counter;
