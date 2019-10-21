import React, { memo } from "react";
import { connect } from "react-redux";
import plyaerStore from "views/Player/store";
import { MiniPlayerBar, NormalPlayBar, AudioPlayer } from "components/Plyaer";
import PlayBarCircleProgressBar from "components/ProgressBar/Circle";
import PlayBarLineProgressBar from "components/ProgressBar/Line";
import PlaySongList from "components/Plyaer/PlaySongList";
import { withRouter } from "react-router-dom";
import Modal from "base-ui/Modal"
import lodash from "lodash";
import { PlayerWraper, FullSceenPlayerWraper, ImgCover } from "./style";
import { PLAY_MODE } from "components/Plyaer/constants";

const FullScreenPlayer = memo(({ songName, artistNames, picUrl, commentCount, onGoback, fullScreen, children }) => (
    <FullSceenPlayerWraper style={{ display: fullScreen ? '' : 'none' }}>
        <ImgCover backgroundCoverUrl={picUrl} />
        <div className="top-bar">
            <div className="left" onClick={onGoback}>
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
        <div className="buttom-bg">
            <ul className="tool-bar">
                <li><a href="#"><i className="iconfont iconaixin"></i></a></li>
                <li><a href="#"><i className="iconfont icondownload"></i></a></li>
                <li><a href="#"><i className="iconfont iconxiaoxi"></i></a></li>
                <li><a href="#"><i className="iconfont iconmore"><span>{commentCount}</span></i></a></li>
            </ul>
            {
                children
            }
        </div>
    </FullSceenPlayerWraper>
));


class Player extends React.Component {
    state = {
        fullScreen: false,
        currentTime: 0,
        duration: 0,
        isPause: false,
        playMode: PLAY_MODE.normal,
        showList: false
    }
    audioPlayerRef = React.createRef();
    onFullScreen = () => {
        this.setState({
            fullScreen: true
        });
    }
    onGoback = () => {
        this.setState({
            fullScreen: false
        });
    }
    onTimeupdate = lodash.throttle(({ currentTime, duration }) => {
        this.setState({
            currentTime, duration
        });
    }, 1000)
    playStatusChangeHandle = () => {
        this.setState((state) => {
            const { isPause } = state;
            if (isPause) {
                this.audioPlayerRef.current.play();
            } else {
                this.audioPlayerRef.current.pause();
            }
            return {
                isPause: !isPause
            }
        });
    }
    playNextSongHandle = () => {
        this.audioPlayerRef.current.next();
    }
    playPreviousSongHadle = () => {
        this.audioPlayerRef.current.previou();
    }
    changePlayModeHandle = () => {
        const arr = Object.keys(PLAY_MODE);
        const { playMode } = this.state;
        const index = (arr.findIndex(item => item === playMode) + 1) % arr.length;
        this.setState({
            playMode: arr[index]
        })
    }
    changeSongHandle = (song) => {
        const { changeSongAction } = this.props;
        changeSongAction({ song })
    }
    showPlayListHandle = () => {
        this.setState({ showList: true });
    }
    hiddenPlayListHandle = () => {
        this.setState({ showList: false });
    }
    render() {
        const { fullScreen, currentTime, duration, isPause, playMode, showList } = this.state;
        const { playList, willPlaySong, changeSongAction } = this.props;
        const { songName, artistNames, picUrl, commentCount, songAlia, songId } = willPlaySong.toJS();
        const show = !!songName;
        return show ? <PlayerWraper>
            <FullScreenPlayer
                {...{ songName, artistNames, picUrl, commentCount, fullScreen }}
                onGoback={this.onGoback}
            >
                <NormalPlayBar
                    onShowPlayList={this.showPlayListHandle}
                    onPlayStatusChange={this.playStatusChangeHandle}
                    onNext={this.playNextSongHandle}
                    onPrevious={this.playPreviousSongHadle}
                    onModeChange={this.changePlayModeHandle}
                    playMode={playMode}
                    playStatus={!isPause}

                >
                    <PlayBarLineProgressBar
                        {...{ currentTime, duration, isPause }}
                    />
                </NormalPlayBar>
            </FullScreenPlayer>

            <MiniPlayerBar
                {...{ picUrl, songAlia, songName, fullScreen }}
                onFullScreen={this.onFullScreen}
                onShowList={this.showPlayListHandle}
            >
                <PlayBarCircleProgressBar
                    onShowList={this.changeSongHandle}
                    {...{ currentTime, duration, isPause }}
                />
            </MiniPlayerBar>

            <AudioPlayer
                ref={this.audioPlayerRef}
                {...{ playList, willPlaySong, changeSongAction }}
                onTimeupdate={this.onTimeupdate}
            />
            <Modal show={showList} onClick={this.hiddenPlayListHandle} />
            <PlaySongList
                showList={showList}
                clickItem={this.changeSongHandle}
                playList={playList}
                currentPlayingSongId={songId} />
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