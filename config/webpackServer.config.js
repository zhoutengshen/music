const path = require("path");
const webpackConfigFactory = require("./webpack.config");
const resolve = targetPath => path.resolve(__dirname, targetPath);
const evn = process.env.NODE_ENV === "development" ? "development" : "production";
const webpackConfig = webpackConfigFactory(evn);
module.exports = {
    mode: evn,
    entry: {
        server: resolve("../src/ServerEnter.js")
    },
    output: {
        ...webpackConfig.output,
        libraryTarget: "commonjs2",
        filename: "server.bundle.js"
    },
    target: "node",
    resolve: {
        ...webpackConfig.resolve,
        extensions: [".js", ".json", ".jsx"]
    },
    module: {
        ...webpackConfig.module
    },
    externals: Object.keys(require("../package.json").dependencies),
}