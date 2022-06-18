import compose from './compose';

function applyMiddleware(...middlewarres) {
    return function (createStore) {
      return function (reducer, preloadedState) {
        const store = createStore(reducer, preloadedState);
        let dispatch;
  
        let middlewarreAPI = {
          getState: store.getState,
          dispatch: (action) => dispatch(action),
        };

        let chain = middlewarres.map(middlewarre => middlewarre(middlewarreAPI))
        dispatch =compose(...chain)(store.dispatch);
  
        return {
          ...store,
          dispatch,
        };
      };
    };
  }

  export default applyMiddleware;