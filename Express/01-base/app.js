const express = require('express')

const app = express()

// 方法一 指定静态资源的路径映射 所有的静态资源请求都会从public文件夹下面找
app.use(express.static('public'))

// //方法二 指定虚拟路径
// app.use('/static',express.static('public'))
const port = 3000

app.all("/",(req,res,next)=>{
    console.log('app all...')
    next()
})
app.get('/',(req,res)=>res.send('hello get'))

app.post('/',(req,res)=>res.send('hello post'))

app.put('/',(req,res)=>res.send('hello put'))

app.delete('/',(req,res,next)=>{
    console.log('handle something...')
    next()
    },(req,res)=>{
        console.log('delete..')
    })

app.listen(port,()=>{
    console.log('app is running at http://127.0.0.1:3000')
})