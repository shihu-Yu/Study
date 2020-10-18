//引入crypto 模块
const crypto = require('crypto')

//crypto.createHash(algorithm):创建并返回一个Hash对象
//algorithm是加密算法,例如'sha256'、'sha512'等,不同的算法生成的密文长度不同
const hash = crypto.createHash('sha256')
//hash.update(data):使用给定的数据更新hash对象的内容,一般是需要加密的明文
hash.update('123456')
////hash.digest([encoding]):计算出密文并根据编码返回
console.log(hash.digest('hex'))//8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92