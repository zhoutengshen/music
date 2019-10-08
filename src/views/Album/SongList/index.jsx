import React from "react";
import { ListWraper } from "./style";
import SongItem from "./SongItem";
export default class SongList extends React.PureComponent {
    render() {
        const { tracks } = this.props;
        const songsInfo = tracks.map(song => {
            const songId = song.songId;
            const songName = song.name;
            const artistNames = song.ar.reduce((preItem, nextItem) => preItem.concat(nextItem.name), "/").slice(1);
            const albumName = song.al.name || "";
            const songAlia = song.alia.reduce((preItem, nextItem) => preItem.concat(nextItem), ",").slice(1);
            return {
                songId, songName, artistNames, albumName, songAlia
            }
        });
        return <ListWraper>
            {
                songsInfo.map((songInfo = {}, index) => <SongItem {...songInfo} index={index} key={songInfo.id} />)
            }
        </ListWraper>
    }
}
