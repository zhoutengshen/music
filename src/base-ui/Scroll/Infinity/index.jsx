import React from "react";
import InfinityScroll from '@better-scroll/infinity'
import propTypes from "prop-types";
import scrollHoc from "../scrollHoc";
class Infinity extends React.Component {
    isInit = false
    static defaultProps = {
    }
    static propTypes = {

    }
    render() {
        const { children } = this.props;
        return <React.Fragment>
            <React.Fragment>
                {
                    children
                }
            </React.Fragment>
        </React.Fragment>
    }
}

export default scrollHoc(Infinity, InfinityScroll);