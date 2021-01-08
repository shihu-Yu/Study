// 定义函数的类型

// 函数声明的类型定义
// x:number 表示第一个参数的类型  y:number表示第二个参数的类型 :number表示函数返回值的类型 如果函数没有返回值 则写成:void
// function sum(x:number,y:number):number{
//     return x + y
// }

// console.log(sum(1,2))


//  函数表达式的定义
// const sum:(x:number,y:number)=>number = (x:number,y:number):number=>{
//     return x + y
// }

// console.log(sum(1,2))

// 用接口定义函数的类型
// interface SumFn{
//     (x:number,y:number):number
// }

// let sum:SumFn = (x:number,y:number):number=>{
//     return x + y
// }

// console.log(sum(2,3))
// console.log(sum('1',2)) //报错

// 可选参数 y?:number表示可选参数 可选参数只能写道必须参数的后面 不能写在前面
// function sum(x:number,y?:number):number{
//     if(y){
//         return x + y
//     }else{
//         return x + 10
//     }
// }

// console.log(sum(1))//11
// console.log(sum(1,5))//6


// 默认参数  参数 y:number = 10 表示是默认参数 
// function sum(x:number,y:number = 10):number{
//    return x + y
// }
// console.log(sum(1))//11
// console.log(sum(1,5))//6

// 剩余参数 必须是一个数组
// function sum(x:number,...rest:number[]):number{
//     let total = x

//     rest.forEach(item=>total += item)
//     return total
// }

// console.log(sum(1,2,3))//6

//  重载    重载就是一个函数接受不同数量或类型的参数时，作出不同的处理
function sum(x:number,y:number):number;
function sum(x:string,y:string):string;
function sum(x:number|string,y:number|string):number|string{
    if(typeof x === 'number' && typeof y === 'number'){
        return x + y
    }else{  
        return 'hello:' + x + y
    }   
}

console.log(sum(1,2))
console.log(sum('hello','韩梅梅'))