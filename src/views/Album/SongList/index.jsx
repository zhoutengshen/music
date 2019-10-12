import React, { memo } from "react";
import { connect } from "react-redux";
import playerStore from "views/Plyaer/store";
import { ListWraper } from "./style";
import SongItem from "./SongItem";

class SongList extends React.PureComponent {
    //产生十条空数据,用于骨架屏
    getInitAlbumSongInfoList = (albumSongInfoList) => {
        return albumSongInfoList.length === 0 ? Array.from(new Array(10)).map(() => {
            return {
                name: "",
                ar: [],
                al: {},
                alia: []
            }
        }) : albumSongInfoList;

    }
    reduceAlbumSongInfoList = (albumSongInfoList = []) => {
        let { currentPlayingSong } = this.props;
        currentPlayingSong = currentPlayingSong.toJS();
        const currentPlayingSongId = currentPlayingSong.songId || -1;
        albumSongInfoList = this.getInitAlbumSongInfoList(albumSongInfoList);
        albumSongInfoList = albumSongInfoList.map(song => {
            const songId = song.songId;
            const songName = song.name;
            const artistNames = song.ar.reduce((preItem, nextItem) => preItem.concat(nextItem.name), "/").slice(1);
            const albumName = song.al.name || "";
            const picUrl = song.al.picUrl;
            const songAlia = song.alia.reduce((preItem, nextItem) => preItem.concat(nextItem), ",").slice(1);
            const isSelect = song.songId === currentPlayingSongId;
            return {
                songId, songName, artistNames, albumName, songAlia, isSelect, picUrl
            }
        });
        return albumSongInfoList;
    }
    changeMusicHandle = ({ willPlaySongInfo, albumSongInfoList }) => {
        const { changeSongAction, playAction, changeSongPlayListListAction, fetchSongMP3Action } = this.props;
        const { isSelect } = willPlaySongInfo;
        //点击的项没播放
        if (!isSelect) {
            changeSongAction({ song: willPlaySongInfo });
            playAction();
            fetchSongMP3Action({ songId: willPlaySongInfo.songId });
        }
        //判断将要播放的歌曲是否在当前播放列表
        const playList = this.props.playList.toJS();
        if (playList.findIndex((item) => item.songId === willPlaySongInfo.songId) === -1) {
            changeSongPlayListListAction({ albumSongInfoList });
        }
    }
    render() {
        const { props } = this;
        const { reduceAlbumSongInfoList, changeMusicHandle } = this;
        let { albumSongInfoList } = props;
        albumSongInfoList = reduceAlbumSongInfoList(albumSongInfoList);
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
                albumSongInfoList.map((songInfo = {}, index) =>
                    // 性能提示 不要将这个函数注册写在 组件上，可以避免重复渲染
                    <div onClick={() => { changeMusicHandle({ willPlaySongInfo: songInfo, albumSongInfoList: albumSongInfoList }) }} key={songInfo.songId}>
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
        currentPlayingSong: player.get("currentPlayingSong"),
        playList: player.get("playList")
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
        changeSongPlayListListAction({ albumSongInfoList }) {
            dispatch(actions.changeSongPlayListListAction({ playList: albumSongInfoList }))
        },
        fetchSongMP3Action({ songId }) {
            dispatch(actions.fetchSongMP3Action({ songId }))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(SongList));
