const webpack = require("webpack");
const memoryFs = require("memory-fs");
const path = require("path");
const resolve = (...realPaths) => path.resolve(__dirname, ...realPaths);
const moduleFactory = () => {
    const vm = require("vm");
    //将字符串转换为一个模块
    const str2ModuleFunc = (code) => {
        //符合node模块规范的字符串
        const strWrapedByModule = require("module").wrap(code);
        const script = new vm.Script(strWrapedByModule, { filename: "temp.js", displayErrors: true });
        const wraper = script.runInThisContext();
        const codeModule = { exports: {} };
        wraper.call(codeModule, codeModule.exports, require, codeModule, __filename, __dirname);
        return codeModule.exports;
    }
    return str2ModuleFunc;
}
module.exports = () => {
    //指定当前打包环境为开发环境
    process.env.NODE_ENV = "production";
    const ssrWebpckConfig = require("../config/webpackServer.config");
    const compiler = webpack({ ...ssrWebpckConfig, watch: true });
    const fs = new memoryFs();
    compiler.outputFileSystem = fs;
    let bundleJsExports = {};
    const str2ModuleFunc = moduleFactory();
    compiler.watch({
        ignored: [/node_modules/],
    }, (err, stats) => {
        // 在这里打印 watch/build 结果...
        if (err) {
            console.log(err);
        }
        const filepath = ssrWebpckConfig.output.path || "dist";
        const filename = ssrWebpckConfig.output.filename;
        //获取到内存里面的js文件的字符串
        const bundleJsStr = fs.readFileSync(resolve(filepath, filename), "utf-8");
        bundleJsExports = str2ModuleFunc(bundleJsStr);
    });
    return () => {
        return bundleJsExports;
    }
}