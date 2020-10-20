const path = require('path')
const swig = require('swig')
const querystring = require('querystring')

const { get } = require('../model/item.js')

class Controller{
    //创建方法
    async index(req, res, ...args){
        try {
            const filePath = path.normalize(__dirname + "/../view/item/index.html")
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
}
module.exports = new Controller()