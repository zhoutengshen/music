import React from "react";
import { NavLink } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Content, TopBar, Tab, TabItem } from "views/Home/style";
const Home = props => {
    const { route, theme } = props;
    console.log("Home");
    return <div>
        <TopBar props={theme}>
            <span className="iconfont iconcaidan"></span>
            <span>我的音乐</span>
            <span className="iconfont iconsearch"></span>
        </TopBar>
        <Tab>
            <TabItem><NavLink activeClassName="selected" to="/recommend">推荐</NavLink></TabItem>
            <TabItem><NavLink activeClassName="selected" to="/singers">歌手</NavLink></TabItem>
            <TabItem><NavLink activeClassName="selected" to="/rank">排行榜</NavLink></TabItem>
        </Tab>
        <Content>
            {
                renderRoutes(route.routes)
            }
        </Content>
    </div >
}
//React.memo props 发生变化的是否更新
export default React.memo(Home);