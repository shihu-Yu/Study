const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
    entry:{
        'index':'./src/index.html'
    },
    output:{
        filename:[name]-[chunk].bulle.js,
        publicpath:'/',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    {
                        loader:MiniCssExtractPlugin.loader,
                        options:{}
                    },
                    'css-loader'
                ]
            },
            {
                test:/\.less$/,
                use:[
                    {
                        loader:MiniCssExtractPlugin.loader,
                        options:{}
                    },
                    {
                        loader:'less-loader'
                    },
                    {
                        loader:'css-loader'
                    }
                ]
            }
            
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html',
            hash:true,
            chunks:['index']
        }),
        new MiniCssExtractPlugin({
            filename:'/res'
        })
        new CleanWebpackPlugin()
    ],
    devServer:{
        contentBase:'./dist',
        port:8080,
        open:true
    }
}