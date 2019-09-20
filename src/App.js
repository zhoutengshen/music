import React from 'react';
import ResetCss from "style";
import { IconStyle } from "assets/iconfont/iconfont";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routesConfig from "routes";
function App() {
  const routes = renderRoutes(routesConfig);
  return (
    <div className="App">
      <ResetCss />
      <IconStyle />
      <Router>
        <Switch>
          {routes}
        </Switch>
      </Router>
    </div>
  );
}

export default App;