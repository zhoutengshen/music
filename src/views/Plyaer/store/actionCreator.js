import * as actionType from "./constants";
import { fetchSonsDetailApi } from "api/song";
import { fromJS } from "immutable";
export const playNextSongAction = () => {
    return {
        type: actionType.PLAY_NEXT_SONG
    }
}
export const playLastSongAction = () => {
    return {
        type: actionType.PLAY_LAST_SONG
    }
}

export const pauseAction = () => {
    return {
        type: actionType.PAUSE
    }
}

export const playAction = () => {
    return {
        type: actionType.PLAY
    }
}
//更新播放列表
export const changeSongPlayListListAction = ({ playList = [] }) => {
    return {
        type: actionType.CHANGE_PLAY_LIST,
        data: fromJS(playList)
    }
}

//切换歌曲
export const changeSongAction = ({ song = {} }) => {
    return {
        type: actionType.CHANGE_SONG,
        data: fromJS(song)
    }
}

//添加一条数据到历史播放列表
export const addOneSongToPlayHisttoryAction = () => {
    return {

    }
}
//
export const fetchSongMP3Action = ({ songId }) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            fetchSonsDetailApi({ id: songId }).then(({ data }) => {
                dispatch({
                    type: actionType.FETCH_SONG_MP3_INFO,
                    data: fromJS(data.data[0])
                })
                resolve(data);
            });
        });
    }
}