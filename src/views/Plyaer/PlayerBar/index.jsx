import React, { memo } from "react";
import { PlayerBarWraper } from "./style";
import PlayBarLyrics from "components/Lyrics/Mini";
import PlayBarCircleProgressBar from "components/ProgressBar/PlayBar"
import { connect } from "react-redux";

const PlayerBar = (props) => {
    let { currentPlayingSong } = props;
    currentPlayingSong = currentPlayingSong.toJS();
    let { picUrl, albumName, artistNames, songAlia, songName } = currentPlayingSong;
    songAlia = songAlia ? ` (${songAlia}) ` : songAlia;
    return <PlayerBarWraper>
        <div className="left">
            <img src={picUrl} alt="" />
        </div>
        <div className="mid">
            <p className="songName">{songName}{songAlia}</p>
            <div className="lyrics">
                <PlayBarLyrics />
            </div>
        </div>
        <div className="right">
            <PlayBarCircleProgressBar strokeWidth={4} trailColor="f4f4f4" />
            <i className="play-list"></i>
        </div>
    </PlayerBarWraper>
}

//Redux 

const mapStateToProps = (state) => {
    const { player } = state;
    console.log(player)
    const currentPlayingSong = player.get("currentPlayingSong");
    return {
        currentPlayingSong: currentPlayingSong
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(memo(PlayerBar))