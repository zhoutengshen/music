// 参考 https://github.com/soluteli/react-bscroll.git
// https://better-scroll.github.io
import React from "react";
import propTypes from "prop-types";
import betterScroll from "@better-scroll/core";

export default class BSroll extends React.Component {
    //组件的默认属性值
    static defaultProps = {
        startX: 0,//x轴初始滚动方向
        startY: 0,//y轴初始滚动方向
        scrollX: false,//是否开启横向滚动
        scrollY: true,//是否开启纵向滚动
        freeScroll: false,//是否可以同时横向和纵向滚动
        directionLockThreshold: 5,//在某个方向滚动的阈值
        eventPassthrough: "",//设置保留原生滚动的方向
        click: false,//是否可以点击
        dblclick: false,//是否可以双击
        tap: "",
        bounce: {//是否开启回弹效果
            left: true,
            right: true,
            bottom: true,
            top: true,
        },
        bounceTime: 800,//回弹动画时长
        momentum: true,
        momentumLimitTime: true,
        momentumLimitDistance: true,
        swipeTime: 2500,
        swipeBounceTime: true,
        deceleration: 0.0015,
        flickLimitTime: 200,//轻抚动作时长判断 ms
        flickLimitDistance: 100,//轻抚距离判断 px
        resizePolling: 60,//窗口大小发生变化重新计算的延时
        probeType: 0,//是否派发滚动事件，可选值 ：0 1 2 3；有时候我们需要知道滚动的位置。当 probeType 为 1 的时候，会非实时（屏幕滑动超过一定时间后）派发scroll 事件；当 probeType 为 2 的时候，会在屏幕滑动的过程中实时的派发 scroll 事件；当 probeType 为 3 的时候，不仅在屏幕滑动的过程中，而且在 momentum 滚动动画运行过程中实时派发 scroll 事件。如果没有设置该值，其默认值为 0，即不派发 scroll 事件。
        preventDefault: true,//是否阻止默认滚动事件
        preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|AUDIO)$/ },//指定哪些元素的滚动行为不会被阻止
        HWCompositing: true,//是否开启硬件加速
        useTransition: true,//是否使用css 动画
        bindToWrapper: false,//是否把move事件绑定到容器上面，true -》手指离开屏幕 立刻停止滚动
        // disableMouse:
        autoBlur: true,//发生滚动自动失去焦点
        stopPropagation: false//是否阻止事件冒泡

    }
    //属性约束
    static propTypes = {
        height: propTypes.oneOfType([propTypes.number.isRequired, propTypes.string.isRequired]),
        startX: propTypes.number,
        startY: propTypes.number,
        scrollX: propTypes.bool,
        scrollY: propTypes.bool,
        freeScroll: propTypes.bool,
        directionLockThreshold: propTypes.number,
        eventPassthrough: propTypes.oneOf(["vertical", "horizontal", ""]),
        click: propTypes.bool,
        dblclick: propTypes.bool,
        tap: propTypes.oneOf(["tap", ""]),
        bounce: propTypes.oneOfType([propTypes.bool, propTypes.object]),
        bounceTime: propTypes.number,
        momentum: propTypes.bool,
        momentumLimitTime: propTypes.bool,
        momentumLimitDistance: propTypes.bool,
        swipeTime: propTypes.number,
        swipeBounceTime: propTypes.bool,
        deceleration: propTypes.number,
        flickLimitTime: propTypes.number,
        flickLimitDistance: propTypes.number,
        resizePolling: propTypes.number,
        probeType: propTypes.oneOf([0, 1, 2, 3]),
        preventDefault: propTypes.bool,
        preventDefaultException: propTypes.object,
        HWCompositing: propTypes.bool,
        useTransition: propTypes.bool,
        bindToWrapper: propTypes.bool,
        autoBlur: propTypes.bool,
        stopPropagation: propTypes.bool,
    }
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const { srcollDom } = this;
        this.bSroll = new betterScroll(srcollDom, {
            ...this.props
        });
    }
    initEvent() {
    }
    initProps() { }
    render() {
        const { children, height, className, style } = this.props;
        return (
            <div style={{ height: height, ...style, overflow: "hidden" }} class={["scroll-wrapper", className]} ref={el => this.srcollDom = el} >
                <div class="scroll-content">
                    {children}
                </div>
            </div>);
    }
}
