//当前版本的node不支持此种方法
const fs = require('fs/promises')
fs.readFile('./01.txt',{flag:'r',encoding:'utf8'})
.then(data=>{
    console.log(data) 
})
.catch(err=>{
    console.log('read file err:',err)    
})