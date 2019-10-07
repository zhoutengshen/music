import React from "react";
import { connect } from "react-redux";
import betterScroll from "@better-scroll/core";
import * as actions from "../Recommend/store/actionCreators";
import LazyLoad from "react-lazyload";
class Singers extends React.PureComponent {
    componentDidMount() {
        this.bs = new betterScroll(this.dom, {});
        const { fetchPersonalized } = this.props;
        fetchPersonalized().then(resp => {

        });
    }
    render() {
        let { recommends } = this.props;
        recommends = recommends.toJS();
        return <div ref={el => this.dom = el} style={{ height: "calc(100vh - 8.8rem)", background: "red" }}>
            <div>
                {
                    recommends.map(item => {
                        return <div style={{ display: 'flex' }} key={item.id}>
                            <LazyLoad height={100} width={100}>
                                <img style={{ width: '100px' }} src={item.picUrl}></img>
                            </LazyLoad>
                            <div style={{ display: 'flex', flexDirection: "column", color: "#fff" }}>
                                <p style={{ lineHeight: '50px' }}>{item.copywriter}</p>
                                <p style={{ lineHeight: '50px' }}>{item.name}</p>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    }
}

// Redux
const mapStateToProps = (state) => {
    const { recommend } = state;
    return {
        recommends: recommend.get("recommends")
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchPersonalized(limit = 20) {
            return dispatch(actions.fetchRecommendAction(limit))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Singers);