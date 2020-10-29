//模版引擎swig的使用

const express = require('express')

const app = express()

//引入模板引擎swig
const swig = require('swig')

app.use(express.static('public'))
//设置缓存 开发阶段设置不走缓存
swig.setDefaults({
    cache: false
})


//第一个参数是模板名称,同时也是模板文件的扩展名
//第二个参数是解析模板的方法
app.engine('html', swig.renderFile);

//配置模板的存放目录
//第一参数必须是views
//第二个参数是模板存放的目录
app.set('views', './views')

//注册模板引擎
app.set('view engine', 'html')

//渲染模板
app.get('/',(req,res)=>{
    //第一个参数是相对于模板目录的文件
    //第二个参数是传递给模板的数据
        res.render('index',{
            title:'我是标题'
        })
    })

app.listen(3000,()=>{
    console.log('server is running at http://127.0.0.1:3000')
})

