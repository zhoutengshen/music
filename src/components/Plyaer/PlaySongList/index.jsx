import React, { memo } from "react";
import Scroll from "base-ui/Scroll";
import { PlaySongListItemWraper, PlaySongListWraper, HeaderWraper } from "./style";
const PlaySongListItem = (props) => {
    const { isSelect, song, clickItem } = props;
    let { songName, songAlia, artistNames } = song;
    songAlia = songAlia ? ` (${songAlia}) ` : "";
    artistNames = artistNames ? ` - ${artistNames}` : "";
    return <PlaySongListItemWraper onClick={clickItem}>
        <i className={isSelect ? 'iconfont iconlaba isSelect' : 'hiddent'}></i>
        <p>
            <span className={isSelect ? 'songName isSelect' : 'songName'}>{songName + songAlia}</span>
            <span className={isSelect ? 'artistNames isSelect' : 'artistNames'}>{artistNames}</span>
        </p>
        <i className="iconfont"></i>
    </PlaySongListItemWraper>
}


//优化，指定id 不同 才更新
const MemoPlaySongListItem = memo(PlaySongListItem, (preProps, nextProps) => preProps.song.songId === nextProps.song.songId && nextProps.isSelect === preProps.isSelect);
const PlaySongList = (props) => {
    const { clickItem } = props;
    let { playList, currentPlayingSongId, showList } = props;
    playList = playList.toJS();
    return <PlaySongListWraper style={{ overflow: 'auto', display: showList ? '' : 'none' }}>
        <Scroll height="65vh">
            <HeaderWraper>
                <section className="left">
                    <i className="iconfont iconloop"></i>
                    <span className="disc">循环列表({playList.length})</span>
                </section>
                <section className="right">
                    <i className="iconfont iconshoucang"></i>
                    <span className="disc">全部收藏</span>
                    <i className="iconfont icondelete"></i>
                </section>
            </HeaderWraper>
            <Scroll height="calc(65vh - 4rem)" bounce={false}>
                {
                    playList.map(song => <MemoPlaySongListItem key={song.songId} clickItem={() => { clickItem(song) }} song={song} isSelect={song.songId === currentPlayingSongId} />)
                }
            </Scroll>
        </Scroll>
    </PlaySongListWraper>
}
export default PlaySongList;


