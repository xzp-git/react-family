function logger({ getState, dispatch }) {
  /**
   * next 就是原来的 dispatch方法
   */
  return function (next) {
    //此方法就是我们改造后的dispatch方法
    return function (action) {
      console.log("老状态", getState());
      next(action);
      console.log("新状态", getState());
      return action;
    };
  };
}

export default logger;
