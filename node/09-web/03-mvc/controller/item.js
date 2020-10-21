const path = require('path')
const swig = require('swig')
const querystring = require('querystring')
const { IncomingForm } = require('formidable')

const { get:getItem , add:addItem ,del:delItem} = require('../model/item.js')

class Controller{
    //创建方法
    async index(req, res, ...args){
        try {
            const filePath = path.normalize(__dirname + "/../view/item/index.html")
            const data = await getItem()
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
    //添加逻辑
    async add(req,res,...args){
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
                 const data = await addItem(query.task)
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
    async del(req,res,...args){
       
        //获取get请求的参数
        const id = args[0]
        try{
            await delItem(id)
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
    uploadAvatar(req,res,...args){
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
                    data:files.avatar.path
                }))
            }
        })
    }
}
module.exports = new Controller()