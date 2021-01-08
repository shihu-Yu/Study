// 接口-定义和实现 TS中用interface来定义接口,用implements来实现接口。
/*
interface Runable{
    run():void
}
// 接口-实现多个接口
interface Eatable{
    eat():void
}

class Cat implements Runable{
    run(){
        console.log('cat can run...')
    }
    eat(){
        console.log('cat can eat...')
    }
}


const c = new Cat
c.run()
c.eat()
*/
//接口-接口继承接口
/*
interface Runable{
    run():void
}
// 接口-实现多个接口
interface Eatable{
    eat():void
}
interface Bird extends Runable,Eatable{
    fly():void
}
class Cat implements Runable{
    run(){
        console.log('cat can run...')
    }
    eat(){
        console.log('cat can eat...')
    }
    fly(){
        console.log('if cat can fly...')
    }
}


const c = new Cat
c.run()
c.eat()
c.fly()
*/
