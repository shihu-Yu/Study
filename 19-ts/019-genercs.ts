/*泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。
简单来说泛型就是类型系统中的“参数”。
泛型的主要作用是为了类型的重用
在定义函数、接口或类的时候，在函数名/类名/接口名的后面添加一对尖括号<>,在尖括号<>中指定类型的参数名称。
这里的参数名称可以是任何有效的名称，但通常用下列字母表示一定的意义。
T (Type)：表示类型
K(Key)：表示对象中的键类型；
V(Value)：表示对象中的值类型；
E(Element)：表示元素类型
*/
/*
function fn<T>(param:T):T{
    return param
}

fn<number>(123)//显示指定泛型的类型
fn(456)//通过类型推断出泛型的类型

fn<string>('hello')//显示指定泛型的类型
fn('hello')//通过类型推断出泛型的类型
*/

//  泛型类
/*
class Person<T>{
    name
    constructor(name:T){
        this.name = name
    }
}

let p1 = new Person<string>('郭丹丹')//显示指定泛型的类型
let p2 = new Person<string>('郭丹丹')//通过类型推断推出泛型的类型
*/

//  泛型接口
/*
interface Person<T>{
    name:T
}
let p1:Person<string> = {
    name:"郭丹丹"
}
*/

// 多个类型参数
/*
function fn<T,U>(tuple:[T,U]):[T,U]{
    return [tuple[0],tuple[1]]
}
console.log(fn(['hello', 88]));//[ 'hello', 88 ]
*/
// 泛型约束
function fn<T extends String | Number>(param:T):T{
    return param
}
fn(1)
fn('hello')
//fn(false)//error TS2345: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.