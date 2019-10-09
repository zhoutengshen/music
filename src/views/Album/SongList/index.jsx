import React, { memo } from "react";
import { connect } from "react-redux";
import playerStore from "views/Plyaer/store";
import { ListWraper } from "./style";
import SongItem from "./SongItem";

//产生十条空数据,用于骨架屏
const getInitTracks = (tracks) => {
    return tracks.length === 0 ? Array.from(new Array(10)).map(() => {
        return {
            name: "",
            ar: [],
            al: {},
            alia: []
        }
    }) : tracks;

}
const getSongsInfo = (tracks = [], currentPlayingSongId = -1) => {
    tracks = getInitTracks(tracks);
    const songsInfo = tracks.map(song => {
        const songId = song.songId;
        const songName = song.name;
        const artistNames = song.ar.reduce((preItem, nextItem) => preItem.concat(nextItem.name), "/").slice(1);
        const albumName = song.al.name || "";
        const songAlia = song.alia.reduce((preItem, nextItem) => preItem.concat(nextItem), ",").slice(1);
        const isPlaying = song.songId === currentPlayingSongId;
        return {
            songId, songName, artistNames, albumName, songAlia, isPlaying
        }
    });
    return songsInfo
}
const changeMusicHandle = (changeSongList, { songInfo, playList }) => {
    const { isPlaying } = songInfo;
    (!isPlaying && changeSongList({ song: songInfo, playList }))
}
const SongList = (props) => {
    let { tracks, player } = props;
    const currentPlayingSong = player.get("song");
    const currentPlayingSongId = currentPlayingSong.songId;
    const songsInfo = getSongsInfo(tracks, currentPlayingSongId);
    const { changeSongList } = props;
    return <ListWraper>
        <header className="header">
        </header>
        {
            songsInfo.map((songInfo = {}, index) =>
                // 性能提示 不要将这个函数注册写在 组件上，可以避免重复渲染
                <div onClick={() => { changeMusicHandle(changeSongList, { songInfo, playList: songsInfo }) }} key={songInfo.id || index}>
                    <SongItem {...songInfo} index={index + 1} isPlaying={songInfo.isPlaying} />
                </div>
            )
        }
    </ListWraper>
}
//Redux 
const mapStateToProps = (state) => {
    const { player } = state;
    return {
        player: player
    }
}
const mapDispatchToProps = (dispatch) => {
    const { actions } = playerStore;
    return {
        changeSongList({ song, playList }) {
            dispatch(actions.changeSongListAction({ song, playList }))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(SongList));
