import React from "react";
import { connect } from "react-redux";
const options = [

]
const hooks = [

];
const methods = [
]
class AudioPlayer extends React.PureComponent {
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
            current.pause();
            current.src = url;
            console.log(this.currentPlayingSong.songName);
            current.play();
        }
    }
    onended = () => {
        this.play();
    }
    componentDidMount() {
        this.audioRef.current.addEventListener("onended", this.onended);
    }
    componentWillReceiveProps(nextProps, preProps) {
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
    }
    render() {
        return <audio ref={this.audioRef} style={{ display: 'none' }}></audio>
    }
}


//Redux
const mapStateToProps = (state) => {
    const { player } = state;
    window.player = player;
    return {
        playList: player.get("playList"),
        willPlaySong: player.get("currentPlayingSong")
    }
}
export default connect(mapStateToProps)(AudioPlayer);