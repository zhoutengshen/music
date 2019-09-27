import React from 'react';
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { hot } from "react-hot-loader";
import routesConfig from "routes";
import ResetCss from "style";
import themeHoc from "hoc/themeHoc";
import { reComputedClientWidth } from "utils";
const WithThemeApp = themeHoc((props) => {
  reComputedClientWidth();
  const { theme } = props;
  return (
    <div>
      <ResetCss />
      <ThemeProvider theme={theme}>
        <Router>
          {renderRoutes(routesConfig)}
        </Router>
      </ThemeProvider>
    </div>
  );
})
export default hot(module)(WithThemeApp);