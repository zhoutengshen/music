import React, { memo } from "react";
import { HeaderWraper } from "./style";
import { unitConver } from "utils"
const Header = React.forwardRef((props, ref) => {
    let { coverImgUrl, name, playCount, nickname, avatarUrl, signature = "" } = props;
    signature = signature.length > 16 ? signature.slice(0, 16).concat("...") : signature;
    return <HeaderWraper ref={ref}>
        <div className="album-cover">
            <img className="cover-img" src={coverImgUrl} alt="封面" />
            <span className="play-count">
                <span className="icon iconfont iconerji"></span>
                {unitConver(playCount, 1)}
            </span>
        </div>
        <div className="desc">
            <h3 className="name">{name}</h3>
            <div className="creator-info">
                <img className="avatar" src={avatarUrl} alt="" />
                <span className="nickname">{nickname}</span>
                <i className="iconfont iconright"></i>
            </div>
            <div className="signature">
                <p>{signature}</p>
                <i className="iconfont iconright"></i>
            </div>
        </div>
    </HeaderWraper>
});
export default memo(Header)