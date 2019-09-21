import React from "react";
import Slider from "components/Slider";
import RecommendList from "components/RecommendList";
import RecommendWraper from "./style";
import { bannerList, recommends } from "./mock";
const Recommend = props => {
    return (
        <RecommendWraper>
            <Slider imgUrls={bannerList}></Slider>
            <RecommendList recommends={recommends}></RecommendList>
        </RecommendWraper>
    );

}
export default React.memo(Recommend);