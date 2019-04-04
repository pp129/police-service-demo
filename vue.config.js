const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
    publicPath: "",
    //注入LESS全局变量
    chainWebpack: config => {
        const types = ["vue-modules", "vue", "normal-modules", "normal"];
        types.forEach(type =>
            addStyleResource(config.module.rule("less").oneOf(type))
        );
    },
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true
            }
        }
    },
    configureWebpack: config => {
        /*if (process.env.NODE_ENV === "production") {
            // 为生产环境修改配置...
        } else {
            // 为开发环境修改配置...
        }*/
        return {
            plugins: [new CopyWebpackPlugin([{ from: "config", to: "config" }])]
        };
    }
};
function addStyleResource(rule) {
    rule.use("style-resource")
        .loader("style-resources-loader")
        .options({
            patterns: [
                path.resolve(__dirname, "src/style/variables.less") // 需要全局导入的less
            ]
        });
}
