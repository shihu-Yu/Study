//读取文件流
const fs = require('fs')

const rs = fs.createReadStream('./rs.txt')

rs.on('open',()=>{
    console.log('read stream open...')
})
rs.on('close',()=>{
    console.log('read stream close...');
})
rs.on('end',()=>{
    console.log('read stream end...')
})
rs.on('data',(chunk)=>{
    console.log(chunk)
})
/*输出结果
read stream open...
<Buffer 6d 69 6e 67 20 74 69 61 6e 20 6e 69 20 68 61 6f 20 68 61 6e 20 7a 68 65 20 6c 65 69 20 77 65 69 20 78 69 61 6f 20>
read stream end...
read stream close...
*/