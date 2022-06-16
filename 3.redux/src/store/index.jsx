import { createStore } from "../redux";
import combinedReducer from "./reducers";
import logger from "./redux-logger";
import thunk from "./redux-thunk";
import promise from "./redux-promise";

function applyMiddleware(middlewarre) {
  return function (createStore) {
    return function (reducer, preloadedState) {
      const store = createStore(reducer, preloadedState);
      let dispatch;

      let middlewarreAPI = {
        getState: store.getState,
        dispatch: (action) => dispatch(action),
      };

      dispatch = middlewarre(middlewarreAPI)(store.dispatch);

      return {
        ...store,
        dispatch,
      };
    };
  };
}

const store = applyMiddleware(promise)(createStore)(combinedReducer);

export default store;
