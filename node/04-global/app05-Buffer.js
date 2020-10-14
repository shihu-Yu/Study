// const buf1 = Buffer.from('abc')//创建一个包含 string 的新 Buffer
// console.log(buf1);//<Buffer 61 62 63>

const buf2 = Buffer.from('鱼')
console.log(buf2)//<Buffer e9 b1 bc>

// const buf2 = Buffer.alloc(5)//分配一个大小为 size 字节的新Buffer
// console.log(buf2)//<Buffer 00 00 00 00 00>


//buf.toString()	将Buffer实例解码成字符串
console.log(buf2.toString());//鱼

const buf3 = Buffer.alloc(5)
/*
一个二进制的0 或者 1 代表了 1bit(位)
8bit(位) = 1B(字节) = 2个16进制数
1个英文字符 = 1B
1个汉字 = 3B
1kb = 1024B
1MB = 1024kb
1GB = 1024MB
1TB = 1024GB
*/ 

buf3.fill('a')//向Buffer中填充值
console.log(buf3)//<Buffer 61 61 61 61 61>

console.log(buf2[0])//233
console.log(buf2[1])//177
console.log(buf2[2])//188
const buf4 = Buffer.alloc(3)
buf4[0] = 233
buf4[1] = 177
buf4[2] = 188
console.log(buf4)//<Buffer e9 b1 bc>
console.log(buf4.toString())//鱼




