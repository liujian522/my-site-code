const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
if (process.env.NODE_ENV === 'production') {
    module.exports = { //生产环境配置
        plugins: [new BundleAnalyzerPlugin(), ],
        externals: {
            vue: 'Vue',
            vuex: 'Vuex',
            'vue-router': 'VueRouter',
            axios: 'axios',
        },
    }; //生产环境
} else {
    module.exports = {

    };

}