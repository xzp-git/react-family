import { ADD1, MINUS1 } from "../action-types";

function add1() {
  return { type: ADD1 };
}

function minus1() {
  return { type: MINUS1 };
}

const actionCreators = { add1, minus1 };

export default actionCreators;
