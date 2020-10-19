const fs = require('fs')
const http = require('http')
const path = require('path')
const url = require('url')
//导入swig的模板
const swig = require('swig')
const mime = require('./mime.json')

const server = http.createServer((req,res)=>{

    const parseUrl = url.parse(req.url,true)
    const pathname = parseUrl.pathname
    
    //请求首页
    if(pathname == '/' || pathname == '/index.html'){
        const filePath = path.normalize(__dirname+'/static/index.html')

        //引入模版
        const template = swig.compileFile(filePath)
        const html = template({
            data: [{ "id": "1", "task": "学习" }, { "id": "2", "task": "睡觉" }]
        })
        res.setHeader('Content-type', "text/html;charset=UTF-8")
        res.end(html)   
   
        /*
            fs.readFile(filePath,(err,data)=>{
            if(err){
                res.setHeader('Content-Type','text/html;charest=UTF-8')
                res.statusCode = 404
                res.end('<h1>你访问的页面走丢了404</h1>')
            }else{
                res.setHeader('Content-Type','text/html;charest=utf-8')
                res.end(data)
            }
        })
       */ 
    }
    //处理添加逻辑
    else if(pathname == '/add'){
        res.end(JSON.stringify({
            code: 0,
            msg:'add ok'
        }))
    }
    //处理删除逻辑
    else if(pathname == '/del'){
        res.end(JSON.stringify({
            code: 0,
            msg:'del ok'
        }))
    }
    //处理上传逻辑
    else if(pathname == '/uploadAvatar'){
        res.end(JSON.stringify({
            code: 0,
            msg:'uploadAvatar ok'
        }))
    }
    //处理静态资源
    else {
        const filePath = path.normalize(__dirname+'/static/'+ pathname)
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
    }
   
})

server.listen(3000,()=>{
    console.log('server is running at http://127.0.0.1:3000')
})