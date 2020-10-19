//处理item数据
const fs = require('fs')
const path = require('path')
const util = require('util')
const dataPath = path.normalize(__dirname + "/../data/item.json")
const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)
async function get() {
    const data = await readFile(dataPath)
    const arr = JSON.parse(data)
    return arr
}

async function del(id){
    //读取文件
    const data = await readFile(dataPath)
    //将读取文件的字符串转换为数组
    const arr = JSON.parse(data)
    //根据ID删除相应数据，并生成新的数组
    const newArr = arr.filter((item)=>{
        return item.id != id
    })
    //把生成的新数组写入文件
    await writeFile(dataPath,JSON.stringify(newArr))
}

module.exports = {
    get,
    del
}