import React, { memo } from "react";
import { PlayerBarWraper } from "./style";
import { connect } from "react-redux";

const PlayerBar = (props) => {
    const { song } = props;
    console.log(song);
    return <PlayerBarWraper>
        <div className="left">

        </div>
        <div className="mid">

        </div>
        <div className="right">
            <i className="progress"></i>
            <i className="play-list"></i>
        </div>
    </PlayerBarWraper>
}

//Redux 

const mapStateToProps = (state) => {
    const { player } = state;
    const song = player.get("song");
    return {
        song
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(memo(PlayerBar))