//使用promise方法实现异步写入
const fs = require('fs')
const util = require('util')
const writeFile = util.promisify(fs.writeFile)
writeFile('./01-txt','ru guo da hai neng gou dai zou',{flag:'a'})
.then(data=>{
    console.log(data)
})
.catch(err=>{
    console.log(err)
})