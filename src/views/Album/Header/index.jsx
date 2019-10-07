import React from "react";
import { HeaderWraper } from "./style";
export default (props) => {
    const { description } = props;
    return <HeaderWraper>
        <div className="left">
            <i className="iconfont iconleft"></i>
        </div>
        <div className="mid">
            <h3 className="title">歌单</h3>
            <p className="description">{description}</p>
        </div>
        <div className="right">
            <i className="iconfont iconsearch"></i>
            <i className="iconfont iconmore"></i>
        </div>
    </HeaderWraper>
}