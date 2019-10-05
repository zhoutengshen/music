const proxy = require("express-http-proxy");
module.exports = function (app) {
    app.use("/api", proxy("http://localhost:4000", {
        proxyReqPathResolver: req => {
            return req.originalUrl;
        }
    }));
};
