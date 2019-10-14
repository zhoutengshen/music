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
// @bindLifecycle
class Album extends React.Component {
    state = {
        showAlbum: true
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
    fetchData = () => {
        const { fetchAlbumDetail, id } = this.props;
        const idd = id || this.props.match.params.id

        fetchAlbumDetail(idd);
    }
    componentDidMount() {
        // this.fetchData()
    }
    componentDidActivate() {
        //相当于把数据请求放到任务队列最后
        setTimeout(() => {
            this.fetchData();
        }, 100);
    }
    render() {
        let { albumDetail, history } = this.props;
        const { showAlbum } = this.state;
        const { onBack, fetchData } = this;
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
            unmountOnExit={true}
            onEntered={fetchData}
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
const ObservedScrollPositionAlbum = observedScrollPositionHoc(withThemeAlbum, { yRange: { start: 0, end: 500 } });
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
//组件缓存
const KeepAliveAlbum = (props) => {
    //额外数据要附加在extra，尽管是路由的信息也会被缓存起来
    return <KeepAlive name="album" extra={{ id: props.match.params.id }}><AlbumReduxContrainer {...props} /></KeepAlive>;
}
export default AlbumReduxContrainer;