function createStore(reducer) {
  let state;
  const listeners = [];
  function getState() {
    return state;
  }

  function subscribe(listener) {
    listeners.push(listener);
    return () => {
      let index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  }

  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach((l) => l());
  }
  dispatch({ type: "@@REDUX/INIT" });
  return {
    getState,
    subscribe,
    dispatch,
  };
}

export default createStore;
