import { createStore, compose, applyMiddleware } from "redux";
import reducers from "./reducers";
import reduxThunk from "redux-thunk";
const defaultState = {
}
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, defaultState, composeEnhancer(
    applyMiddleware(reduxThunk)
));
export default store;