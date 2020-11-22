// 保存组件和需要更新的state的对象的队列
const stateQueue = []
// 保存所需要更新的组件的队列
const compQueue = []
/**
 * 把需要更新的state对象和需要更新的组件对象放入到队列之中
 * @param {需要更新的state对象} updatedState 
 * @param {需要更新的组件对象} comp 
 */
export function enqueue(updatedState,comp){
    if(stateQueue.length == 0){
        setTimeout(flush,0)
    }
    stateQueue.push({
        updatedState,
        comp
    })
    let hasComp = compQueue.some(item=>item == comp)
    if(!hasComp){
        compQueue.push(comp)
    }
}
//清空队列  
function flush(){
    // 统一合并需要更改的state
    let item,comp
    while (item = stateQueue.shift()) {
        const { updatedState,comp } = item
        Object.assign(comp.state,updatedState)
    }
    while (comp = compQueue.shift()) {
        comp.update()
    }
}