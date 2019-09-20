import React from "react";
import { Switch } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import styled from "styled-components";
import { Top } from "views/Home/style";
const Home = props => {
    const { route } = props;
    return <div>
        <Top>
            <span className="icon iconfont">&#xe65c;</span>
            <span>我的音乐</span>
            <span className="icon iconfont">&#xe62b;</span>
        </Top>
        <div>
            <Switch>
                {renderRoutes(route.routes)}
            </Switch>
        </div>
    </div>
}
const StyledHome = styled(Home)`
    height:100px;
`;
export default StyledHome;