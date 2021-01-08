// 类-只读属性 readonly
/*
class Person{
    readonly name
    constructor(name:string){
        this.name = name
    }
    getName(){
        return this.name
    }
    setName(name:string){
        // return this.name = name //报错 因为 readonly限制该属性只能读取不能修改
    }
}
const p = new Person('Tom')
console.log(p.name);
*/
// p.name = "韩梅梅" // 报错readonly 限制了该属性为只读属性 不能够修改