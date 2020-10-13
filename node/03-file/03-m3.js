const str = 'yuhshihu'
const fn = ()=>{
    console.log('fn...');
}
const obj = {
    name:'haha',
    age:'20'
}
console.log(exports == module.exports)
exports.str = str 
module.exports.fn = fn 
module.exports.obj = obj