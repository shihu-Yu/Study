//使用promise的方法实现异步
const fs = require('fs')
const util  = require ('util')
const readFile = util.promisify(fs.readFile)

readFile('./01-txt',{flag:'r',encoding:'utf8'})
//成功时获取
.then(data=>{
    console.log(data)
})
//出错时
.catch(err=>{
    console.log('read file err:',err)
})

