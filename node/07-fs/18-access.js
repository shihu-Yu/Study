//测试文件或者目录的权限 异步
const fs = require('fs')
//模拟存在这个文件
fs.access('./rs.txt',(err)=>{
    if(err){
        console.log('no such file or directory')
    }else{
    console.log('has such file or directory')//has such file or directory
    }
})

//模拟不存在这个文件
fs.access('./01.txt',(err)=>{
    if(err){
        console.log('no such file or directory')//no such file or directory
    }else{
    console.log('has such file or directory')
})

