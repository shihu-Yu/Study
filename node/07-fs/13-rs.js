//写入文件流
const fs = require('fs')
const ws = fs.createWriteStream('./rs.txt')

//绑定事件
ws.on('open',()=>{
    console.log('write stream open...')
})
ws.on('close',()=>{
    console.log('write stream close...')
})
ws.on('finish',()=>{
    console.log('write stream finish...')
})

//写入文件
ws.write('xun bu dao de zhe yi gu yie die ')

ws.end()