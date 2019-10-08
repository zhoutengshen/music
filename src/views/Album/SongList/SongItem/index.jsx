import React, { memo } from "react";
import { ItemWraper } from "./style";
const MusicItem = (props) => {
    const { isPlaying, index, songName, songAlia, songId, artistNames, albumName } = props;
    console.log(props);
    return <ItemWraper>
        <div className="left">
            {
                isPlaying ? <i className="iconfont" /> : <span>{index}</span>
            }
        </div>
        <div className="mid">
            <p className="songName">
                <span>{songName}</span>
                <span>{songAlia}</span>
            </p>
            <p className="artistNames">
                <span>{artistNames}</span>
                <span>{albumName}</span>
            </p>
        </div>
        <div className="right"></div>
    </ItemWraper>
}
export default memo(MusicItem);