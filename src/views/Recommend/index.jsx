import React from "react";
import Slider from "components/Slider";
import RecommendList from "components/RecommendList";
import Srcoll from "base-ui/Scroll";
import RecommendWraper from "./style";
import { bannerList, recommends } from "./mock";


const Recommend = props => {
    return (
        <RecommendWraper>
            <Srcoll height="50rem">
                <div className="scroll-content">
                    <Slider imgUrls={bannerList}></Slider>
                    <RecommendList recommends={recommends}></RecommendList>
                </div>
            </Srcoll>
        </RecommendWraper>
    );

}
export default React.memo(Recommend);