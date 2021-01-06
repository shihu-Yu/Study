// 在ts中定义时 可以指明定义的数据类型 一旦定义该数据就无法赋值除了定义数据类型之外的数据类型的数据 否则就会报错
/*
let str1:string = '明天你好'
str1 = 'hello'
str1 = 123
console.log(str1)
*/

// 在定义时 可以省略数据类型 可以从初始赋值判断数据类型 并将其作为默认数据类型
// let str1 = "你好"
// str1 = 'hello'
// str1 = 123 //报错
// console.log(str1)

// 当定义时没有赋值 当再次赋值时可以赋值任何类型的数据
// let str1
// str1 = 'hello'
// str1 = 123 
// console.log(str1)