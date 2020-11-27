// webpack.dev.js

const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',//内容的目录,将dist目录下的文件serve到localhost:8080下运行
        port: 8080,//服务运行的端口
        historyApiFallback:true,//改行代码是当App.js 中使用BrowserRouter时需要配置的内容
        open:true
    }
})