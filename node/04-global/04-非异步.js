 const callback1 = ()=>{
    console.log(1);
 }

 const callback2 = ()=>{
     console.log(2);
 }
//  const timer = setTimeout(callback1,10)//开启/关闭延迟定时器,主线程执行完一定时间后执行一次callback
// clearTimeout(timer)
// const timer = setInterval(callback1,10)//开启/关闭循环定时器,主线程执行完一定时间后间隔执行callback
// clearInterval()

setImmediate(callback1)//开启/关闭立即执行,主线程执行完,下一个事件循环开始后立即执行callback,事件循环的下一个迭代中运行
// setImmediate(callback2)

process.nextTick(callback2)//主线程执行完在当前事件循环中（当前操作结束之后）被执行,优先级比setImmediate高

console.log('after');