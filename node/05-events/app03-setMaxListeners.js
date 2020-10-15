/*events事件的监听*/ 

const { ENOMEM } = require('constants');
const EventEmitter = require('events')

class CustomEmitter extends EventEmitter{

}

const emitter = new CustomEmitter()

//使用setMaxListeners(n)方法限制最大的绑定事件数 这样消除警告 而且这行代码一定要在绑定事件之前
emitter.setMaxListeners(11)
//当监听过多的事件时会警告 因此需要限制
emitter.on('test',()=>{
    console.log('fn1....');
})
emitter.on('test',()=>{
    console.log('fn2....');
})
emitter.on('test',()=>{
    console.log('fn3....');
})
emitter.on('test',()=>{
    console.log('fn4....');
})
emitter.on('test',()=>{
    console.log('fn5....');
})
emitter.on('test',()=>{
    console.log('fn6....');
})
emitter.on('test',()=>{
    console.log('fn7....');
})
emitter.on('test',()=>{
    console.log('fn8....');
})
emitter.on('test',()=>{
    console.log('fn9....');
})
emitter.on('test',()=>{
    console.log('fn10....');
})
emitter.on('test',()=>{
    console.log('fn11....');
})




emitter.emit('test')