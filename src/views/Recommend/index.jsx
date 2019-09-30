import React from "react";
import Slider from "components/Slider";
import RecommendList from "components/RecommendList";
import Srcoll from "base-ui/Scroll";
import RecommendWraper from "./style";
import { bannerList, recommends } from "./mock";
import Pulldown from "base-ui/Scroll/Pulldown";

const Recommend = props => {
    const onPullingDown = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(true);
            }, 1000);
        });
    }
    return (
        <RecommendWraper>
            <Srcoll height="100%" probeType={2}>
                <Pulldown onPullingDown={onPullingDown}>
                    <Slider imgUrls={bannerList}></Slider>
                    <RecommendList recommends={recommends}></RecommendList>
                </Pulldown>
            </Srcoll>
        </RecommendWraper >
    );

}
export default React.memo(Recommend);