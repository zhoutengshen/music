import React from "react";
import propTypes from "prop-types";
class Slider extends React.Component {
    static defaultProps = {
        imgUrls: []
    }
    constructor(props) {
        super(props);
    }
    render() {
        const { imgUrls } = this.props;

        return (
            imgUrls.map((imgUrl, index) => (<img src={imgUrl} key={index} alt="轮播" />))
        )
    }
}
Slider.propTypes = {
    imgUrls: propTypes.array.isRequired
}
export default Slider;