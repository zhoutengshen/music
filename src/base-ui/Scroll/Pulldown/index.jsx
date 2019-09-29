import React from "react";
import PullDown from '@better-scroll/pull-down';
import { scrollConsumer as ScrollConsumer } from "../context";


export default class Pulldown extends React.Component {
    componentDidMount() {
        this.BScroll = {};
        this.bSrollInstance = {};
    }
    render() {
        return <React.Fragment>
            <ScrollConsumer>
                {({ BSroll, bSrollInstance }) => {
                    console.log(bSrollInstance);
                    return '';
                }}
            </ScrollConsumer>
        </React.Fragment>
    }
} 