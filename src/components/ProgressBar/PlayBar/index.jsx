import React from "react";
import propTyps from "prop-types";
import ProgressBar from "progressbar.js";
import playerStore from "components/Plyaer/store";
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
    changeIconStyle = () => {
        const { isPause } = this.props;
        const { circle } = this;
        if (!circle) {
            return;
        }
        const className = isPause ? "iconfont iconbar-play" : "iconfont iconbar-pause";
        this.circle.text.className = className;
        if (isPause) {
            circle.text.style.marginLeft = "0.15rem";
            circle.stop();
        } else {
            const songTimeInfo = this.props.songTimeInfo.toJS();
            const { currentTime, duration } = songTimeInfo;
            circle.set(currentTime / duration);
            circle.text.style.marginLeft = "0";
        }
    }
    playOrPauseHandle = () => {
        const { isPause, playOrPauseFunc } = this.props;
        playOrPauseFunc(isPause);
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
        songTimeInfo: player.get("songTimeInfo")
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