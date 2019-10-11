import * as actionTypes from "./constants";
import { fromJS } from "immutable";
const defalutState = fromJS({
    currentPlayingSong: {},
    songDetail: {},
    playList: [],
    pause: true,
    currentPlayingSongMp3Info: {}
});
export default (state = defalutState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_PLAY_LIST:
            return state.set("playList", action.data)
        case actionTypes.CHANGE_SONG:
            return state.set("currentPlayingSong", action.data)
        case actionTypes.PAUSE:
            return state.set("pause", true)
        case actionTypes.PLAY:
            return state.set("pause", false)
        case actionTypes.PLAY_LAST_SONG:
            return state.set("songDetail", action.data)
        case actionTypes.PLAY_NEXT_SONG:
            return state.set("songDetail", action.data)
        case actionTypes.FETCH_SONG_MP3_INFO:
            return state.set("currentPlayingSongMp3Info", action.data)
        default:
            return state;
    }
}