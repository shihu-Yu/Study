// 格式化路径:path.normalize(path)

// const path = require('path')
// console.log(path.normalize('/foo/bar//baz/asdf/quux/..'))//  /foo/bar/baz/asdf

// // 2. 获取扩展名:path.extname(path)
const path = require('path')
console.log(path.extname('/foo/bar//baz/a.js'))//.js