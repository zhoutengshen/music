import React, { memo } from "react";
import { PlayerBarWraper } from "./style";
import PlayBarLyrics from "components/Lyrics/Mini";
import PlayBarCircleProgressBar from "components/ProgressBar/PlayBar";
import PlaySongList from "components/Popover/PlaySongList";
const PlayerBar = (props) => {
    let { picUrl, songAlia, songName } = props;
    let isShowBar = picUrl && songName;
    songAlia = songAlia ? ` (${songAlia}) ` : songAlia;
    return isShowBar ? <PlayerBarWraper>
        <div className="left">
            <img src={picUrl} alt="" />
        </div>
        <div className="mid" >
            <p className="songName">{songName}{songAlia}</p>
            <div className="lyrics">
                <PlayBarLyrics />
            </div>
        </div>
        <div className="right">
            <PlayBarCircleProgressBar />
            <i className="play-list iconfont iconplay-list"></i>
        </div>
        <PlaySongList />
    </PlayerBarWraper> : null;
}

export default memo(PlayerBar);