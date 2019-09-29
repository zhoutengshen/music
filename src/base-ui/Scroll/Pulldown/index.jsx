import React from "react";
import PullDown from '@better-scroll/pull-down';
import propTypes from "prop-types";
import { scrollConsumer as ScrollConsumer } from "../context";


export default class Pulldown extends React.Component {
    static defaultProps = {
        threshold: 90,
        stop: 40
    }
    static propTypes = {
        threshold: propTypes.number,
        stop: propTypes.number
    }
    componentDidMount() {
        this.BScroll = undefined;
        this.bSrollInstance = undefined;
    }
    installPlugin(BScroll, bSrollInstance) {
        if (BScroll !== this.BScroll) {
            this.BScroll = BScroll;
            this.BScroll.use(PullDown);
        }
        if (bSrollInstance !== this.bSrollInstance) {
            this.bSrollInstance = bSrollInstance;
        }
    }
    render() {
        return <React.Fragment>
            <ScrollConsumer>
                {({ BScroll, bSrollInstance }) => {
                    this.installPlugin(BScroll, bSrollInstance);
                    return null;
                }}
            </ScrollConsumer>
            <div>
                haha
            </div>
        </React.Fragment>
    }
} 