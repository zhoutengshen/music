const express = require("express");
const reactDOMServer = require("react-dom/server");
const { ServerStyleSheet } = require("styled-components");
const { isDev } = require("../utils/env");
const fs = require("fs");
const path = require("path");
const sheet = new ServerStyleSheet();
const resolve = targetPath => path.resolve(__dirname, targetPath);
const app = express();
app.use("/api", (req, resp, next) => {
    console.log("API 请求");
});
if (isDev) {
    const serverBundle = require("../build/server.bundle.js").default;
    const htmlTemplate = fs.readFileSync(resolve("../build/index.html"), "utf-8");
    //拦截/static 前缀的文件
    app.use("/static", express.static(resolve("../build/static")));
    //拦截 /前缀的静态文件
    app.use(express.static(resolve("../build")));
    app.use((req, resp, next) => {
        const location = {
            pathname: req.url
        };
        const routerContext = {};
        const appBundle = serverBundle({
            sheet, location, routerContext
        });
        const appStr = reactDOMServer.renderToString(appBundle);
        console.log(routerContext);
        const styleTags = sheet.getStyleTags();
        let htmlStr = htmlTemplate.replace(/[\n\r\r\n]/g, "");
        htmlStr = htmlStr.replace("<!--app-->", appStr);
        htmlStr = htmlStr.replace("<!--style-->", styleTags);
        resp.send(htmlStr);
        next();
    });
} else {
    //代理到webpack-dev-server
    app.use("/static", (req, resp, next) => {
        next();
    })
    app.use((req, resp, next) => {
        next();
    });
}

app.listen(4000, () => {
    console.log("listen in http://localhost:4000")
})