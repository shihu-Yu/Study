const fs = require('fs')
const http = require('http')
const mime = require('./mime.json')
const path = require('path')
const server = http.createServer((req,res)=>{
    const filePath = path.normalize(__dirname+'/static/'+req.url)
    fs.readFile(filePath,(err,data)=>{
        if(err){
            res.statusCode = 404
            res.setHeader('Content-Type','text/html;charest=UTF-8')
            res.end('<h1>你访问的页面走丢了404</h1>')
        }else{
            const extame = path.extname(filePath)
            const mimeType = mime[extame] || 'text/plain'
            res.setHeader('Content-Type',mimeType+';charest=utf-8')
            res.end(data)
        }
    })
})

server.listen(3000,()=>{
    console.log('server is running at http://127.0.0.1:3000')
})