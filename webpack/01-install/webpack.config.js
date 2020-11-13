//  webpack的配置文件
   //单入口和出口配置
   
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
    mode:'development',//mode用来指定环境,可以是development(开发环境) 或者 production(生产环境),这两个环境下的构建目标存在着巨大差异，建议为每个环境编写彼此独立的 webpack 配置
    //简单写法
    // entry: './src/index.js',//用来指定需要打包的入口文件
    //对象写法 大多是多入口时这样设置
    entry:{
        index:'./src/index.js',
        about:'./src/about.js',
        contact:'./src/contact.js'
    },
    output: {
        // filename: 'bundle.js',//指定打包后文件名称，不用带路径 但入口时的常用写法 也可以使用下面的那种写法

         //指定输出参考根路径 当在服务器中启动时 不需要加 .  
         publicPath: './',

        // 多入口时的设置
        filename: '[name]-[chunkhash]-bundle.js',//指定打包后文件名称，不用带路径
        path: path.resolve(__dirname, 'dist')//指定打包后文件的存放位置，用绝对路径
    },
    module:{
        //配置loader
        rules:[
            //处理css的loader
            {
                test:/\.css$/,//标识出需要进行转换文件类型,这里指的是所有以.css结尾的文件
                use:[//转换时应该使用的loader
                        {
                            loader:MiniCssExtractPlugin.loader,
                            options:{}
                        },
                        "css-loader"
                ]
            },
            //处理图片
            {
                test:/\.(png|jpg|gif)$/i,
                use:[
                        {
                            loader:'url-loader',
                            options:{
                                limit:1024// //当图片大小超过limit值后,会生成一个文件,否则生成Data URL 这里的数值不能设置的太大或者太小
                            }
                        }
                ]
            }
        ]
    },
    plugins:[
        // 生成html的插件
        new htmlWebpackPlugin({
            template:'./src/index.html',//模板文件
            filename:'index.html',//输出文件名称
            //inject:'head',//脚本写在那个标签里,默认是true(在body结束后)
            hash: true,//给生成的文件添加一个唯一的hash
            // chunks: ['main']//需要包含的入口中的chunk 当只有一个入口时的写法
            chunks: ['index','about','contact']//需要包含的入口中的chunk  当有多个入口时的写法

        }),
        //  生成独立css文件的插件
        new MiniCssExtractPlugin({
            filename: 'resource/[name].[fullhash].css'//设置分离出来css文件的名称和所处位置 [name]前面可以填写生成之后保存的路径
        }),
        //  清理输出文件夹 的插件
        new CleanWebpackPlugin()
    ]
       
};


//多入口和出口配置
/*
const path = require('path');
module.exports = {
    mode:'development',//mode用来指定环境,可以是development(开发环境) 或者 production(生产环境),这两个环境下的构建目标存在着巨大差异，建议为每个环境编写彼此独立的 webpack 配置
    //对象写法
    entry:{
        index:'./src/index.js',
        about:'./src/about.js',
        contact:'./src/contact.js'
    },
    output: {
        filename: '[name]-[fullhash]-[chunkhash]-bundle.js',//指定打包后文件名称，不用带路径
        path: path.resolve(__dirname, 'dist')//指定打包后文件的存放位置，用绝对路径
    }
    
        // 1. [name] chunk名称

        // 2. [fullhash] 模块标识符的hash,每一次打包的模块hash值都不同

        // 3. [chunkhash] chunk内容的hash,每一个chunkhash值都不同(当js文件里面的内容发生改变时所生成的hash值也会发生改变)
   
}
 */