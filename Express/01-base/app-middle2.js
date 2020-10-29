//中间件的介绍

const express = require('express')

const app = express()
const middleware = require('./middleware.js')
const port = 3000
//方法二把该函数定义到其他地方然后引入

//使用中间件
app.use(middleware()) 

app.get('/',(req,res)=>{
    //获取请求时间
    console.log(req.requesTime)
    res.send('hello')
})

app.get('/r1',(req,res)=>{
    //获取请求时间
    console.log(req.requesTime)
    res.send('hello r1')
})
app.get('/r2',(req,res)=>{
    //获取请求时间
    console.log(req.requesTime)
    res.send('hello r2')
})
app.listen(port,()=>{
    console.log('server is running at http://127.0.0.1:3000')
})

