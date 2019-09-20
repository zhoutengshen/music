import React from "react";
import { Redirect } from "react-router-dom";
import Home from "views/Home";
import Recommend from "views/Recommend";
import Rank from "views/Rank";
import Singers from "views/Singers";
import errorRouteConfig from "views/Error/route";
let routesConfigs = [
    {
        path: "/",
        component: Home,
        routes: [
            {
                path: "/",
                exact: true,
                render: () => (
                    <Redirect to={"/recommend"} />
                )
            },
            {
                path: "/recommend",
                component: Recommend
            },
            {
                path: "/singers",
                component: Singers
            },
            {
                path: "/rank",
                component: Rank
            }
        ]
    }
]
//为每个子路由添加404页面
const routesWith404PageConfigs = (routesConfigs = []) => {
    const newRoutesConfigs = routesConfigs.map(item => {
        if (item.routes) {
            const newItemRoutes = routesWith404PageConfigs([...item.routes]);
            return {
                ...item,
                routes: [...newItemRoutes, errorRouteConfig]
            }
        }
        return { ...item };
    });
    return newRoutesConfigs;
}
export default routesWith404PageConfigs(routesConfigs);