//同步写入文件 合并操作
const fs = require('fs')
fs.writeFileSync('./01-txt','hello',{flag:'a'})