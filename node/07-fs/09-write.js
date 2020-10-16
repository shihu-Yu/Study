//异步写入的合并
const fs = require('fs')
fs.writeFile('./01-txt','ni hao',{flag:'w'},err=>{
    if(err){
        console.log('write file err',err)
    }else{
        console.log('write file success')
    }
})