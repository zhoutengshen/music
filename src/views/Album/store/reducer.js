import * as actionTypes from "./constants";
import { fromJS } from "immutable";
const defaultState = {
    albumDetail: {
        playlist: {}, privileges: {}
    }
}
export default (state = fromJS(defaultState), action) => {
    switch (action.type) {
        case actionTypes.FETCH_ALBUM_DETAIL:
            return state.set("albumDetail", action.data)
        default:
            return state
    }
}