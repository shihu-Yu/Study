const fs = require('fs')
const http = require('http')
const path = require('path')
const url = require('url')
const mime = require('./mime.json')

const server = http.createServer(async (req,res)=>{
    const parseUrl = url.parse(req.url,true)
    const pathname = parseUrl.pathname
    //构建一个简单的MVC框架，框架的主要做法是约定规则
    //静态资源约定：以/static/开头的请求都是静态资源
    if(pathname.startsWith('/static/')){
        const filePath = path.normalize(__dirname+ pathname)
        fs.readFile(filePath,(err,data)=>{
            if(err){
                res.setHeader('Content-Type','text/html;charest=UTF-8')
                res.statusCode = 404
                res.end('<h1>你访问的页面走丢了404</h1>')
            }else{
                const extame = path.extname(filePath)
                const mimeType = mime[extame] || 'text/plain'
                res.setHeader('Content-Type',mimeType+';charest=utf-8')
                res.end(data)
            }
        })
    }
    //约定路由的格式：/controller/actions/arg1/arg2/...
    else{
        //解析路径
        const paths = pathname.split('/')
        const controller = paths[1] || 'item'
        const action = paths[2] || 'index'
        const args = paths.splice(3)

        //约定：所有的controller都在./controller/的文件夹下面
        try{
            const mode = require(path.normalize(__dirname + "/controller/" + controller))
            //调用方法
            mode[action]  &&  mode[action](...[req, res].concat(args))
            
        }catch(e){
            console.log(err)
            res.setHeader('Content-type', "text/html;charset=UTF-8")
            res.statusCode = 404
            res.end('<h1>请求出错了</h1>')
        }
    }
})
    /*
const server = http.createServer(async (req,res)=>{
    const parseUrl = url.parse(req.url,true)
    const pathname = parseUrl.pathname
    //请求首页
    if(pathname == '/' || pathname == '/index.html'){
        try {
            const filePath = path.normalize(__dirname + "/static/index.html")
            const data = await get()
            //引入模版
            const template = swig.compileFile(filePath)
            const html = template({
                data
            })
            res.setHeader('Content-type', "text/html;charset=UTF-8")
            res.end(html)
        }catch(e){
            console.log(e);
            res.statusCode = 404
            res.setHeader('Content-Type', 'text/html;charset=utf-8')
            res.end('<h1>请求出错了</h1>')
        }
    }   
        
     
    
    //处理添加逻辑
    else if(pathname == '/add'){
        //存储数据流
        let body = ''
        //通过监听data事件来读取数据
        req.on('data',(chunk)=>{
            //存储每次通过数据流发送来的数据
            body += chunk
        })
        //通过监听end事件来判断数据是否传输完毕，并做出相应处理
        req.on('end',async()=>{
            try{
                const query = querystring.parse(body)
                const data = await add(query.task)
                //返回数据
                 res.end(JSON.stringify({
                     code: 0,
                     msg:'add ok',
                     data
                 }))
            }catch(e){
                console.log(e)
                //返回数据
                res.end(JSON.stringify({
                    code:1 ,
                    msg:'add error',
                }))
            }  
        })
        
    }
    //处理删除逻辑
    else if(pathname == '/del'){
        //获取get请求的参数
        const id = parseUrl.query.id
        try{
            await del(id)
            //成功时返回的数据
            return res.end(JSON.stringify({
                code: 0,
                msg:'del ok'
            }))
        }catch(e){
           return res.end(JSON.stringify({
                code: 1,
                msg:'del error'
            }))
        }
       
    }
    //处理上传逻辑
    else if(pathname == '/uploadAvatar'){
        //生成incomingForm对象
        let incomingForm = new IncomingForm({
            //设置文件的保存路径
            uploadDir:'./static/images',
            //文件保留拓展名
            keepExtensions:true,
        })
        incomingForm.parse(req,(err, fields, files)=>{
            if(err){
                console.log('upload avatar error:',err)
                return res.end(JSON.stringify({
                    code: 1,
                    msg:'upload error'
                }))
            }else{
                //成功时返回的数据
                return res.end(JSON.stringify({
                    code: 0,
                    msg:'upload ok',
                    data:files.avatar.path.substr(7)//把文件路径中'static/'截取掉
                }))
            }
        })
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
*/
server.listen(3000,'127.0.0.1',()=>{
    console.log('server is running at http://127.0.0.1:3000')
})