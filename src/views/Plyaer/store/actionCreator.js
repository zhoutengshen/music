import * as actionType from "./constants";
import { fetchSonsDetailApi } from "api/song";
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

export const playActionAction = () => {
    return {
        type: actionType.PLAY
    }
}
//改变当前的播放列表
//song播放列表里面的一条歌曲（即将播放）
//playList 播放列表
export const changeSongListAction = ({ song = {}, playList = [] }) => {
    return dispatch => {
        //切换歌曲
        dispatch({
            type: actionType.CHANGE_SONG,
            data: song
        });
        //更新播放列表
        dispatch({
            type: actionType.CHANGE_PLAY_LIST,
            data: playList
        });
        //获取该歌曲的详细信息
        return new Promise((resolve, reject) => {
            const songId = song.songId;
            fetchSonsDetailApi({ ids: [songId] }).then(({ data }) => {
                console.log(data);
            });
        });
    }
}