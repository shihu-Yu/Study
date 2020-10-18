//创建目录 同步
const fs = require('fs')

try{
    fs.mkdirSync('./foo')
    console.log('mkdir success...')//mkdir success... 输出的同时创建了foo文件夹
}catch{
    console.log('mkdir err')
}
