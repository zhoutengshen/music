import React from "react";
// import { CSSTransition } from "react-transition-group";
import { Container, ImgCover } from "./style";
import { fetchAlbumDetailAction } from "./store/actionCreator";
import { KeepAlive, bindLifecycle } from "react-keep-alive";
import { connect } from "react-redux";
import TopBar from "./TopBar";
import Header from "./Header";
import ToolBar from "./ToolBar";
import SongList from "./SongList";
const minxSongId = (tracks, privileges) => {
    for (let i = 0; i < tracks.length; i++) {
        tracks[i].songId = privileges[i].id;
    }
    return tracks;
};
@bindLifecycle
class Album extends React.Component {
    componentDidMount() {
        const { fetchAlbumDetail, id } = this.props;
        fetchAlbumDetail(id);
    }
    onBack = () => {
        const { history } = this.props;
        history.goBack();
    }
    componentDidActivate() {
        const { fetchAlbumDetail } = this.props;
        fetchAlbumDetail(this.props.id);
    }
    render() {
        let { albumDetail } = this.props;
        const { onBack } = this;
        albumDetail = albumDetail.toJS();
        const { playlist, privileges } = albumDetail
        const { description, coverImgUrl, backgroundCoverUrl,
            playCount, name, commentCount, shareCount,
            creator = {}, tracks = [] } = playlist;
        const { nickname, avatarUrl, signature } = creator;
        return <Container>
            <ImgCover backgroundCoverUrl={backgroundCoverUrl || coverImgUrl} />
            <TopBar description={description} onBack={onBack} />
            <Header {...{ coverImgUrl, playCount, name, nickname, avatarUrl, signature }} />
            <ToolBar {...{ commentCount, shareCount }} />
            <SongList albumSongInfoList={minxSongId(tracks, privileges)} />
        </Container>
    }
}

//Redux
const mapStateToProps = (state) => {
    const { albumDetail } = state;
    return {
        albumDetail: albumDetail.get("albumDetail")
    }
}
const mapDipatchToPRops = (dispatch) => {
    return {
        fetchAlbumDetail(albumId) {
            return dispatch(fetchAlbumDetailAction({ albumId }));
        }
    }
}
const AlbumReduxContrainer = connect(mapStateToProps, mapDipatchToPRops)(Album);
const KeepAliveAlbum = (props) => {
    //额外数据要附加在extra，尽管是路由的信息也会被缓存起来
    return <KeepAlive name="album" extra={{ id: props.match.params.id }}><AlbumReduxContrainer {...props} /></KeepAlive>;
}
export default KeepAliveAlbum;