//创建一个web服务器
const http = require('http')

const server = http.createServer((req,res)=>{
    // console.log(res)// req(request)是一个可写流 res(response):http.ServerResponse对象,一个可写流,包含了响应信息对象,通过它用于构造要返回给客户端的数据
    // console.log(req)// res(response) 是一个可读流 req(request):http.IncomingMessage对象,一个可读流,包含了请求信息对象,通过它可以访问请求头和请求的数据

     //通过响应信息对象的statusCode属性设置返回HTTP状态码,这里的200代表成功
    res.statusCode = 200
    //通过响应信息对象的setHeader方法设置响应头,这里设置了Content-Type
    res.setHeader('Content-Type','text/plain')
    //终止响应 通过响应信息对象的end方法设置响应的内容并关闭响应
    res.end('hello')
})

server.listen(3000,()=>{
    console.log('server is running at http://127.0.0.1:3000/');
})

