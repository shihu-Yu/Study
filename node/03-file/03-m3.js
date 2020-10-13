
console.log('123')
const str = 'hello';
const fn = ()=>{
    console.log('fn...');
}
const obj = {
    name:"Tom",
    age:18
}
exports.str = str
module.exports.fn = fn
module.exports = obj