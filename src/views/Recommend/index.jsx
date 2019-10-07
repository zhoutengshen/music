import React from "react";
import Slider from "components/Slider";
import { connect } from "react-redux";
import * as actions from "./store/actionCreators";
import RecommendList from "components/RecommendList";
import Srcoll from "base-ui/Scroll";
import RecommendWraper from "./style";
import PulldownPlugin from "base-ui/Scroll/Pulldown";
import { renderRoutes } from "react-router-config";
import { forceCheck } from 'react-lazyload';
import { throttle } from "lodash";

const onScroll = throttle(() => {
    forceCheck();
}, 200)
class Recommend extends React.PureComponent {
    componentDidMount() {
        const { fetchPersonalized, fetchBanner } = this.props;
        fetchBanner();
        fetchPersonalized().then(() => {
            this.srcoll.refresh();
        })

    }
    render() {
        const { props } = this;
        const { fetchPersonalized } = props;
        let { recommends, banners } = props;
        recommends = recommends.toJS();
        banners = banners.toJS();
        const isEmptyBanner = banners.length <= 0;
        return (
            <RecommendWraper>
                <Srcoll height="100%" probeType={2} onScroll={onScroll} ref={el => this.srcoll = el} click={true}>
                    <div style={{ minHeight: 'calc(100vh - 8.8rem)' }}>
                        <PulldownPlugin onPullingDown={() => fetchPersonalized()} pullDownRefresh={{ hreshold: 90, stop: 40 }}>
                            {
                                isEmptyBanner ? <div style={{ height: '10px' }} /> : <Slider banners={banners} />
                            }
                            <RecommendList recommends={recommends}></RecommendList>
                        </PulldownPlugin>
                    </div>
                </Srcoll>
                {renderRoutes(props.route.routes)}
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