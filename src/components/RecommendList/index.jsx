import React from "react";
import propTypes from "prop-types";
import { withRouter } from "react-router";
import { ListWraper, RecommendListWraper, TitleWrapper } from "./style";
import AlbumItem from "./AlbumItem";
const itemClick = ({ id, history }) => {
    history.push({
        pathname: `/recommend/${id}`,
    });
}
const List = props => {
    const { recommends, history } = props;
    return (
        <RecommendListWraper>
            <TitleWrapper>
                <h3 className="left">推荐歌曲</h3>
                <h3 className="right">歌单广场</h3>
            </TitleWrapper>
            <ListWraper >
                {
                    recommends.map(recommend => <div onClick={() => { itemClick({ id: recommend.id, history: history }) }} key={recommend.id}>
                        <AlbumItem  {...recommend} />
                    </div>)
                }
            </ListWraper>
        </RecommendListWraper >

    );
}
List.propTypes = {
    recommends: propTypes.array.isRequired
}

export default React.memo(withRouter(List));