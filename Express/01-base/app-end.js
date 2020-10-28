const express = require('express')
const app = express()
app.use(express.static('public'))

const port = 3000

app.all("/",(req,res,next)=>{
    console.log('app all...')
    // res.status(404).end()//返回处理结果
    //res.json(),返回json
    // res.json({ user: 'tom' })

    res.send('<h1>明天你好</h1>')//,返回多种类型数据
})


app.listen(port,()=>{
    console.log('app is running at http://127.0.0.1:3000')
})