import React from "react";
import propTyps from "prop-types";
import ProgressBar from "progressbar.js";
import playerStore from "views/Plyaer/store"
import { connect } from "react-redux";
// isPause 为当前状态，图标表示下一个状态
class PlayBarCircleProgressBar extends React.PureComponent {
    static defaultProps = {
        strokeWidth: 7,
        trailColor: "#ccc",
        duration: 10 * 1000,
        trailWidth: 6,
        easing: "linear",
        from: "#999",
        to: "#bbb",
        color: '#999'
    }
    static propTypes = {
        strokeWidth: propTyps.number,
        trailColor: propTyps.string
    }
    componentDidMount() {
        const { isPause } = this.props;
        const className = isPause ? "iconfont iconbar-play" : "iconfont iconbar-pause";
        const textConfig = {
            value: "",
            className: className,
            style: {
                position: "absolute",
                left: "50%",
                top: "50%",
                padding: "0",
                margin: "0",
                transform: "translate(-50%, -50%)",
                fontSize: "2rem",
                marginLeft: isPause ? "0.19rem" : 0,
                marginTop: "0.1rem",
                color: "#aaa",
                fontWeight: 600
            }
        };
        const { strokeWidth, trailColor, trailWidth, easing, color } = this.props;
        this.circle = new ProgressBar.Circle(this.ref, { strokeWidth, color, trailColor, trailWidth, easing, text: textConfig });
        if (isPause) {
            this.circle.stop();
        }
    }
    computedSongTime = () => {
        let { currentPlayingSongMp3Info } = this.props;
        currentPlayingSongMp3Info = currentPlayingSongMp3Info.toJS();
        // （音频编码率（Kbit为单位）/8 + 视频编码率（Kbit为单位）/8）× 影片总长度（秒为单位）= 文件大小（KB为单位）
        //time = size / (br / 8) = size / br * 8 
        const { size, br } = currentPlayingSongMp3Info;
        return size / br * 8;
    }
    changeIconStyle = () => {
        const { isPause } = this.props;
        const { circle } = this;
        if (!circle) {
            return;
        }
        if (this.currentPlayingSongMp3Info === undefined) {
            //首次
            this.currentPlayingSongMp3Info = this.props.currentPlayingSongMp3Info;
        } else if (this.currentPlayingSongMp3Info !== this.props.currentPlayingSongMp3Info) {
            this.currentPlayingSongMp3Info = this.props.currentPlayingSongMp3Info;
            circle.set(0);
        }
        const className = isPause ? "iconfont iconbar-play" : "iconfont iconbar-pause";
        this.circle.text.className = className;
        if (isPause) {
            circle.text.style.marginLeft = "0.15rem";
            circle.stop();
        } else {
            const time = this.computedSongTime();
            //歌曲发生变化重置进度条
            circle.animate(1, {
                duration: 1000 * time
            });
            circle.text.style.marginLeft = "0";
        }
    }
    playOrPauseHandle = () => {
        const { isPause, playOrPauseFunc } = this.props;
        playOrPauseFunc(isPause);
    }
    isChangeSong = () => {
    }
    render() {
        const { playOrPauseHandle, changeIconStyle } = this;
        changeIconStyle();
        return <div onClick={playOrPauseHandle} className="progress-bar" ref={el => this.ref = el} />
    }
}

//Redux
const mapStateToProps = (state) => {
    const { player } = state;
    return {
        isPause: player.get("pause"),
        currentPlayingSongMp3Info: player.get("currentPlayingSongMp3Info")
    }
}
const mapDispatchToProps = (dispatch) => {
    const { actions } = playerStore;
    return {
        playOrPauseFunc(isPause) {
            return isPause ? dispatch(actions.playAction()) : dispatch(actions.pauseAction());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PlayBarCircleProgressBar);