import React from "react";
import playerStore from "components/Plyaer/store";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import TopBar from "./TopBar";
import Record from "./Record";
import ToolBar from "./ToolBar";
import PlayBar from "./PlayBar";
import { PlayerWraper, ImgCover } from "./style";

class Player extends React.Component {
    state = {
        show: true
    }
    componentWillMount() {
        const { hiddentPlayerBarAction } = this.props;
        hiddentPlayerBarAction();
    }
    onBack = () => {
        const { showPlayerBarAction } = this.props;
        this.setState({
            show: false
        }, () => {
            showPlayerBarAction();
        });
    }
    render() {
        const { show } = this.state;
        const { history } = this.props;
        const currentPlayingSong = this.props.currentPlayingSong.toJS();
        const { songName, artistNames, picUrl } = currentPlayingSong;
        return <CSSTransition
            timeout={200}
            appear={true}
            in={show}
            classNames="fade"
            onExited={history.goBack}
        >
            <PlayerWraper picUrl={picUrl}>
                <ImgCover backgroundCoverUrl={picUrl} />
                <TopBar {...{ songName, artistNames }} onBack={this.onBack}></TopBar>
                <Record picUrl={picUrl} />
                <ToolBar />
                <PlayBar />
            </PlayerWraper>
        </CSSTransition>
    }
}
//Redux
const mapStateToprops = (state) => {
    const { player } = state
    return {
        currentPlayingSong: player.get("currentPlayingSong")
    }
}

const mapDispatchToprops = (dispatch) => {
    const { actions } = playerStore;
    return {
        hiddentPlayerBarAction() {
            dispatch(actions.hiddenPlayerBarAction())
        },
        showPlayerBarAction() {
            dispatch(actions.showPlayerBarAction())
        }
    }
}
const PlayerContrainer = connect(mapStateToprops, mapDispatchToprops)(Player);

export default PlayerContrainer;