import React from "react";
import propTyps from "prop-types";
import ProgressBar from "progressbar.js";
export default class PlayBarCircleProgressBar extends React.PureComponent {

    static defaultProps = {
        strokeWidth: 1,
        trailColor: "#eee",
        duration: 60 * 1000
    }
    static propTypes = {
        strokeWidth: propTyps.number,
        trailColor: propTyps.string
    }
    componentDidMount() {
        const { strokeWidth, trailColor, duration } = this.props;
        this.circle = new ProgressBar.Circle(this.ref, { strokeWidth, trailColor, duration });
        this.circle.set(0.4);
        this.circle.animate(1);
    }
    render() {
        return <div ref={el => this.ref = el} ></div>
    }
}