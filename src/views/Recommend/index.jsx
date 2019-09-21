import React from "react";
import Slider from "components/Slider";

// mock数据
const bannerList = [
    "http://p1.music.126.net/gc4jzp-V47fMSe6bscPz-g==/109951164374385649.jpg",
    "http://p1.music.126.net/z8IWO16Jf9CkN8pXBHxdfQ==/109951164374401115.jpg",
    "http://p1.music.126.net/LPiWGU-gMQU4ZUQJUSNkGA==/109951164375631909.jpg",
    "http://p1.music.126.net/LPiWGU-gMQU4ZUQJUSNkGA==/109951164375631909.jpg"
];
const Recommend = props => {
    return (
        <div>
            <Slider imgUrls={bannerList}></Slider>
        </div>
    );

}
export default React.memo(Recommend);