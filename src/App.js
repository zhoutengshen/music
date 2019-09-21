import React from 'react';
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Provider as ReduxProvider } from "react-redux";

import routesConfig from "routes";
import ResetCss from "style";
import themeHoc from "hoc/themeHoc";
import store from "stores";
import { reComputedClientWidth } from "utils";
const WithThemeApp = themeHoc((props) => {
  const { theme } = props;
  const routes = renderRoutes(routesConfig);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          {routes}
        </Switch>
      </Router>
    </ThemeProvider>
  );
})
const App = () => {
  reComputedClientWidth();
  return (
    <ReduxProvider store={store}>
      <ResetCss />
      <WithThemeApp></WithThemeApp>
    </ReduxProvider>
  );
}
export default App;