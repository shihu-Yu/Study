//HMAC加密

const crypto = require('crypto')
//crypto.createHmac(algorithm, key):创建并返回一个Hmac对象
//algorithm是加密算法,例如'sha256'、'sha512'等,不同的算法生成的密文长度不同
//key是用于生成加密的HMAC哈希的HMAC密钥,一般是一串字符,也叫做盐
const hmac = crypto.createHmac('sha512','123123')
//hmac.update(data):使用给定的数据更新Hmac对象的内容,一般是需要加密的明文
hmac.update('123456')
//hmac.digest([encoding]):计算出密文并根据编码返回
console.log(hmac.digest('hex'))//4995ac87eefac1d341a15479a7c3b688c840675bcb5d4f9583acc715d0c9d28ef6c1a8255e8ca3710e11a5656d3e9525b83987b4e21e797301c9a64bff26a9ac