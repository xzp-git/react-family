import React from "react";
import { bindActionCreators } from "../redux";
import store from "../store";
import actionCreators from "../store/actionCreators/counter1";
const boundActionCreators = bindActionCreators(actionCreators, store.dispatch);
//boundActionCreators={add:()=>dispatch({ type: ADD }),minus}
class Counter1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: store.getState().counter1.number };
  }
  componentDidMount() {
    this.unsubscribe = store.subscribe(() =>
      this.setState({
        number: store.getState().counter1.number,
      })
    );
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    console.log(store.getState());

    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick={boundActionCreators.add1}>+</button>
        <button onClick={boundActionCreators.minus1}>-</button>
        <button onClick={() => store.dispatch({ type: "DOUBLE" })}>
          DOUBLE
        </button>
      </div>
    );
  }
}
export default Counter1;
