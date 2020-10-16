//创建一个web服务器
const http = require('http')

const server = http.createServer((req,res)=>{
    // req(request)是一个可读流
    // res(response) 是一个可写流

    console.log(res)

    //终止响应
    res.end()
})

server.listen(3000,()=>{
    console.log('server is running at http://127.0.0.1:3000/');
})

