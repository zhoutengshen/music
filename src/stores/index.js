import { createStore, compose, applyMiddleware } from "redux";
import reducers from "./reducers";
import reduxThunk from "redux-thunk";
const defaultState = {
}
const composeEnhancer = compose;
const store = createStore(reducers, defaultState, composeEnhancer(
    applyMiddleware(reduxThunk)
));
export default store;