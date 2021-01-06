// 联合数据类型 可以在定义时指定多个数据类型 只要数据是这几个数据类型中的就可以
let unionThing:number | string | undefined

unionThing = 123
unionThing = undefined
unionThing = "haahah"


console.log(unionThing)