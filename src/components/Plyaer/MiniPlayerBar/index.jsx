import React, { memo } from "react";
import { PlayerBarWraper } from "./style";
import PlayBarLyrics from "components/Lyrics/Mini";
import PlaySongList from "components/Popover/PlaySongList";
const PlayerBar = (props) => {
    const { onShowList, onFullScreen, onPause } = props;
    let { picUrl, songAlia, songName, fullScreen, children } = props;
    let isShowBar = picUrl && songName;
    songAlia = songAlia ? ` (${songAlia}) ` : songAlia;
    return isShowBar ? <PlayerBarWraper style={{ display: fullScreen ? 'none' : '' }}>
        <div className="left" onClick={onFullScreen}>
            <img src={picUrl} alt="" />
        </div>
        <div className="mid" onClick={onFullScreen}>
            <p className="songName">{songName}{songAlia}</p>
            <div className="lyrics">
                <PlayBarLyrics />
            </div>
        </div>
        <div className="right" >
            {
                children
            }
            <i className="play-list iconfont iconplay-list" onClick={onShowList}></i>
        </div>
        <PlaySongList />
    </PlayerBarWraper> : null;
}

export default memo(PlayerBar);