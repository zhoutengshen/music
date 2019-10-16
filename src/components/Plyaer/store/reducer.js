import * as actionTypes from "./constants";
import { fromJS } from "immutable";
const defalutState = fromJS({
    currentPlayingSong: {},
    songDetail: {},
    playList: [],
    pause: true,
    showPlayList: false,
    songTimeInfo: 0,
    visiblePlayBar: true
});
export default (state = defalutState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_PLAY_LIST:
            return state.set("playList", action.data);
        case actionTypes.CHANGE_SONG:
            return state.set("currentPlayingSong", action.data);
        case actionTypes.PAUSE:
            return state.set("pause", true);
        case actionTypes.PLAY:
            return state.set("pause", false);
        case actionTypes.PLAY_LAST_SONG:
            return state.set("songDetail", action.data);
        case actionTypes.PLAY_NEXT_SONG:
            return state.set("songDetail", action.data);
        case actionTypes.SHOW_PLAY_LIET:
            return state.set("showPlayList", action.data);
        case actionTypes.CURRENT_TIME_CHANGE:
            return state.set("songTimeInfo", action.data);
        case actionTypes.SHOW_PLAYER_BAR:
            return state.set("visiblePlayBar", true);
        case actionTypes.HIDDEN_PLAYER_BAR:
            return state.set("visiblePlayBar", false)
        default:
            return state;
    }
}