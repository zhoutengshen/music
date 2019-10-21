import styled from "styled-components";
import React, { memo } from "react";
import { PLAY_MODE } from "../constants";

const NormalPlayBarWraper = styled.div`
    position:relative;
    height:10rem;
    .progress-bar{
        height:4rem;
        padding: 0 1.6rem;
    }
    .player-bar{
        display:flex;
        height:6rem;
        box-sizing: border-box;
        padding-bottom: 2rem;
        align-items: center;
        justify-content: space-around;
        i{
            font-size:2.5rem;
            color:#fff;
        }
        .icon-mode{
            font-size: 4rem;
            display:inline-block;
            width:4.1rem;
        }
        .iconbofang,.iconpause{
            font-size:5rem;
            margin:0 3.6rem;
        }
        .icondanquxunhuan{
            font-size:2.5rem;
            text-align: center;
            width:4.1rem;
        }
        .mid{
            display:flex;
            align-items: center;
        }
    }
`;

const getModeClassName = (playMode) => {
    switch (playMode) {
        case PLAY_MODE.listLoop:
            return "iconwuxian";
        case PLAY_MODE.random:
            return "iconshuijibofang";
        case PLAY_MODE.singleLoop:
            return "icondanquxunhuan";
        default:
            return "iconloop";
    }
}

export default memo((props) => {
    const { onNext, onPrevious, onModeChange, onPlayStatusChange, onShowPlayList, playStatus, playMode } = props;
    let modeClass = getModeClassName(playMode);

    const { children } = props;
    return <NormalPlayBarWraper>
        <div className="progress-bar">
            {
                children
            }
        </div>
        <div className="player-bar">
            <div className="left">
                <i className={"iconfont icon-mode " + modeClass} onClick={onModeChange}></i>
            </div>
            <div className="mid">
                <i className="iconfont iconshangyiqu101" onClick={onPrevious}></i>
                <i className={"iconfont " + (playStatus ? 'iconpause' : 'iconbofang')} onClick={onPlayStatusChange}></i>
                <i className="iconfont iconxiayiqu101" onClick={onNext}></i>
            </div>
            <div className="right">
                <i className="iconfont iconplay-list" onClick={onShowPlayList}></i>
            </div>
        </div>
    </NormalPlayBarWraper >

});