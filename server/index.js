const express = require("express");
const reactDOMServer = require("react-dom/server");
const { ServerStyleSheet } = require("styled-components");
const serverBundle = require("../dist/server.bundle").default;
const fs = require("fs");
const path = require("path");
const sheet = new ServerStyleSheet();
const resolve = targetPath => path.resolve(__dirname, targetPath);
const app = express();
app.use((req, resp, next) => {
    const location = {
        pathname: req.path
    };
    const appBundle = serverBundle({
        sheet, location
    });
    const appStr = reactDOMServer.renderToString(appBundle);
    const styleTags = sheet.getStyleTags();
    const htmlTemplate = fs.readFileSync(resolve("../public/index.html")).toString();
    let htmlStr = htmlTemplate.replace(/[\n\r\r\n]/g, "");
    htmlStr = htmlStr.replace("<!--SSR_SLOT-->", appStr);
    htmlStr = htmlStr.replace("<!--SSR_STYLE-->", styleTags);
    resp.send(htmlStr);
    next();
});
app.listen(4000, () => {
    console.log("listen in http://localhost:4000")
})