function createBrowserHistory() {
  const globalHistory = window.history;

  let state;
  let listeners = [];

  function listen(listener) {
    listeners.push(listener);

    return () => {
      listeners = listeners.filter((item) => item !== listener);
    };
  }

  const history = {
    listen,
  };

  return history;
}

export default createBrowserHistory;
