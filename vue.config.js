const configureWebpack = require('./webpack.config');
module.exports = {
    devServer: {
        proxy: {
            "/api": { //地址
                // target: "http://localhost", //网址
                target: "http://127.0.0.1:7001", //网址
            }
        },
        port: 1001, //打开1001端口
    },
    lintOnSave: false,
    configureWebpack,
    publicPath: process.env.NODE_ENV === 'production' ?
        '/mySite' : '/',

}