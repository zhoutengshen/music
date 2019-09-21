import React from "react";
import propTypes from "prop-types";
import ListWraper from "./style";
import Item from "./Item";

const List = props => {
    const { recommends } = props;
    return (
        <ListWraper>
            {
                recommends.map(recommend => <Item {...recommend} key={recommend.id}></Item>)
            }
        </ListWraper>
    );
}
List.propTypes = {
    recommends: propTypes.array.isRequired
}
export default React.memo(List);