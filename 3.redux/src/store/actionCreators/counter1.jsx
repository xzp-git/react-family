import { ADD1, MINUS1 } from "../action-types";

function add1() {
  return { type: ADD1 };
}

function minus1() {
  return { type: MINUS1 };
}

function thunkAdd() {
  return function (getStatem, dispatch) {
    setTimeout(() => {
      dispatch(function (getStatem, dispatch) {
        setTimeout(() => {
          dispatch(function (getStatem, dispatch) {
            setTimeout(() => {
              dispatch({ type: ADD1 });
            }, 1000);
          });
        }, 1000);
      });
    }, 1000);
  };
}

function promiseAdd() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ type: ADD1 });
    }, 1000);
  });
}
const actionCreators = { add1, minus1, thunkAdd, promiseAdd };

export default actionCreators;
