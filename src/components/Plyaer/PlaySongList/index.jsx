import React, { memo } from "react";
import ReactList from "react-list";
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
        {/* 无限滚动方案 */}
        <ReactList
            type="uniform"
            itemRenderer={(index) => {
                const song = playList[index];
                // clickItem 每次都会接受一个新的函数，但是由于memo指定了更新策略，MemoPlaySongListItem不会受clickItem函数的影响
                return <MemoPlaySongListItem key={song.songId} clickItem={() => { clickItem(song) }} song={song} isSelect={song.songId === currentPlayingSongId} />
            }}
            length={playList.length}
        >
        </ReactList>
    </PlaySongListWraper>
}
export default PlaySongList;


