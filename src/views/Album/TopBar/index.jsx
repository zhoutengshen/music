/* eslint-disable jsx-a11y/no-distracting-elements */
import React, { memo } from "react";
import { TopBarWraper } from "./style";
const Header = React.forwardRef((props, ref) => {
    const { description, onBack } = props;
    return <TopBarWraper ref={ref}>
        <div className="left" onClick={onBack}>
            <i className="iconfont iconleft"></i>
        </div>
        <div className="mid">
            <h3 className="title">歌单</h3>
            <marquee className="description"><p >{description}</p></marquee>
        </div>
        <div className="right">
            <i className="iconfont iconsearch"></i>
            <i className="iconfont iconmore"></i>
        </div>
    </TopBarWraper>
});
export default memo(Header);