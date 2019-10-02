import React from "react";
import propTypes from "prop-types";
import { Rect, Cube } from "./style";

const RectLoadingC = (props) => {
    return <Rect {...props}>
        {
            Array.from(new Array(props.barSize || 5)).map((item, index) => index * 0.1).map((item, index) => <div key={index} style={{ animationDelay: -0.8 + item + 's' }} />)
        }
    </Rect >
};
RectLoadingC.propTypes = {
    style: propTypes.object,
    barSize: propTypes.number,
    width: propTypes.string,
    height: propTypes.string,
    barColor: propTypes.string
}
export const RectLoading = RectLoadingC;

export const CubeLoading = (props) => {
    return <Cube {...props}>
        {
            Array.from(new Array(props.barSize || 2)).map((item, index) => index * 0.9).map((item, index) => <div key={index} style={{ animationDelay: -item + 's' }} />)
        }
    </Cube >
}

CubeLoading.propTypes = {
    style: propTypes.object,
    cubeSize: propTypes.string,
    cubeColor: propTypes.string
}