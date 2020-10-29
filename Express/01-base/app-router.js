//路由模块化  使用express上的router 方法

const express = require('express')

const app = express()
app.use(express.static('public'))

app.use('/users',require('./router/users.js'))

app.use('/articles',require('./router/articles'))

app.listen(3000,()=>{
    console.log('server is running at http://127.0.0.1:3000')
})