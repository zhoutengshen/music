import React from "react";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import propTypes from "prop-types";
import { SliderContainer } from "./style";
class Slider extends React.Component {
    static defaultProps = {
        imgUrls: []
    }
    componentDidMount() {
        //不要绑定.swiper-container,避免在一个页面内使用多个Slider时产生bug
        const { swiperContainer, swiperPagination } = this;
        this.swiper = new Swiper(swiperContainer, {
            autoplay: {
                disableOnInteraction: false,
            },//可选选项，自动滑动
            loop: true,
            loopAdditionalSlides: 3,
            pagination: {
                el: swiperPagination,
            },
        });
    }
    constructor(props) {
        super(props);
    }
    render() {
        const { imgUrls } = this.props;
        return (
            <SliderContainer>
                <div className="swiper-container" ref={(el) => this.swiperContainer = el}>
                    <div className="swiper-wrapper">
                        {
                            imgUrls.map((imgUrl, index) => (<img style={{ width: '100%', height: '100%' }} src={imgUrl} key={index} alt="轮播" className="swiper-slide" />))
                        }
                    </div>
                    <div className="swiper-pagination" ref={el => this.swiperPagination = el}></div>
                </div>
            </SliderContainer>
        )
    }
}
Slider.propTypes = {
    imgUrls: propTypes.array.isRequired
}
export default Slider;