import React from "react";
import ReactDOM from "react-dom";
import { throttle } from "lodash";

class WatchScrollPosition extends React.PureComponent {
    componentDidMount() {
        let { selector, interval } = this.props.options;
        const tags = selector ? document.querySelector(selector) : window;
        const tag = Array.isArray(tags) ? tags[0] : tags;
        this.scrollDom = tag;
        this.scrollDom.addEventListener("scroll", throttle(this.scrollHandle, interval));
        //回调
        this.callBack({
            y: tag.scrollTop,
            x: tag.scrollLeft
        });
    }
    isInRange(xRange, yRange, position) {
        const { scrollLeft, scrollTop } = position;
        const rsult = { inXRange: false, inYRange: false };
        if (xRange.start < scrollLeft && scrollLeft < xRange.end) {
            rsult.inXRange = true;
        }
        if (yRange.start < scrollTop && yRange.end > scrollTop) {
            rsult.inYRange = true;
        }
        return rsult;
    }
    callBack = (params) => {
        const { scrolling } = this.ref;
        if (scrolling) {
            scrolling(params);
        }
    }
    scrollHandle = (event) => {
        const { xRange, yRange, direction, free } = this.props.options;
        const scrollTop = event.target.scrollTop;
        const scrollLeft = event.target.scrollLeft;
        const { inXRange, inYRange } = this.isInRange(xRange, yRange, { scrollTop, scrollLeft });
        let canSubmitPosition = false;
        if (free && (inXRange || inYRange)) {
            canSubmitPosition = true;
        } else if (direction === "column" && inYRange) {
            canSubmitPosition = true;
        } else if (direction === "row" && inXRange) {
            canSubmitPosition = true;
        }
        if (canSubmitPosition) {
            this.callBack({
                x: scrollLeft,
                y: scrollTop
            });
        }
    }
    componentWillUnmount() {
        this.scrollDom.removeEventListener("scroll", this.scrollHandle);
    }
    render() {
        const { component, props, ref } = this.props;
        let Component = component;
        return <Component ref={ref} {...props} ref={el => this.ref = el} />
    }
}

const defaultConfig = {
    selector: "",
    interval: 0,
    free: false,//左右滚动都派发position
    direction: "column",//row//滚动方向
    xRange: {
        start: 0,
        end: Number.MAX_SAFE_INTEGER
    },
    yRange: {
        start: 0,
        end: Number.MAX_SAFE_INTEGER
    }
}

/**
 * Component 组件
 * selector dom选择器 不提供默认为window
 * xRange :{start,end:} x 轴的监听范围
 * yRange:{start,end}  y 轴的监听范围
 * 位于区间内才会派发 position
 */
export default (Component, options = defaultConfig) => {
    options = {
        ...defaultConfig,
        ...options,
    }
    return React.forwardRef((props, ref) => <WatchScrollPosition ref={ref} props={props} options={options} component={Component} />);
}