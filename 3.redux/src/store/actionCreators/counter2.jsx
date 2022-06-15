import { ADD2, MINUS2 } from "../action-types";

function add2() {
  return { type: ADD2 };
}

function minus2() {
  return { type: MINUS2 };
}

const actionCreators = { add2, minus2 };

export default actionCreators;
