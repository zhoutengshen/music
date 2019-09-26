import React from 'react';
import { ThemeProvider } from "styled-components";
import { StaticRouter } from "react-router-dom";
import { StyleSheetManager } from 'styled-components'
import { renderRoutes } from "react-router-config";
import { Provider as ReduxProvider } from "react-redux";
import routesConfig from "routes";
import ResetCss from "style";
import themeHoc from "hoc/themeHoc";
import defaultStore from "stores";
const WithThemeApp = themeHoc((props) => {
    const { theme, children } = props;
    return (
        <ThemeProvider theme={theme}>
            {
                children
            }
        </ThemeProvider>
    );
});
const App = ({ sheet = {}, store = defaultStore, location = "/", routerContext = {} }) => {
    return (<StyleSheetManager sheet={sheet.instance}>
        <ReduxProvider store={store}>
            <ResetCss />
            <WithThemeApp>
                <StaticRouter location={location} context={routerContext}>
                    {
                        renderRoutes(routesConfig)
                    }
                </StaticRouter>
            </WithThemeApp>
        </ReduxProvider >
    </StyleSheetManager >
    );
}
export default App;