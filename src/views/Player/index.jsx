import React from "react";
import { connect } from "react-redux";
import plyaerStore from "views/Player/store";
import { MiniPlayerBar, NormalPlayBar, AudioPlayer } from "components/Plyaer";
import { withRouter } from "react-router-dom";
import { PlayerWraper, FullSceenPlayerWraper, ImgCover } from "./style";

const FullScreenPlayer = ({ songName, artistNames, picUrl, commentCount }) => (
    <FullSceenPlayerWraper>
        <ImgCover backgroundCoverUrl={picUrl} />
        <div className="top-bar">
            <div className="left">
                <i className="iconfont iconleft"></i>
            </div>
            <div className="mid">
                <h3 className="title">{songName}</h3>
                <p className="description">{artistNames}</p>
            </div>
            <div className="right">
                <i className="iconfont iconshare"></i>
            </div>
        </div>
        <div className="record">
            <div className="mid">
                <img className="img" src={picUrl} alt="ok" />
            </div>
        </div>
        <ul className="tool-bar">
            <li><a href="#"><i className="iconfont iconaixin"></i></a></li>
            <li><a href="#"><i className="iconfont icondownload"></i></a></li>
            <li><a href="#"><i className="iconfont iconxiaoxi"></i></a></li>
            <li><a href="#"><i className="iconfont iconmore"><span>{commentCount}</span></i></a></li>
        </ul>
        <NormalPlayBar />
    </FullSceenPlayerWraper>
);


class Player extends React.Component {
    state = {
        fullScreen: false
    }
    render() {
        const { fullScreen } = this.state;
        const { playList, willPlaySong, pause, changeSongAction } = this.props;
        const { songName, artistNames, picUrl, commentCount } = willPlaySong.toJS();
        const show = !!songName;
        return show ? <PlayerWraper>
            {
                fullScreen ? <FullScreenPlayer {...{ songName, artistNames, picUrl, commentCount, fullScreen }} /> : <MiniPlayerBar />
            }
            <AudioPlayer {...{ playList, willPlaySong, pause, changeSongAction }} />
        </PlayerWraper> : null;
    }
}
//Redux
const mapStateToprops = (state) => {
    const { player } = state
    return {
        playList: player.get("playList"),
        willPlaySong: player.get("currentPlayingSong"),
        pause: player.get("pause")
    }
}

const mapDispatchToprops = (dispatch) => {
    const { actions } = plyaerStore;
    return {
        changeSongAction({ song }) {
            dispatch(actions.changeSongAction({ song }))
        }
    }
}
const PlayerContrainer = connect(mapStateToprops, mapDispatchToprops)(withRouter(Player));

export default PlayerContrainer;