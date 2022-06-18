import {createStore, applyMiddleware} from 'redux'
import combinedReducers from './reducers';
import { routerMiddleware, createReduxHistory } from './history'
export const store = applyMiddleware(routerMiddleware)(createStore)(combinedReducers)
export const history = createReduxHistory(store)
window.store = store;