// 参考 https://github.com/soluteli/react-bscroll.git
// https://better-scroll.github.io/docs/en-US/
import React from "react";
import propTypes from "prop-types";
import betterScroll from "@better-scroll/core";
import { initHooks, initMethods } from "./utils";
import { scrollProvider as ScrollPlugins } from "./context";//Provider-Consumer组件设计模式

const options = {
    startX: 0,//x轴初始滚动方向
    startY: 0,//y轴初始滚动方向
    scrollX: false,//是否开启横向滚动
    scrollY: true,//是否开启纵向滚动
    freeScroll: false,//是否可以同时横向和纵向滚动
    directionLockThreshold: 5,//在某个方向滚动的阈值
    click: false,//是否可以点击
    dblclick: false,//是否可以双击
    bounce: {//是否开启回弹效果
        left: true,
        right: true,
        bottom: true,
        top: true,
    },
    bounceTime: 800,//回弹动画时长
    momentum: true,
    momentumLimitTime: 300,
    momentumLimitDistance: 15,
    swipeTime: 2500,
    swipeBounceTime: 500,
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
    autoBlur: true,//发生滚动自动失去焦点
    stopPropagation: false//是否阻止事件冒泡
};

//方法
const methods = [
    "refresh",
    "scrollTo",
    "scrollBy",
    "scrollToElement",
    "stop",
    "enable",
    "disable",
    "destroy",
    "on",
    "once",
    "off",
];
//钩子函数
const hooks = [
    "beforeScrollStart",
    "scrollStart",
    "scroll",
    "scrollCancel",
    "scrollEnd",
    "touchEnd",
    "flick",
    "refresh",
    "disable",
    "enable",
    "destroy"
]


class BSroll extends React.PureComponent {
    //组件的默认属性值
    static defaultProps = {
        //配置选项
        ...options
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
        momentumLimitTime: propTypes.number,
        momentumLimitDistance: propTypes.number,
        swipeTime: propTypes.number,
        swipeBounceTime: propTypes.number,
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
        //钩子
        ...hooks.reduce((pre, next) => {
            //首字母大写
            const name = next.slice(0, 1).toUpperCase() + next.slice(1);
            pre['on' + name] = propTypes.func;
            return pre
        }, {})
    }
    state = {
        bSroll: {},
        betterScroll: betterScroll,
        pluginOptions: {}
    }
    componentDidMount() {
        console.log("INIT BSroll");
        const { pluginOptions } = this.state;
        const { srcollDom, props } = this;
        console.log(props.bounce)
        const bSroll = new betterScroll(srcollDom, {
            ...props,
            ...pluginOptions,
        });
        this.setState({
            bSroll: bSroll
        });
        initMethods(methods, this, bSroll);
        initHooks(hooks, this, bSroll);
    }
    componentWillUnmount() {
        this.destroy();
        console.log("componentWillUnmount")
    }
    render() {
        const { children, height, className, style } = this.props;
        const { bSroll, betterScroll, pluginOptions } = this.state;
        return (
            <div style={{ height: height, ...style, overflow: "hidden", position: "relative" }} className={["scroll-wrapper", className]} ref={el => this.srcollDom = el} >
                <div className="scroll-content">
                    {/*  注意事项 详细请看 https://zh-hans.reactjs.org/docs/context.html#contextprovider 注意事项 */}
                    <ScrollPlugins value={{ pluginOptions, BScroll: betterScroll, bSrollInstance: bSroll }}>
                        {children}
                    </ScrollPlugins>
                </div>
            </div>
        );
    }
}
export default BSroll;
