import React from "react";
import Slider from "components/Slider";
import { connect } from "react-redux";
import * as actions from "./store/actionCreators";
import RecommendList from "components/RecommendList";
import Srcoll from "base-ui/Scroll";
import RecommendWraper from "./style";
import PulldownPlugin from "base-ui/Scroll/Pulldown";
import PullupPlugin from "base-ui/Scroll/Pullup";


class Recommend extends React.Component {
    page = 1
    state = {
        recommends: [],
        banners: [],
    }
    async bootstrap() {
        const { fetchBanner, fetchPersonalized } = this.props;
        await fetchBanner();
        await fetchPersonalized();
        this.srcoll.refresh();
    }
    componentDidMount() {
        this.bootstrap();
    }
    onPullingDown = () => {
        this.page = 1;
        const { fetchPersonalized } = this.props;
        return fetchPersonalized();
    }
    onPullingUp = () => {
        if (this.page >= 3) {
            return Promise.resolve(false);
        }
        this.page++;
        const { fetchPersonalized } = this.props;
        return fetchPersonalized(this.page * 30);
    }
    render() {
        const { onPullingDown, onPullingUp } = this;
        let { recommends, banners } = this.props;
        recommends = recommends.toJS();
        banners = banners.toJS();
        const isEmptyBanner = banners.length <= 0;
        return (
            <RecommendWraper>
                <Srcoll height="100%" probeType={2} ref={el => this.srcoll = el}>
                    <PullupPlugin ref={el => this.pullupDom = el} onPullingUp={onPullingUp} pullUpLoad={true}>
                        <PulldownPlugin ref={el => this.pulldownDom = el} onPullingDown={onPullingDown} pullDownRefresh={{ hreshold: 90, stop: 40 }}>
                            {
                                isEmptyBanner ? <div style={{ height: '10px' }} /> : <Slider banners={banners} />
                            }
                            <RecommendList recommends={recommends}></RecommendList>
                        </PulldownPlugin>
                    </PullupPlugin>
                </Srcoll>
            </RecommendWraper >
        );
    }
}

// Redux
const mapStateToProps = (state) => {
    const { recommend } = state;
    return {
        banners: recommend.get("banners"),
        recommends: recommend.get("recommends")
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchBanner() {
            return dispatch(actions.fetchBannerAction());
        },
        fetchPersonalized(limit = 30) {
            return dispatch(actions.fetchRecommendAction(limit))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Recommend));