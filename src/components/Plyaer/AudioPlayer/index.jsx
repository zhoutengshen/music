import React from "react";
const PLAY_MODE = {
    normal: "normal",
    listLoop: "listLoop",
    random: "random",
    singleLoop: "singleLoop"
}

const options = {
    mode: "normal",//loop,random
    muted: false,
    preload: false,

}
const hooks = [

];
const methods = [
]
class AudioPlayer extends React.PureComponent {
    static defaultProps = {
        mode: "normal"//播放模式
    }
    //播放列表
    playList = []
    //当前播放索引
    currentPlayingSong = {}
    audioRef = React.createRef()
    play = () => {
        const song = this.playList.find(song => song.songId === this.currentPlayingSong.songId);
        if (song) {
            this.currentPlayingSong = song
            const { mp3Info } = this.currentPlayingSong;
            const { url } = mp3Info;
            if (!url) {
                return;
            }
            const { current } = this.audioRef;
            if (current.src !== url) {
                current.pause();
                current.src = url;
            }
            current.play();
            return true;
        } else {
            return false;
        }
    }
    //isAuto为自动播放切换下一曲
    next = (isAuto = true) => {
        const currentIndex = this.playList.findIndex(song => song.songId === this.currentPlayingSong.songId);
        const { mode, changeSongAction } = this.props;
        //不是列表循环，且为最后一首歌
        if (currentIndex >= 0 && mode !== PLAY_MODE.listLoop && (currentIndex + 1 === this.playList.length)) {
            return false;
        }
        let nextIndex = 0;
        if (mode === PLAY_MODE.listLoop) {
            //列表循环
            nextIndex = (currentIndex + 1) % this.playList.length;
        } else if (isAuto && mode === PLAY_MODE.singleLoop) {
            //单曲循环，且自动切换
            nextIndex = currentIndex;
        } else if (!isAuto && mode === PLAY_MODE.singleLoop) {
            //单曲循环，手动切换
            nextIndex = currentIndex + 1;
        } else if (mode === PLAY_MODE.normal) {
            //正常播放
            nextIndex = currentIndex + 1;
        }
        this.currentPlayingSong = this.playList[nextIndex];
        changeSongAction({ song: this.currentPlayingSong });
        return this.play();
    }
    previou = () => {
        const currentIndex = this.playList.findIndex(song => song.songId === this.currentPlayingSong.songId);
        const { mode, changeSongAction } = this.props;
        if (currentIndex === 0 && PLAY_MODE.listLoop !== mode) {
            //不是列表循环
            return false;
        }
        const nextIndex = currentIndex === 0 ? (this.playList.length - 1) : (currentIndex - 1);
        this.currentPlayingSong = this.playList[nextIndex];
        changeSongAction({ song: this.currentPlayingSong });
        return this.play();
    }
    pause = () => {
        const { current } = this.audioRef;
        current.pause();
    }
    onEnded = () => {
        this.next(true);
    }
    //当前播放时间发生改变将回调该函数
    onTimeupdate = () => {
    }
    componentDidMount() {
        this.audioRef.current.addEventListener("ended", this.onEnded);
        this.audioRef.current.addEventListener("timeupdate", this.onTimeupdate);
    }
    componentWillReceiveProps(nextProps) {
        //更新了播放列表
        if (nextProps.playList !== this.props.playList) {
            this.playList = nextProps.playList.toJS();
            this.play();
        }
        //切换了歌曲
        if (nextProps.willPlaySong !== this.props.willPlaySong) {
            this.currentPlayingSong = nextProps.willPlaySong.toJS();
            this.play();
        }
        //点击了暂停
        if (nextProps.pause !== this.props.pause) {
            if (nextProps.pause) {
                this.pause();
            } else {
                const { current } = this.audioRef;
                current.play();
            }
        }
    }
    render() {
        return <audio ref={this.audioRef} style={{ display: 'none' }}></audio>;
    }
}
export default AudioPlayer;