/*events事件的监听*/ 

const { ENOMEM } = require('constants');
const EventEmitter = require('events')

class CustomEmitter extends EventEmitter{

}

const emitter = new CustomEmitter()

//使用on方法进行事件的监听
emitter.on('test',()=>{
    console.log('fn....');
})

//使用addListener(eventName,listener)方法进行事件的监听
emitter.addListener('test',()=>{
    console.log('addlistener...');
})


//使用Once()的方法进行事件的监听 只会触发一次事件，再触发完之后事件就会被移除
emitter.once('test',()=>{
    console.log('once...')
})

console.log(emitter.addListener === emitter.on)//true 因此addListener 和 on 是同一种方法
//事件的触发  emit()方法用于事件的触发
emitter.emit('test')
emitter.emit('test')
/*
true
fn....
addlistener...
once...
fn....
addlistener...
*/