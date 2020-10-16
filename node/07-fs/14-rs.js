//文件流操作大文件
const fs = require('fs')
const rs = fs.createReadStream('./a.mov')
const ws = fs.createWriteStream('./b.mov')

//调用 pipe()方法
rs.pipe(ws)

ws.on('finish',()=>{
    console.log('write done')
})

console.log('do something...')

/*
do something...
write done
*/