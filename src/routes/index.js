import React from "react";
import { Redirect } from "react-router-dom";
import Home from "views/Home";
import Recommend from "views/Recommend";
import Rank from "views/Rank";
import Singers from "views/Singers";
import Album from "views/Album";
import Player from "views/Player";
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
                component: Recommend,
                routes: [
                    {
                        path: "/recommend/:id",
                        component: Album
                    }
                ]
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
    },
    {
        path: '/player',
        component: Player
    }
]
export default routesConfigs;