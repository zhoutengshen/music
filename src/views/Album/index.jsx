import React from "react";
// import { CSSTransition } from "react-transition-group";
import { Container } from "./style";
import { fetchAlbumDetailAction } from "./store/actionCreator";
import { connect } from "react-redux";
import Header from "./Header";

///playlist/detail?id=2997916742
class Album extends React.PureComponent {
    componentDidMount() {
        const { fetchAlbumDetail, match } = this.props;
        const { params } = match;
        const { id } = params;

        fetchAlbumDetail({ albumId: id });
    }
    render() {
        let { albumDetail } = this.props;
        albumDetail = albumDetail.toJS();
        const { description } = albumDetail;
        return <Container>
            <Header description={description} />
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
