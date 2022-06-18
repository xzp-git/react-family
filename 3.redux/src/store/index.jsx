import { createStore, applyMiddleware } from "../redux";
import combinedReducer from "./reducers";
import logger from "./redux-logger";
import thunk from "./redux-thunk";
import promise from "./redux-promise";



const store = applyMiddleware(thunk, promise, logger)(createStore)(combinedReducer);

export default store;
