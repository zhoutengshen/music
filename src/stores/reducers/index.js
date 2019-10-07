import { combineReducers } from "redux";
import themeReducer from "./theme";
import recommend from "views/Recommend/store";
import albumDetail from "views/Album/store";
export default combineReducers({
    theme: themeReducer,
    recommend: recommend.reducer,
    albumDetail: albumDetail.reducer
});