//获取文件信息  同步
const fs = require('fs')
const stats = fs.statSync('./rs.txt')
console.log(stats)
/*
Stats {
  dev: 3633277178,
  mode: 33206,
  nlink: 1,
  uid: 0,
  gid: 0,
  rdev: 0,
  blksize: 4096,
  ino: 2251799814453719,
  size: 32,
  blocks: 0,
  atimeMs: 1602816869802.9998,
  mtimeMs: 1602818230321.119,
  ctimeMs: 1602818230321.119,
  birthtimeMs: 1602816869803.129,
  atime: 2020-10-16T02:54:29.803Z,
  mtime: 2020-10-16T03:17:10.321Z,
  ctime: 2020-10-16T03:17:10.321Z,
  birthtime: 2020-10-16T02:54:29.803Z
}
*/
//判断文件是否为目录
console.log(stats.isFile())//true

//判断文件是否为文件
console.log(stats.isDirectory())//false