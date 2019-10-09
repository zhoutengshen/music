import React from "react";
// import { CSSTransition } from "react-transition-group";
import { Container, ImgCover } from "./style";
import { fetchAlbumDetailAction } from "./store/actionCreator";
import { connect } from "react-redux";
import TopBar from "./TopBar";
import Header from "./Header";
import ToolBar from "./ToolBar";
import SongList from "./SongList";
const minxSongId = (tracks, trackIds) => {
    for (let i = 0; i < tracks.length; i++) {
        tracks[i].songId = trackIds[i].id;
    }
    return tracks;
};
class Album extends React.PureComponent {
    componentDidMount() {
        const { fetchAlbumDetail, match } = this.props;
        const { params } = match;
        const { id } = params;
        fetchAlbumDetail({ albumId: id });
    }
    onBack = () => {
        const { history } = this.props;
        history.goBack();
    }
    render() {
        let { albumDetail } = this.props;
        const { onBack } = this;
        albumDetail = albumDetail.toJS();
        const { description, coverImgUrl, backgroundCoverUrl,
            playCount, name, commentCount, shareCount,
            creator = {}, tracks = [], trackIds = [] } = albumDetail;
        const { nickname, avatarUrl, signature } = creator;
        return <Container>
            <ImgCover backgroundCoverUrl={backgroundCoverUrl || coverImgUrl} />
            <TopBar description={description} onBack={onBack} />
            <Header {...{ coverImgUrl, playCount, name, nickname, avatarUrl, signature }} />
            <ToolBar {...{ commentCount, shareCount }} />
            <SongList tracks={minxSongId(tracks, trackIds)} />
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
        fetchAlbumDetail({ albumId }) {
            return dispatch(fetchAlbumDetailAction({ albumId }));
        }
    }
}

export default connect(mapStateToProps, mapDipatchToPRops)(Album);
