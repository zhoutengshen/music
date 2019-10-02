import React from "react";
import Pullup from '@better-scroll/pull-up';
import propTypes from "prop-types";
import { PullUpBottom } from "./style";
import { initMethods, initHooks } from "../utils";
import { CubeLoading } from "base-ui/Loading";
import scrollHoc from "../scrollHoc";
const methoeds = [
    "finishPullUp",
    "closePullUp",
];
const hooks = [
    "pullingUp"
]

//私有化
const _pullingUpHook = Symbol("_pullingDownHook");
const _bSrollInstance = Symbol("_bSrollInstance")
const _BScroll = Symbol("_BScroll");

class PullupPlugin extends React.Component {
    isInit = false
    state = {
        loadding: true,
        hasData: true
    }
    static defaultProps = {
        pullUpLoad: {
            threshold: 90,
            stop: 30
        },
        loadingRender: <CubeLoading cubeSize="1.5rem" cubeColor="#999" className="loading" />,
        hasDataRender: <span style={{ color: "#999", fontSize: "1.2rem" }}>加载更多数据</span>,
        noDataRender: <span style={{ color: "#999", fontSize: "1.2rem" }}>暂无更多数据</span>
    }
    static propTypes = {
        pullUpLoad: propTypes.oneOfType([propTypes.bool, propTypes.object]),
        loadingRender: propTypes.element,
        hasDataRender: propTypes.element,
        noDataRender: propTypes.element
    }
    UNSAFE_componentWillReceiveProps(newProps) {
        if (newProps.BScroll && (newProps.bSrollInstance instanceof newProps.BScroll) && !this.isInit) {
            this.isInit = true;
            this.init(newProps);
        }
    }
    init(newProps) {
        const { BScroll, bSrollInstance } = newProps;
        this[_BScroll] = BScroll;
        this[_bSrollInstance] = bSrollInstance;
        if (this[_bSrollInstance] instanceof BScroll) {
            const { pullUpLoad } = newProps;
            this[_bSrollInstance].finishPullUp({ ...pullUpLoad });
            initMethods(methoeds, this, this[_bSrollInstance]);
            initHooks(hooks, this, this[_bSrollInstance], {
                pullingUp: this[_pullingUpHook].bind(this)
            });
        }
    }

    // 上拉加载->加载中->加载完成->上拉刷新
    //privary
    [_pullingUpHook](pm) {
        //下拉钩子会触发该函数
        if (pm instanceof Promise) {
            pm.then(result => {
                if (result) {
                    //还有数据
                    this.setState({
                        loadding: false,
                        hasData: true
                    });
                } else {
                    this.setState({
                        loadding: false,
                        hasData: false
                    });
                };
                setTimeout(() => {
                    this.finishPullUp();
                    this[_bSrollInstance].refresh();
                    this.setState({
                        loadding: true
                    });
                });
            });
        }
    }
    render() {
        const { children, pullUpLoad } = this.props;
        const {
            loadingRender,
            hasDataRender,
            noDataRender
        } = this.props;
        const { loadding, hasData } = this.state;
        return <React.Fragment>
            <React.Fragment>
                {
                    children
                }
                <PullUpBottom {...pullUpLoad} className="pullUpBottom" >
                    {
                        loadding ? loadingRender : hasData ? hasDataRender : noDataRender
                    }
                </PullUpBottom>
            </React.Fragment>
        </React.Fragment>
    }
}

export default scrollHoc(PullupPlugin, Pullup);