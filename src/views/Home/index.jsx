import React from "react";
import { Switch } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { TopBar } from "views/Home/style";
const Home = props => {
    const { route, theme } = props;
    return <div>
        <TopBar props={theme}>
            <span className="iconfont iconcaidan"></span>
            <span>我的音乐</span>
            <span className="iconfont iconsearch"></span>
        </TopBar>
        <Switch>
            {renderRoutes(route.routes)}
        </Switch>
    </div>
}
//React.memo props 发生变化的是否更新
export default React.memo(Home);