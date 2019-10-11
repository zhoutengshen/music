import React, { memo } from "react";
import { connect } from "react-redux";
import playerStore from "views/Plyaer/store";
import { ListWraper } from "./style";
import SongItem from "./SongItem";

class SongList extends React.PureComponent {
    //产生十条空数据,用于骨架屏
    getInitsongInfoList = (songInfoList) => {
        return songInfoList.length === 0 ? Array.from(new Array(10)).map(() => {
            return {
                name: "",
                ar: [],
                al: {},
                alia: []
            }
        }) : songInfoList;

    }
    getSongsInfo = (songInfoList = []) => {
        let { currentPlayingSong } = this.props;
        currentPlayingSong = currentPlayingSong.toJS();
        const currentPlayingSongId = currentPlayingSong.songId || -1;
        songInfoList = this.getInitsongInfoList(songInfoList);
        const songsInfo = songInfoList.map(song => {
            const songId = song.songId;
            const songName = song.name;
            const artistNames = song.ar.reduce((preItem, nextItem) => preItem.concat(nextItem.name), "/").slice(1);
            const albumName = song.al.name || "";
            const picUrl = song.al.picUrl;
            const songAlia = song.alia.reduce((preItem, nextItem) => preItem.concat(nextItem), ",").slice(1);
            const isPlaying = song.songId === currentPlayingSongId;
            return {
                songId, songName, artistNames, albumName, songAlia, isPlaying, picUrl
            }
        });
        return songsInfo
    }
    changeMusicHandle = ({ willPlaySongInfo }) => {
        const { changeSongAction, playAction } = this.props;
        const { isPlaying } = willPlaySongInfo;
        //点击的项没播放
        if (!isPlaying) {
            changeSongAction({ song: willPlaySongInfo });
            playAction();
        }
        //判断将要播放的歌曲是否在当前播放列表
        //TODO:
    }
    render() {
        const { props } = this;
        const { getSongsInfo, changeMusicHandle } = this;
        let { songInfoList } = props;
        songInfoList = getSongsInfo(songInfoList);
        return <ListWraper>
            <header className="header">
                <i className="iconfont iconplay play-all"></i>
                <label>播放全部</label>
                <div className="clt">
                    <i className="iconfont iconplus"></i>
                    <span className="clt-count">收藏(54万){" "}</span>
                </div>
            </header>
            {
                songInfoList.map((songInfo = {}, index) =>
                    // 性能提示 不要将这个函数注册写在 组件上，可以避免重复渲染
                    <div onClick={() => { changeMusicHandle({ willPlaySongInfo: songInfo }) }} key={songInfo.songId}>
                        <SongItem {...songInfo} index={index + 1} />
                    </div>
                )
            }
        </ListWraper>
    }
}



//Redux 
const mapStateToProps = (state) => {
    const { player } = state;
    return {
        currentPlayingSong: player.get("currentPlayingSong")
    }
}
const mapDispatchToProps = (dispatch) => {
    const { actions } = playerStore;
    return {
        changeSongAction({ song }) {
            dispatch(actions.changeSongAction({ song }));
        },
        changePlayHistory() {

        },
        playAction() {
            dispatch(actions.playAction());
        },
        changeSongPlayListListAction({ playList }) {
            dispatch(actions.changeSongPlayListListAction({ playList }))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(SongList));
