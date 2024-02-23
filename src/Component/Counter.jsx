/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { Component } from "react";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../Actions/Counter";

class Counter extends Component {
  constructor(props) {
    super(props);
  }
  handleIncrement() {
    this.props.increment();
  }
  handleDecrement() {
    this.props.decrement();
  }
  handleAdd() {
    this.props.add();
  }

  render() {
    console.log(this.props, "render");
    return (
      <div>
        <div>
          <h3>Count: {this.props.count}</h3>
          <button onClick={this.handleIncrement.bind(this)}>Increment</button>
          <button onClick={this.handleDecrement.bind(this)}>Decrement</button>
        </div>

        <h2>ADD WITH PAYLOAD VALUE {this.props.payloadVal}</h2>
        <button onClick={this.handleAdd.bind(this)}>ADD</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
