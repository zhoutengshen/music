import React, { memo } from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import ReactList from "react-list";
import playerStore from "components/Plyaer/store";
import Modal from "base-ui/Modal";
import { PlaySongListItemWraper, PlaySongListWraper, HeaderWraper } from "./style";
const PlaySongListItem = (props) => {
    const { isSelect, song, changeSongAction } = props;
    let { songName, songAlia, artistNames } = song;
    songAlia = songAlia ? ` (${songAlia}) ` : "";
    artistNames = artistNames ? ` - ${artistNames}` : "";
    return <PlaySongListItemWraper onClick={(event) => { changeSongAction({ song }); event.preventDefault(); event.stopPropagation(); }}>
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
const modalRef = React.createRef();
const PlaySongList = (props) => {
    const { showPlayList } = props;
    const { changeSongAction, hiddenPlayListAction } = props;
    let { playList, currentPlayingSong } = props;
    playList = playList.toJS();
    currentPlayingSong = currentPlayingSong.toJS();
    return <Modal style={{ background: 'rgba(0,0,0,0.5)', display: 'none' }} onClick={hiddenPlayListAction} ref={modalRef}>
        <CSSTransition
            timeout={200}
            appear={true}
            in={showPlayList}
            classNames="bottom-pop"
            onEnter={() => { modalRef.current.style.display = 'block' }}
            onExited={() => { modalRef.current.style.display = 'none' }}
        >
            <PlaySongListWraper style={{ overflow: 'auto' }}>
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
                        return <MemoPlaySongListItem key={song.songId} changeSongAction={changeSongAction} song={song} isSelect={song.songId === currentPlayingSong.songId} />
                    }}
                    length={playList.length}
                >
                </ReactList>
            </PlaySongListWraper>
        </CSSTransition>
    </Modal >
}
//Default 
PlaySongList.defaultProps = {
    hidden: true
}
//Redux

const mapStatusToProps = (state) => {
    const { player } = state;
    const playList = player.get("playList");
    const currentPlayingSong = player.get("currentPlayingSong");
    const showPlayList = player.get("showPlayList");
    return {
        playList,
        currentPlayingSong,
        showPlayList
    }
};
const mapDispatchToProps = (dispatch) => {
    const { actions } = playerStore;
    return {
        changeSongAction({ song }) {
            dispatch(actions.changeSongAction({ song }));
        },
        hiddenPlayListAction() {
            dispatch(actions.showPlayListAction(false));
        }
    }
}
export default connect(mapStatusToProps, mapDispatchToProps)(PlaySongList);


