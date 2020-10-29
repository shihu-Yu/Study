//获取post请求的数据
const express = require('express')
const bodyParser = require('body-parser')
const port = 3000
const app = express()

app.use(express.static('public'))
 //解析json
app.use(bodyParser.json())
 //解析urlencoded内容
app.use(bodyParser.urlencoded({extended:false}))

app.post('/add',(req,res)=>{
    res.send({
        code:0
    })
    console.log(req.body)//post数据
})


app.listen(port,()=>{
    console.log('server is running at http://127.0.0.1:3000')
})