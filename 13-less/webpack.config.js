const path = require('path')
const MiniCssExrtacrPlugin = require('mini-css-extract-plugin')
const htmlWepackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    mode:'development',
    entry:{
        'index':'./src/index.js'
    },
    output:{
        filename:'[name]-[fullhash]-[chunkhash].bundle.js',
        publicPath:'/',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        // 配置loader
        rules:[
            // 处理css 的loader
            {
                test:/\.css$/,
                use:[
                    {
                        loader:MiniCssExrtacrPlugin.loader,
                        options:{}
                    },
                    'css-loader'
                ]
            },
            // 处理less
            {
                test: /\.less$/,
                use:[
                    {
                        loader:MiniCssExrtacrPlugin.loader,
                        options:{}
                    },
                    {
                        loader:'css-loader'
                    },
                    {
                        loader:'less-loader'
                    }
                ]
            }
        ]
    },
    plugins:[
        new htmlWepackPlugin({
            template:'./src/index.html',//模板文件
            filename:'index.html',//输出文件名，
            //inject:'head',//脚本写在那个标签里,默认是true(在body结束后)
            hash:true,
            chunks:['index','contact','about']//需要包含的入口中的chunk
        }),
        new MiniCssExrtacrPlugin({
            filename:'resource/[name].[fullhash].css'//使用模版指定输出的css文件的位置和文件名称,模版和出口的模版一致
        }),
        new CleanWebpackPlugin()
    ],
    devServer:{
        contentBase:'./dist',//内容的目录,将dist目录下的文件serve到localhost:8080下运行
        port:8080,//配置端口
        open:true//自动打开浏览器窗口
    }
}