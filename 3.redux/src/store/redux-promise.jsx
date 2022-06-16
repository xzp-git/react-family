function promise({ getState, dispatch }) {
  /**
   * next 就是原来的 dispatch方法
   */
  return function (next) {
    //此方法就是我们改造后的dispatch方法
    return function (action) {
      if (action.then && typeof action.then === "function") {
        action.then(dispatch);
      } else {
        next(action);
      }
    };
  };
}

export default promise;
