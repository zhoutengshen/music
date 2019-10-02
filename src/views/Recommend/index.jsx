import React from "react";
import Slider from "components/Slider";
import RecommendList from "components/RecommendList";
import Srcoll from "base-ui/Scroll";
import RecommendWraper from "./style";
import { bannerList, recommends } from "./mock";
import PulldownPlugin from "base-ui/Scroll/Pulldown";
import PullupPlugin from "base-ui/Scroll/Pullup";
import { ramdomStr } from "utils";

class Recommend extends React.Component {
    state = {
        recommends: recommends
    }
    onPullingDown = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(true);
            }, 4000);
        });
    }
    onPullingUp = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.setState((state) => {
                    const { recommends } = state;
                    const count = Math.random(0, 1) * recommends.length | 0;
                    const newArr = recommends.map(item => ({ ...item, id: ramdomStr(11) })).slice(0, count);
                    return {
                        recommends: [...recommends, ...newArr]
                    }
                });
                resolve(true);
            }, 1500)
        });
    }
    render() {
        const { onPullingDown, onPullingUp } = this;
        const { recommends } = this.state;
        console.log(recommends.length)
        return (
            <RecommendWraper>
                <Srcoll height="100%" probeType={2}>
                    <PullupPlugin ref={el => this.pullupDom = el} onPullingUp={onPullingUp} pullUpLoad={true}>
                        <PulldownPlugin ref={el => this.pulldownDom = el} onPullingDown={onPullingDown} pullDownRefresh={{ hreshold: 90, stop: 40 }}>
                            <Slider imgUrls={bannerList}></Slider>
                            <RecommendList recommends={recommends}></RecommendList>
                        </PulldownPlugin>
                    </PullupPlugin>
                </Srcoll>
            </RecommendWraper >
        );
    }
}
export default React.memo(Recommend);