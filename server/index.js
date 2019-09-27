const express = require("express");
const reactDOMServer = require("react-dom/server");
const { ServerStyleSheet } = require("styled-components");
const { isDev } = require("../utils/env");
const fs = require("fs");
const proxy = require("express-http-proxy");
const path = require("path");
const http = require("./http");
const getBundle = require("./serverBundleHotLoad")();
const resolve = targetPath => path.resolve(__dirname, targetPath);
const app = express();
app.use("/api", (req, resp, next) => {
    console.log("API 请求");
});
if (!isDev) {
    const serverBundle = require("../build/server.bundle.js").default;
    const htmlTemplate = fs.readFileSync(resolve("../build/index.html"), "utf-8");
    //拦截/static 前缀的文件
    app.use("/static", express.static(resolve("../build/static")));
    //拦截 /前缀的静态文件
    app.use(express.static(resolve("../build")));
    app.use((req, resp, next) => {
        const sheet = new ServerStyleSheet();
        const location = {
            pathname: req.url
        };
        const routerContext = {};
        const appBundle = serverBundle({
            sheet, location, routerContext
        });
        const appStr = reactDOMServer.renderToString(appBundle);
        const styleTags = sheet.getStyleTags();
        let htmlStr = htmlTemplate.replace(/[\n\r\r\n]/g, "");
        htmlStr = htmlStr.replace("<!--app-->", appStr);
        htmlStr = htmlStr.replace("<!--style-->", styleTags);
        resp.send(htmlStr);
        next();
    });
} else {
    //代理到webpack-dev-server
    app.use("/static", proxy("localhost:3000"));
    app.use("/favicon.ico", proxy("localhost:3000"));
    app.use("/manifest.json", proxy("localhost:3000"));
    app.use((req, resp, next) => {
        http.get("http://localhost:3000/index.html").then(htmlTemplate => {
            const sheet = new ServerStyleSheet();
            const serverBundle = getBundle().default;
            const location = {
                pathname: req.url
            };
            console.log(req.url);
            const routerContext = {};
            const appBundle = serverBundle({
                sheet, location, routerContext
            });
            const appStr = reactDOMServer.renderToString(appBundle);
            const styleTags = sheet.getStyleTags();
            let htmlStr = htmlTemplate.replace(/[\n\r\r\n]/g, "");
            htmlStr = htmlStr.replace("<!--app-->", appStr);
            htmlStr = htmlStr.replace("<!--style-->", styleTags);
            resp.send(htmlStr);
        }).catch(e => {
            console.log(e);
            resp.send(e);
        })
    });
}

app.listen(4000, () => {
    console.log("listen in http://localhost:4000")
})