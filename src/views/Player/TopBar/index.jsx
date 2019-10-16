/* eslint-disable jsx-a11y/no-distracting-elements */
import React, { memo } from "react";
import { TopBarWraper } from "./style";
const TopBar = React.forwardRef((props, ref) => {
    const { artistNames, onBack, songName } = props;
    return <TopBarWraper ref={ref}>
        <div className="left" onClick={onBack}>
            <i className="iconfont iconleft"></i>
        </div>
        <div className="mid">
            <h3 className="title">{songName}</h3>
            <p className="description">{artistNames}</p>
        </div>
        <div className="right">
            <i className="iconfont iconmore"></i>
        </div>
    </TopBarWraper>
});
export default memo(TopBar);