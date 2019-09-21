import React from "react";
import ItemWraper from "./style";
import propTyps from "prop-types";
const Item = props => {
    const { picUrl, title, count } = props;
    return (
        <ItemWraper>
            <div className="img-wraper">
                <p className="count">
                    <span className="icon iconfont iconerji"></span>
                    <span className="num">{count}</span>
                </p>
                <img className="img" src={picUrl} alt="图片" />
            </div>
            <h4 className="title">
                {title}
            </h4>
        </ItemWraper>
    );
}

Item.propTypes = {
    picUrl: propTyps.string.isRequired,
    title: propTyps.string.isRequired,
    count: propTyps.number.isRequired
}

export default React.memo(Item);
