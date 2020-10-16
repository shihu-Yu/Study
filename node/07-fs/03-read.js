//合并操作

const fs = require('fs')

//加上{flag:'r',encoding:'utf8'}这个参数之后输出的数据不再是Buffer的形式，而是以文本直接输出
fs.readFile('./01-txt',{flag:'r',encoding:'utf8'},(err,data)=>{
    if(err){
        console.log('read file err:',err)
    }else{
        console.log(data)
    }
})