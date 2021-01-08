// 类型别名  使用 type 关键字给一个类型起个新名字，这就是类型别名，类型别名常用于联合类型。
type NumberOrString = string|number
let a:NumberOrString = 18
console.log(a)
a = "明天你好"
console.log(a)