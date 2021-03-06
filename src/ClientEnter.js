import React from 'react';
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { hot } from "react-hot-loader";
import routesConfig from "routes";
import { Provider as RouterKeepProvider } from "react-keep-alive";
import ResetCss from "style";
import themeHoc from "hoc/themeHoc";
import { reComputedClientWidth } from "utils";
import "animate.css";
import Player from "views/Player"
const WithThemeApp = themeHoc((props) => {
  reComputedClientWidth();
  const { theme } = props;
  return (
    <div>
      <ResetCss />
      <ThemeProvider theme={theme}>
        <div>
          <Router>
            <RouterKeepProvider>
              {renderRoutes(routesConfig)}
            </RouterKeepProvider>
            <Player></Player>
          </Router>

        </div>
      </ThemeProvider>
    </div>
  );
})
export default hot(module)(WithThemeApp);