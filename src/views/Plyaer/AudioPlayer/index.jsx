import React from "react";
import { connect } from "react-redux";

class AudioPlayer extends React.PureComponent {
    componentDidMount() {

    }
    render() {
        let { currentPlayingSongMp3Info } = this.props;
        currentPlayingSongMp3Info = currentPlayingSongMp3Info.toJS();
        const { url } = currentPlayingSongMp3Info;
        return <div>
            {
                url ? <audio src={url} autoPlay /> : null
            }
        </div>
    }
}


//Redux
const mapStateToProps = (state) => {
    const { player } = state;
    return {
        currentPlayingSongMp3Info: player.get("currentPlayingSongMp3Info")
    }
}
export default connect(mapStateToProps)(AudioPlayer);