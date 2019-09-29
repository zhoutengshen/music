import React from "react";
import Slider from "components/Slider";
import RecommendList from "components/RecommendList";
import Srcoll from "base-ui/Scroll";
import RecommendWraper from "./style";
import { bannerList, recommends } from "./mock";
import Pulldown from "base-ui/Scroll/Pulldown";

const Recommend = props => {
    return (
        <RecommendWraper>
            <Srcoll height="100%" probeType={2}>
                <div className="scroll-content">
                    <Pulldown></Pulldown>
                    <Slider imgUrls={bannerList}></Slider>
                    <RecommendList recommends={recommends}></RecommendList>
                </div>
                <div></div>
            </Srcoll>
        </RecommendWraper >
    );

}
export default React.memo(Recommend);