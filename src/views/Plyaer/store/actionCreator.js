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
    const ids = playList.map(song => song.songId);
    return dispatch => {
        return new Promise((resolve, reject) => {
            fetchSonsDetailApi({ ids: [...ids] }).then(({ data }) => {
                const map3Infos = data.data;
                for (let i = 0; i < playList.length; i++) {
                    const songId = playList[i].songId;
                    for (let j = 0; j < map3Infos.length; j++) {
                        const mp3Id = map3Infos[j].id;
                        if (songId === mp3Id) {
                            playList[i].mp3Info = map3Infos[j];
                            break;
                        }
                    }
                }
                dispatch({
                    type: actionType.CHANGE_PLAY_LIST,
                    data: fromJS(playList)
                })
                resolve(data);
            });
        });
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

export const showPlayListAction = ({ status = false }) => {
    return {
        type: actionType.SHOW_PLAY_LIET,
        data: fromJS(status)
    }
}