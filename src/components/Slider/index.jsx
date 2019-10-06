import React from "react";
import Swiper from "swiper";
import propTypes from "prop-types";
import { SliderContainer } from "./style";
class Slider extends React.PureComponent {
    static defaultProps = {
        banners: []
    }
    componentDidMount() {
        const { swiperContainer, swiperPagination } = this;
        this.swiper = new Swiper(swiperContainer, {
            autoplay: {
                disableOnInteraction: false,
            },
            loop: true,
            observer: true,
            pagination: {
                el: swiperPagination,
            },
        });
    }

    render() {
        const { banners } = this.props;
        return (
            <SliderContainer>
                <div className="swiper-container" ref={(el) => this.swiperContainer = el}>
                    <div className="swiper-wrapper">
                        {
                            banners.map((banner, index) => (<img style={{ width: '100%', height: '100%' }} src={banner.imageUrl} key={index} alt={banner.typeTitle} className="swiper-slide" />))
                        }
                    </div>
                    <div className="swiper-pagination" ref={el => this.swiperPagination = el}></div>
                </div>
            </SliderContainer>
        )
    }
}
Slider.propTypes = {
    banners: propTypes.array.isRequired
}
export default Slider;