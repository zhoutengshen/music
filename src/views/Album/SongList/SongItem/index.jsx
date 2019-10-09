import React, { memo } from "react";
import { ItemWraper } from "./style";
const MusicItem = (props) => {
    const { isPlaying, index, songName, songAlia, artistNames, albumName } = props;
    console.log(">>>>>")
    return <ItemWraper>
        {
            isPlaying ? <i className="iconfont iconlaba left" /> : <span className="left">{index}</span>
        }
        <div className="mid">
            <p >
                <span className="songName">{songName}</span>
                <span className="songAlia">{songAlia ? '（' + songAlia + '）' : ''}</span>
            </p>
            <p >
                <span className="artistNames">{artistNames}</span>
                <span className="albumName">{" - "}{albumName}</span>
            </p>
        </div>
        <div className="right">
            <i className="iconfont iconplayer"></i>
            <i className="iconfont iconmore"></i>
        </div>
    </ItemWraper>
}
export default memo(MusicItem);