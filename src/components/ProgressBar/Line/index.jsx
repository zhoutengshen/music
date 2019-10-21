import React from "react";
import styled from "styled-components";
import ProgressBar from "progressbar.js";
import { timeConverse } from "utils";
const LineWraper = styled.div`
    display: flex;
    line-height: 1.5;
    align-items: center;
    .current-time,.duration{
        width:5rem;
        text-align: center;
        color:#fff;
        font-size:1.4rem;
    }
    .progress{
        position: relative;
        flex:1;
        .dot{
            position: absolute;
            width: 7px;
            height: 7px;
            background: red;
            border-radius: 50%;
            top: -2px;
        }
    }
`

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
    componentDidMount() {
        this.lineProgressbar = new ProgressBar.Line(this.ref, { trailColor: "#ccc" });
    }
    changeIconStyle = () => {
        const { isPause } = this.props;
        const { lineProgressbar } = this;
        if (!lineProgressbar) {
            return;
        }
        if (isPause) {
            lineProgressbar.stop();
        } else {
            const { currentTime, duration } = this.props;
            lineProgressbar.set(currentTime / duration);
        }
    }
    render() {
        this.changeIconStyle();
        const { currentTime, duration } = this.props;
        const dotOffset = this.ref && this.ref.offsetWidth * (currentTime / duration) + 'px';
        return <LineWraper>
            <i className="current-time">{timeConverse(currentTime)}</i>
            <div id="line-progress" className="progress" ref={el => this.ref = el} ><label style={{ left: dotOffset }} className="dot" ref={el => this.dot = el}></label></div>
            <i className="duration">{timeConverse(duration) || "0 : 00"}</i>
        </LineWraper>
    }
}
