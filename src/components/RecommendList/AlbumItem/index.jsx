import React from "react";
import ItemWraper from "./style";
import propTyps from "prop-types";
import LazyLoad from "react-lazyload";
import { unitConver } from "utils"
const AlbumItem = props => {
    const { picUrl, name, playCount } = props;
    console.log(">>AlbumItem>>");
    return (
        <ItemWraper {...props} className="album-item">
            <LazyLoad height="12rem" offset={100} scroll={false}>
                <div className="img-wraper"  >
                    <p className="count">
                        <span className="icon iconfont iconerji"></span>
                        <span className="num">{unitConver(playCount)}</span>
                    </p>
                    <img className="img" src={picUrl} alt="图片" />
                </div>
                <h4 className="title">
                    {name}
                </h4>
            </LazyLoad>
        </ItemWraper >
    );
}

AlbumItem.propTypes = {
    picUrl: propTyps.string.isRequired,
    name: propTyps.string.isRequired,
    playCount: propTyps.number.isRequired
}

export default React.memo(AlbumItem);
