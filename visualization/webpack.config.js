const path = require('path') // 引用path模块
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const glob = require('glob');
module.exports = {  // 这里是commrnt.js语法
    // 入口文件
    // entry: "./src/static/js/index.js",
    entry: glob.sync('./src/static/js/*.js'),
    // 打包后的出口文件
    output: {
        // 输出的路径  是绝对路径(导入path模块) 这里是用node来做的
        path: path.resolve(__dirname, 'dist'),
        // 输出的文件名称
        filename: 'index.js',
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        hot: true,
        historyApiFallback: true,
        compress: true
    },
    // 使用开发模式打包
    mode: "development",
    watch: true,
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/static/views/index.html",
            inject: false, //是否自动在模板文件添加 自动生成的js文件链接
            minify: {
                // 告诉htmlplugin打包之后的html文件需要压缩
                collapseWhitespace: true,
            },
            // minify: false
        }),
        /* new MiniCssExtractPlugin({
          filename: 'css/[name].css',
        }), */
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],

}
