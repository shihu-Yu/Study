// 创建文件目录 异步
const fs = require('fs')
fs.mkdir('./bar',(err)=>{
    if(err){
        console.log('mkdir err...')
    }else{
        console.log('mkdir success...')//mkdir success... 输出的同时创建了bar文件夹
    }
})