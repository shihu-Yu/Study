// 同步写入文件
const fs = require('fs')

//打开文件
const fd = fs.openSync('./01-txt','a')
//写入文件
fs.writeSync(fd,' yi jing tai liao kuo ')
//关闭文件
fs.closeSync(fd)