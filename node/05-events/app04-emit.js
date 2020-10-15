/*events事件的触发*/ 

const { ENOMEM } = require('constants');
const EventEmitter = require('events');
const { emit } = require('process');

class CustomEmitter extends EventEmitter{

}

const emitter = new CustomEmitter()

emitter.on('test1',(arg1,arg2)=>{
    console.log(arg1,arg2);
})

// emitter.emit('test1')//undefined undefined
emitter.emit('test1','a','b')//a b

emitter.on('test2',(arg1,arg2)=>{
    console.log(arg1,arg2)//a b
})

const args = ['a','b']
emitter.emit('test2',...args)

emitter.on('test3',(...arg)=>{
    console.log(arg)//[ 'a', 'b' ]
})

emitter.emit('test3', 'a','b')