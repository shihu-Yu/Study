//使用promise异步处理写入文件的合并形式
const fs = require('fs')
fs.promises.writeFile('./01-txt','di wu bu zhan zhan wu bu duan jin se tian ji xian',{flag:'a'})
.then(data=>{
    console.log(data)
})
.catch(err=>{
    console.log(err)
})
/*
//此种写法与上面的相同 只不过当前使用的node.js不支持这种写法
const fs = require('fs/promises')

fs.writeFile('./01.txt','hello',{flag:'a'})
.then(data=>{
    console.log('write file success')
})
.catch(err=>{
    console.log('write file error:',err)
})
*/ 