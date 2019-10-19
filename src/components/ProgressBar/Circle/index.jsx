import React from "react";
import propTyps from "prop-types";
import ProgressBar from "progressbar.js";
export default class PlayBarCircleProgressBar extends React.PureComponent {
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
            const { currentTime, duration } = this.props;
            circle.set(currentTime / duration);
            circle.text.style.marginLeft = "0";
        }
    }
    render() {
        const { onClick } = this.props;
        const { changeIconStyle } = this;
        changeIconStyle();
        return <div className="progress-bar" ref={el => this.ref = el} onClick={onClick} />
    }
}
