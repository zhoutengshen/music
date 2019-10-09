import * as actionTypes from "./constants";
import { fromJS } from "immutable";
const defalutState = fromJS({
    song: {},
    songDetail: {},
    playList: [],
    pause: true,
});
export default (state = defalutState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_PLAY_LIST:
            return state.set("playList", action.data)
        case actionTypes.CHANGE_SONG:
            return state.set("song", action.data)
        case actionTypes.PAUSE:
            return state.set("pause", true)
        case actionTypes.PLAY:
            return state.set("pause", false)
        case actionTypes.PLAY_LAST_SONG:
            return state.set("songDetail", action.data)
        case actionTypes.PLAY_NEXT_SONG:
            return state.set("songDetail", action.data)
        default:
            return state;
    }
}