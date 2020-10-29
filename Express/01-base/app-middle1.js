//中间件的介绍

const express = require('express')

const app = express()

const port = 3000

//方法一 在当前文件 定义一个中间件


const requesTime = (req,res,next)=>{
    req.requesTime = Date.now()
    next()//改行代码一定要加 使程序可以继续往下走
}

//使用中间件
app.use(requesTime)  

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

