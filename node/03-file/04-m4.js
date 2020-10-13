const m4 = require('./03-m3')
const m3 = require('./03-m3.js')
console.log(m3);//{ name: 'Tom', age: 18 }
console.log(m4);
/*执行结果为  我们发现虽然m1.js在m2.js中被引入了两次,但m1.js文件只被执行了一次
123
{ name: 'Tom', age: 18 }
{ name: 'Tom', age: 18 }
*/