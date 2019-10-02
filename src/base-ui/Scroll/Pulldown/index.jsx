import React from "react";
import PullDown from '@better-scroll/pull-down';
import propTypes from "prop-types";
import { PulldownTop } from "./style";
import { initMethods, initHooks } from "../utils";
import { RectLoading } from "base-ui/Loading";
import scrollHoc from "../scrollHoc";
const methoeds = [
    "finishPullDown",
    "openPullDown",
    "closePullDown",
    "autoPullDownRefresh"
];
const hooks = [
    "pullingDown"
]

//私有化
const _pullingDownHook = Symbol("_pullingDownHook");
const _bSrollInstance = Symbol("_bSrollInstance")
const _BScroll = Symbol("_BScroll");
class PulldownPlugin extends React.Component {
    isInit = false
    state = {
        pullingdown: true,//下拉中
        loading: false,//数据加载中
    }
    static defaultProps = {
        pullDownRefresh: {
            threshold: 90,
            stop: 40
        },
        pullingDownRender: <span>下拉刷新</span>,
        loadingRender: <RectLoading barColor="#fff" width="30px" className="loading" barSize={5} />,
        completedRender: <span>加载完成</span>

    }
    static propTypes = {
        pullDownRefresh: propTypes.oneOfType([propTypes.bool, propTypes.object]),
        pullingDownRender: propTypes.element,
        loadingRender: propTypes.element,
        completedRender: propTypes.element

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
            const { pullDownRefresh } = newProps;
            this[_bSrollInstance].openPullDown({ ...pullDownRefresh });
            initMethods(methoeds, this, this[_bSrollInstance]);
            initHooks(hooks, this, this[_bSrollInstance], {
                pullingDown: this[_pullingDownHook].bind(this)
            })

        }
    }

    // 下拉加载->加载中->加载完成->下拉刷新
    //privary
    [_pullingDownHook](pm) {
        this.setState(
            {
                pullingdown: false,
                loading: true,
            }
        );
        //下拉钩子会触发该函数
        if (pm instanceof Promise) {
            pm.then(result => {
                this.setState(
                    {
                        pullingdown: false,
                        loading: false,
                    }
                );
                setTimeout(() => {
                    this.finishPullDown();
                    setTimeout(() => {
                        this.setState(
                            {
                                pullingdown: true,
                                loading: false,
                            }
                        );
                    }, 800)
                }, 1000)
            });
        }
    }


    render() {
        const { children, pullDownRefresh } = this.props;
        const {
            pullingDownRender,
            loadingRender,
            completedRender
        } = this.props;
        const { pullingdown, loading } = this.state;
        return <React.Fragment>
            <React.Fragment>
                <PulldownTop {...pullDownRefresh} className="pulldownTop" >
                    {
                        pullingdown ? pullingDownRender : loading ? loadingRender : completedRender
                    }
                </PulldownTop>
                {
                    children
                }
            </React.Fragment>
        </React.Fragment>
    }
}

export default scrollHoc(PulldownPlugin, PullDown);