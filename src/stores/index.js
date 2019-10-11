import { createStore, compose, applyMiddleware } from "redux";
import reducers from "./reducers";
import reduxThunk from "redux-thunk";
const defaultState = {
}
const composeEnhancer = compose;
let store = {};
//排除服务端渲染没有window对象
if (global.window === global && global.window.__REDUX_DEVTOOLS_EXTENSION__) {
    //非服务端开发环境
    store = createStore(reducers, defaultState, composeEnhancer(
        applyMiddleware(reduxThunk), global.window.__REDUX_DEVTOOLS_EXTENSION__ && global.window.__REDUX_DEVTOOLS_EXTENSION__()
    ));
} else {
    store = createStore(reducers, defaultState, composeEnhancer(
        applyMiddleware(reduxThunk)
    ));
}

export default store;