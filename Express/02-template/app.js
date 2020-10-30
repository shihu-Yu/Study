//模版引擎swig的使用

const express = require('express')

const app = express()

//引入模板引擎swig
const swig = require('swig')

app.use(express.static('public'))
//设置缓存 开发阶段设置不走缓存
swig.setDefaults({
    // cache: 'memory',//如果需要缓存需要添加
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
/*
app.get('/',(req,res)=>{
    //第一个参数是相对于模板目录的文件
    //第二个参数是传递给模板的数据
        res.render('index',{
            title:'我是标题'
        })
    })
*/
/*
app.get('/test',(req,res)=>{
    res.render('test',{
        name:'李雷',
        order:{
            orderNum:121212,
            price:25
        },
        type:2 , //1表示管理员   2 表示普通用户

        level:3 , //1表示vip  2 表示svip  其他 表示ssvip

        friends:['韩梅梅','小红','小明']
    })
})    
*/
app.get('/',(req,res)=>{
    res.render('index',{
        
    })
})
app.get('/detail',(req,res)=>{
    res.render('detail',{
        
    })    
})
app.get('/list',(req,res)=>{
    res.render('list',{
        
    })
})
app.listen(3000,()=>{
    console.log('server is running at http://127.0.0.1:3000')
})

