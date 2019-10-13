import React from "react";
import { CSSTransition } from "react-transition-group";
import tinycolor from "tinycolor2"
import observedScrollPositionHoc from "hoc/observedScrollPositionHoc";
import { withTheme } from "styled-components";
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
    state = {
        showAlbum: true
    }
    componentDidMount() {
        const { fetchAlbumDetail, id } = this.props;
        fetchAlbumDetail(id);
    }
    onBack = () => {
        this.setState({
            showAlbum: false
        });
    }
    topBarRef = React.createRef()
    //observedScrollPositionHoc 回调该函数
    scrolling = (position) => {
        const { current } = this.topBarRef;
        const { theme } = this.props;
        const { main } = theme.palette.primary;
        let alpha = (position.y - 50) / 150 > 1 ? 1 : (position.y - 50) / 150;
        if (position.y < 50) {
            alpha = 0
        }
        const color = tinycolor(main);
        const rgba = color.setAlpha(alpha).toRgbString();
        current.style.background = rgba;

    }
    componentDidActivate() {
        const { fetchAlbumDetail } = this.props;
        fetchAlbumDetail(this.props.id);
    }
    render() {
        let { albumDetail, history } = this.props;
        const { showAlbum } = this.state;
        const { onBack } = this;
        albumDetail = albumDetail.toJS();
        const { playlist, privileges } = albumDetail
        const { description, coverImgUrl, backgroundCoverUrl,
            playCount, name, commentCount, shareCount,
            creator = {}, tracks = [] } = playlist;
        const { nickname, avatarUrl, signature } = creator;
        return <CSSTransition
            in={showAlbum}
            timeout={300}
            classNames="fly"
            appear={true}
            unmountOnExit
            onExited={history.goBack}
        >
            <Container id="album">
                <ImgCover backgroundCoverUrl={backgroundCoverUrl || coverImgUrl} />
                <TopBar ref={this.topBarRef} description={description} onBack={onBack} />
                <Header {...{ coverImgUrl, playCount, name, nickname, avatarUrl, signature }} />
                <ToolBar {...{ commentCount, shareCount }} />
                <SongList albumSongInfoList={minxSongId(tracks, privileges)} />
            </Container>
        </CSSTransition>
    }
}
//enhance
const withThemeAlbum = withTheme(Album);//获取主题信息
//函数增强 具有感知 滚动的能力
const ObservedScrollPositionAlbum = observedScrollPositionHoc(withThemeAlbum, { selector: "#album", yRange: { start: 0, end: 300 } });
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
const AlbumReduxContrainer = connect(mapStateToProps, mapDipatchToPRops)(ObservedScrollPositionAlbum);
const KeepAliveAlbum = (props) => {
    //额外数据要附加在extra，尽管是路由的信息也会被缓存起来
    return <KeepAlive name="album" extra={{ id: props.match.params.id }}><AlbumReduxContrainer {...props} /></KeepAlive>;
}
export default KeepAliveAlbum;