// 类的访问修饰符 

// public 修饰符 用public修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
// class Person{
//     public name
//     static leg:number = 2
//     public constructor(name:string){
//         this.name = name
//     }
// }

// const p = new Person('韩梅梅')
// console.log(p.name)//韩梅梅
// // 静态的属性只能在原型上调用 不能在p这个实例上调用
// console.log(Person.leg)//2


// private修饰符 用private修饰的属性或方法是私有的，不能在声明它的类的外部以及子类中访问,只能在当前类的内部访问
/*
class Person{
    private name
    constructor(name:string){
        this.name = name
    }
    getName(){
        return this.name
    }
    setName(name:string){
        return this.name = name
    }
}
class Student extends Person{
    constructor(name:string){
        super(name)
        // console.log(this.name)//报错
    }
}
const p = new Person('韩梅梅')
// console.log(p.name)//使用 private修饰符时 这里会报错 因为在类的外部无法访问被private 修饰的属性
console.log(p.getName())//韩梅梅
p.setName('tom')
console.log(p.getName())//tom

*/

// protected修饰符  用protected修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的

/*
class Person{
    protected name
    constructor(name:string){
        this.name = name
    }
    getName(){
        return this.name
    }
    setName(name:string){
        return this.name = name
    }
}
class Student extends Person{
    constructor(name:string){
        super(name)
        console.log(this.name)// 使用protected 修饰符时 可以在 子类中访问
    }
}
const p = new Person('韩梅梅')
// console.log(p.name)//使用 private修饰符时 这里会报错 因为在类的外部无法访问被private 修饰的属性
console.log(p.getName())//韩梅梅
p.setName('tom')
console.log(p.getName())//tom
*/

