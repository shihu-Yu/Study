// 类 抽象类 类名用abstract关键字修饰,类中含有抽象方法的类就是抽象类 抽象方法是用abstract关键字修饰的方法,抽象方法只有方法名没有具体的实现,具体的实现由子类来完成。
//  抽象类中的抽象方法必须由子类实现,反过来,如果子类继承了抽象类,子类必须要实现抽象类中的抽象方法
// abstract class Person{
//     name
//     constructor(name:string){
//         this.name = name 
//     }
//     abstract sayHi():void
// }

// 抽象类不能实例化
// let p = new Person//报错
/*
class Student extends Person{
    constructor(name:string){
        super(name)

    }
    sayHi(){
        console.log(this.name + 'i am ')
    }
    sayHello(){
        console.log('hello' + this.name)
    }
}

let s = new Student('韩梅梅')
s.sayHi()
*/