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
  function push(pathname, nextState) {
    const action = "PUSH";
    if (typeof pathname === "object") {
      state = pathname.state;
      pathname = pathname.pathname;
    } else {
      state = nextState;
    }
    globalHistory.pushState(state, null, pathname);
    let location = { state, pathname };
    notify({ action, location });
  }

  function notify() {
    listeners.forEach((listener) => listener(newState));
  }
  function go(n) {
    globalHistory.go(n);
  }
  function goBack() {
    globalHistory.back();
  }
  function goForward() {
    globalHistory.forward();
  }
  window.addEventListener("popstate", () => {
    let location = {
      pathname: window.location.pathname,
      state: window.location.state,
    };
    notify({ action: "POP", location });
  });
  const history = {
    action: "POP",
    location: {
      pathname: window.location.pathname,
      state: window.location.state,
    },
    listen,
    push,
    go,
    goBack,
    goForward,
  };

  return history;
}

export default createBrowserHistory;
