import React from "react";
import propTypes from "prop-types";
import { ListWraper, RecommendListWraper, TitleWrapper } from "./style";
import Infinity from "base-ui/Scroll/Infinity";
import Item from "./Item";

const List = props => {
    const { recommends } = props;
    return (
        <RecommendListWraper>
            <TitleWrapper>
                <h3 className="left">推荐歌曲</h3>
                <h3 className="right">歌单广场</h3>
            </TitleWrapper>
            <ListWraper>
                {
                    recommends.map(recommend => <Item {...recommend} key={recommend.id}></Item>)
                }
            </ListWraper>
        </RecommendListWraper>

    );
}
List.propTypes = {
    recommends: propTypes.array.isRequired
}
export default React.memo(List);