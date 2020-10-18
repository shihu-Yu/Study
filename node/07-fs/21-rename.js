//文件重命名 同步
const fs = require('fs')

try{
    fs.renameSync('./test.txt','./foo.txt')
    console.log('rename success...');//rename success...输出的同时文件名也被更改
}catch{
    console.log('rename err...');
}