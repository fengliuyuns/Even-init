var webpack = require('webpack');
module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + '/app/main.js',   //当前执行脚本所在目录，nodejs全局变量
    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },
    devServer: {
        contentBase: './build', //本地服务器加载页面所在的目录
        historyApiFallback: true, //不跳转
        inline: true,  //实时刷新
        port: process.env.PORT || 8080,
        host: 'localhost',
        open: true,
        openPage: '',
        publicPath: '/',
    },

    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                },
                exclude: /node_modules/
            }, {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    }, {
                        loader: "postcss-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究')
    ],
};