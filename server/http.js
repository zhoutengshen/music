const http = require("http");
module.exports.get = (url, options) => {
    return new Promise((resolve, reject) => {
        http.get(url, options, (resp) => {
            resp.setEncoding('utf8');
            let rawData = '';
            resp.on('data', (chunk) => { rawData += chunk; });
            resp.on('end', () => {
                try {
                    resolve(rawData);
                } catch (e) {
                }
            });
        }).on('error', (e) => {
            reject(`出现错误: ${e.message}`);
        });
    });
}