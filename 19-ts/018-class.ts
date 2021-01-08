// 多态 多态简单来说就是把子类的对象当作父类对象看。
/*
class Person{
    run(){
        console.log('person is running...');
    }
}

class Teacher extends Person{
    run() {
        console.log('teacher is running...');
    }   
}

class Student extends Person{
    run() {
        console.log('student is running...');
    }       
}

function run(p:Person):void{
    p.run()
}

run(new Person())//person is running...
run(new Teacher())//teacher is running...
run(new Student())//student is running...

*/
// 我们也可以把Person定义为一个接口
/*
interface Person{
    run():void
}

class Teacher implements Person{
    run() {
        console.log('teacher is running...');
    }   
}

class Student implements Person{
    run() {
        console.log('student is running...');
    }       
}

function run(p:Person):void{
    p.run()
}

run(new Teacher())//teacher is running...
run(new Student())//student is running...
*/