/*events模块*/ 

const EventEmitter = require('events')

/*
const emitter = new EventEmitter()

//事件的绑定 on()方法用于监听事件

emitter.on('test',()=>{
    console.log('fn....');
})
console.log('after...')
//事件的触发  emit()方法用于事件的触发
emitter.emit('test')
*/

//使用时 一般 继承EventEmitter类来实现事件
//继承
class CustomEmitter extends EventEmitter{

}

const emitter = new CustomEmitter()
emitter.on('test',()=>{
    console.log('fn....');
})
console.log('after...')
//事件的触发  emit()方法用于事件的触发
emitter.emit('test')