import { combineReducers } from "redux";
import themeReducer from "./theme";
import recommend from "views/Recommend/store";
export default combineReducers({
    theme: themeReducer,
    recommend: recommend.reducer
});