import React, { memo } from "react";
import { PlayerBarWraper } from "./style";
import PlayBarLyrics from "components/Lyrics/Mini";
import playerStore from "views/Plyaer/store";
import PlayBarCircleProgressBar from "components/ProgressBar/PlayBar";
import PlaySongList from "components/Popover/PlaySongList";
import { connect } from "react-redux";

const PlayerBar = (props) => {
    let { currentPlayingSong } = props;
    const { showPlayListAction } = props;
    currentPlayingSong = currentPlayingSong.toJS();
    let { picUrl, albumName, artistNames, songAlia, songName } = currentPlayingSong;
    let isShowBar = picUrl && songName;
    songAlia = songAlia ? ` (${songAlia}) ` : songAlia;
    return isShowBar ? <PlayerBarWraper>
        <div className="left">
            <img src={picUrl} alt="" />
        </div>
        <div className="mid">
            <p className="songName">{songName}{songAlia}</p>
            <div className="lyrics">
                <PlayBarLyrics />
            </div>
        </div>
        <div className="right">
            {/* PlayBarCircleProgressBar 的状态由自己通过Redux管理，若由父组件传递数据下去，那么必将引起父组件render函数的执行，造成不必要的损耗 */}
            <PlayBarCircleProgressBar />
            <i className="play-list iconfont iconplay-list" onClick={showPlayListAction}></i>
        </div>
        <PlaySongList />
    </PlayerBarWraper> : null;
}

//Redux 

const mapStateToProps = (state) => {
    const { player } = state;
    const currentPlayingSong = player.get("currentPlayingSong");
    return {
        currentPlayingSong: currentPlayingSong
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        showPlayListAction() {
            dispatch(playerStore.actions.showPlayListAction({ status: true }));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(memo(PlayerBar))