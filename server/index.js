//node 服务器 + SSR 环境
const express = require("express");
const reactDOMServer = require("react-dom/server");
const { ServerStyleSheet } = require("styled-components");
const { isDev } = require("../utils/env");
const fs = require('fs');
const bodyParser = require('body-parser');
const request = require('./util/request');
const cache = require('apicache').middleware;
const proxy = require("express-http-proxy");
const path = require("path");
const http = require("./http");
const getBundle = require("./serverBundleHotLoad")();
const resolve = targetPath => path.resolve(__dirname, targetPath);
const app = express();

//loger
app.all("*", (req, resp, next) => {
    console.log(req.url);
    next();
});
//拦截所有api请求
app.use("/api", (req, resp, next) => {
    console.log("API 请求");
    next();
});


// CORE START 网易接口
// CORS & Preflight request
app.use((req, res, next) => {
    const reg = /^\/api\/.+/;
    if (reg.test(req.path) && !req.path.includes('.')) {
        res.set({
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Origin': req.headers.origin || '*',
            'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type',
            'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
            'Content-Type': 'application/json; charset=utf-8'
        });
    }
    req.method === 'OPTIONS' ? res.status(204).end() : next()
});

// cookie parser
app.use((req, res, next) => {
    req.cookies = {}, (req.headers.cookie || '').split(/\s*;\s*/).forEach(pair => {
        let crack = pair.indexOf('=')
        if (crack < 1 || crack == pair.length - 1) return
        req.cookies[decodeURIComponent(pair.slice(0, crack)).trim()] = decodeURIComponent(pair.slice(crack + 1)).trim()
    })
    next()
})

// body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// cache
app.use(cache('2 minutes', ((req, res) => res.statusCode === 200)));

// router
const special = {
    'daily_signin.js': '/daily_signin',
    'fm_trash.js': '/fm_trash',
    'personal_fm.js': '/personal_fm'
}

fs.readdirSync(path.join(__dirname, 'module')).reverse().forEach(file => {
    if (!file.endsWith('.js')) return
    let route = (file in special) ? special[file] : '/' + file.replace(/\.js$/i, '').replace(/_/g, '/')
    let question = require(path.join(__dirname, 'module', file))
    const apiPrefix = "/api";
    app.use(apiPrefix.concat(route), (req, res) => {
        let query = Object.assign({}, req.query, req.body, { cookie: req.cookies })
        question(query, request)
            .then(answer => {
                console.log('[OK]', decodeURIComponent(req.originalUrl))
                res.append('Set-Cookie', answer.cookie)
                res.status(answer.status).send(answer.body)
            })
            .catch(answer => {
                console.log('[ERR]', decodeURIComponent(req.originalUrl))
                if (answer.body.code == '301') answer.body.msg = '需要登录'
                res.append('Set-Cookie', answer.cookie)
                res.status(answer.status).send(answer.body)
            })
    })
});
// CORE END

//非开发环境
if (!isDev) {
    //读取打包后的bundle文件
    const serverBundle = require("../build/server.bundle.js").default;
    //同步读取
    const htmlTemplate = fs.readFileSync(resolve("../build/index.html"), "utf-8");
    //拦截/static 前缀的文件
    app.use("/static", express.static(resolve("../build/static")));
    //拦截 /前缀的静态文件
    app.use(express.static(resolve("../build")));
    //ssr
    app.use((req, resp, next) => {
        //注入这个用于获取样式，详情请看 styled-compoent ssr 部分

        const sheet = new ServerStyleSheet();
        const location = {
            pathname: req.url
        };
        const routerContext = {};
        const appBundle = serverBundle({
            sheet, location, routerContext
        });
        //服务端渲染
        const appStr = reactDOMServer.renderToString(appBundle);
        const styleTags = sheet.getStyleTags();
        let htmlStr = htmlTemplate.replace("<!--app-->", appStr);
        htmlStr = htmlStr.replace("<!--style-->", styleTags);
        resp.send(htmlStr);
        next();
    });
} else {//开发环境
    //代理静态资源，和热更新请求到webpack-dev-server
    app.use(["/static", "/manifest.json", "/sockjs-node"], proxy("http://localhost:3000", {
        proxyReqPathResolver: req => {
            return req.originalUrl;
        }
    }));
    app.use((req, resp, next) => {
        http.get("http://localhost:3000/index.html").then(htmlTemplate => {
            const sheet = new ServerStyleSheet();
            const serverBundle = getBundle().default;
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
        }).catch(e => {
            console.log(e);
            resp.send(e);
        })
    });
}

app.listen(4000, () => {
    console.log("listen in http://localhost:4000")
})