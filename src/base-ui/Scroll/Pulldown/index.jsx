import React from "react";
import PullDown from '@better-scroll/pull-down';
import propTypes from "prop-types";
import { PulldownTop } from "./style";
import { initMethods, initHooks } from "../utils";
import { scrollConsumer as ScrollConsumer } from "../context";


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
export default class Pulldown extends React.Component {
    state = {
        pullingdown: true,//下拉中
        loading: false,//数据加载中
    }
    static defaultProps = {
        pullDownRefresh: {
            threshold: 90,
            stop: 40
        }
    }
    static propTypes = {
        pullDownRefresh: propTypes.oneOfType([propTypes.bool, propTypes.object])
    }
    installPlugin(BScroll, bSrollInstance) {
        if (BScroll !== this.BScroll) {
            this.BScroll = BScroll;
            this.BScroll.use(PullDown);
        }

        if (bSrollInstance !== this[_bSrollInstance]) {
            this[_bSrollInstance] = bSrollInstance;
        }
        if (this[_bSrollInstance] instanceof BScroll) {
            const { pullDownRefresh } = this.props;
            this[_bSrollInstance].openPullDown({ ...pullDownRefresh });
            initMethods(methoeds, this, this[_bSrollInstance]);
            initHooks(hooks, this, this[_bSrollInstance], {
                pullingDown: this[_pullingDownHook].bind(this)
            })
        }
    }
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
        const { children } = this.props;
        const { pullingdown, loading } = this.state;
        return <React.Fragment>
            <ScrollConsumer>
                {({ BScroll, bSrollInstance }) => {
                    this.installPlugin(BScroll, bSrollInstance);
                    return null;
                }}
            </ScrollConsumer>
            <React.Fragment>
                <PulldownTop className="pulldownTop">
                    {
                        pullingdown ? "下拉刷新" : loading ? "加载数据..." : "加载完成"
                    }
                </PulldownTop>
                {
                    children
                }
            </React.Fragment>
        </React.Fragment>
    }
} 