/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo } from "react";
import { ToolBarWraper } from "./style";
const ToolBar = (props) => {
    const { commentCount, shareCount } = props;
    return <ToolBarWraper>
        <li><a href="#"><i className="iconfont iconxiaoxi"></i><span>{commentCount}</span></a></li>
        <li><a href="#"><i className="iconfont iconshare"></i><span>{shareCount}</span></a></li>
        <li><a href="#"><i className="iconfont icondownload"></i><span>下载</span></a></li>
        <li><a href="#"><i className="iconfont iconduoxuan"></i><span>多选</span></a></li>
    </ToolBarWraper>
}
export default memo(ToolBar);
