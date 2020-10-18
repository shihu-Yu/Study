//重命名文件 异步
const fs = require('fs')

fs.rename('./foo.txt','./test.txt',(err)=>{
    if(err){
        console.log('rename err...');
    }else{
        console.log('rename success...');//rename success...输出的同时文件名也被重新命名
    }
})